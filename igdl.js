case "ig": {
    if (!isRegistered(m.sender) && !isCreator) return daftar(global.mess.verifikasi);
    if (checkLimit(m.sender, global.isPrem(m.sender), isCreator)) return Reply(global.mess.limit);
    addLimit(m.sender, global.isPrem(m.sender), isCreator);

    let urlInput = text || "";
    if (!urlInput && m.quoted?.text) urlInput = m.quoted.text;
    if (!urlInput && m.quoted?.caption) urlInput = m.quoted.caption;

    const urlMatch = urlInput.match(/(https?:\/\/[^\s]+instagram\.com[^\s]*)/i);
    if (!urlMatch) return Reply(`📌 *Contoh:*\n${prefix + command} https://www.instagram.com/reel/xxxxx/`);

    const rawUrl = urlMatch[1];
    const cleanUrl = rawUrl.split('&stkn=')[0].split('?')[0];
    const isReels = /\/reel|\/reels/i.test(cleanUrl);

    await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });

    try {
        const axios = require('axios');
        const { wrapper } = require('axios-cookiejar-support');
        const { CookieJar } = require('tough-cookie');
        const crypto = require('crypto');
        const {
            generateWAMessageFromContent,
            generateWAMessage
        } = require('@whiskeysockets/baileys');

        if (!global.igJar) global.igJar = new CookieJar();
        if (!global.igClient) {
            global.igClient = wrapper(axios.create({
                jar: global.igJar,
                timeout: 60000,
                maxRedirects: 5,
                validateStatus: () => true
            }));
        }

        const client = global.igClient;
        const IG_HEADERS = {
            'Accept': '*/*',
            'Accept-Language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
            'Referer': 'https://igexport.com/id/video-download/',
            'Sec-Ch-Ua': '"Chromium";v="139", "Not;A=Brand";v="99"',
            'Sec-Ch-Ua-Mobile': '?1',
            'Sec-Ch-Ua-Platform': '"Android"',
            'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Mobile Safari/537.36'
        };

        const now = Date.now();
        const WARMUP_INTERVAL = 25 * 60 * 1000;
        if (!global.igLastWarmup || now - global.igLastWarmup > WARMUP_INTERVAL) {
            try {
                await client.get('https://igexport.com/id/video-download/', { headers: IG_HEADERS });
                global.igLastWarmup = now;
            } catch (e) {}
        }

        const igFetch = async (path) => {
            const url = `https://igexport.com${path}`;
            let res = await client.get(url, { headers: IG_HEADERS });

            if (res.status === 403 || res.status === 503) {
                try {
                    await client.get('https://igexport.com/id/video-download/', { headers: IG_HEADERS });
                    global.igLastWarmup = Date.now();
                    res = await client.get(url, { headers: IG_HEADERS });
                } catch (e) {}
            }
            return { status: res.status, data: res.data };
        };

        let videoUrl = null;
        let photoUrls = [];
        let thumbnail = null;
        let filename = null;

        const encoded = encodeURIComponent(cleanUrl);

        const tryVideo = async () => {
            try {
                const { status, data } = await igFetch(`/api/ig-reels/?url=${encoded}&videoOnly=1`);
                if (status === 200 && data?.ok && data?.media?.videoUrl) {
                    videoUrl = data.media.videoUrl;
                    thumbnail = data.media.thumbnailUrl || null;
                    filename = data.media.filename;
                    return true;
                }
            } catch (e) {}
            return false;
        };

        const trySlide = async () => {
            try {
                const { status, data } = await igFetch(`/api/ig-photo/?url=${encoded}`);
                if (status === 200 && data?.ok && data?.media?.items?.length) {
                    photoUrls = data.media.items
                        .filter(item => item.type === 'image')
                        .map(item => item.url);
                    if (photoUrls.length > 0) thumbnail = photoUrls[0];
                    return true;
                }
            } catch (e) {}
            return false;
        };

        if (isReels) {
            const ok = await tryVideo();
            if (!ok) await trySlide();
        } else {
            const ok = await trySlide();
            if (!ok) await tryVideo();
        }

        if (!videoUrl && photoUrls.length === 0) {
            throw new Error('Tidak ada media yang ditemukan.');
        }

        if (videoUrl) {
            await conn.sendMessage(m.chat, {
                video: { url: videoUrl },
                mimetype: 'video/mp4',
                fileName: filename || `ig-${Date.now()}.mp4`,
                caption: `INSTAGRAM VIDEO\n\nFile: ${filename || '-'}`
            }, { quoted: m });
        } else if (photoUrls.length > 0) {
            if (photoUrls.length === 1) {
                await conn.sendMessage(m.chat, {
                    image: { url: photoUrls[0] },
                    caption: `INSTAGRAM SLIDE\n\nTotal: 1 foto`
                }, { quoted: m });
            } else {
                const album = await generateWAMessageFromContent(m.chat, {
                    messageContextInfo: { messageSecret: crypto.randomBytes(32) },
                    albumMessage: {
                        expectedImageCount: photoUrls.length,
                        expectedVideoCount: 0
                    }
                }, { userJid: m.sender, quoted: m, upload: conn.waUploadToServer });

                await conn.relayMessage(m.chat, album.message, { messageId: album.key.id });

                for (let i = 0; i < photoUrls.length; i++) {
                    const imgMsg = await generateWAMessage(
                        m.chat,
                        {
                            image: { url: photoUrls[i] },
                            caption: i === 0 ? `INSTAGRAM SLIDE\n\nTotal: ${photoUrls.length} foto` : ''
                        },
                        { upload: conn.waUploadToServer }
                    );

                    imgMsg.message.messageContextInfo = {
                        messageSecret: crypto.randomBytes(32),
                        messageAssociation: {
                            associationType: 1,
                            parentMessageKey: album.key
                        }
                    };

                    await conn.relayMessage(m.chat, imgMsg.message, { messageId: imgMsg.key.id });
                    await new Promise(r => setTimeout(r, 700));
                }
            }
        }

        await conn.sendMessage(m.chat, { react: { text: "✅", key: m.key } });

    } catch (e) {
        console.log('[IG ERROR]', e);
        await conn.sendMessage(m.chat, { react: { text: "❌", key: m.key } });
        Reply(`Error: ${e.message || 'Gagal memproses link Instagram.'}`);
    }
}
break;