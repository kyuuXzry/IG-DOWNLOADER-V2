# Instagram Downloader - WhatsApp Bot

Plugin/Case Instagram Downloader untuk bot WhatsApp berbasis [@whiskeysockets/baileys](https://github.com/WhiskeySockets/Baileys). Support video reels, slide foto, dan carousel. Pakai cookie jar otomatis untuk bypass Cloudflare.

## Fitur

- Auto-detect: Reels (video) atau Post (slide/foto)
- Cookie Jar otomatis untuk bypass Cloudflare
- Auto-warmup cookie setiap 25 menit
- Auto-retry kalau kena Cloudflare challenge (403/503)
- Album support untuk slide banyak (carousel)
- Bisa kirim URL langsung atau reply pesan
- Auto-extract URL dari teks/caption
- Thumbnail slide pakai foto asli dari Instagram
- Caption formal tanpa emoji

## Install

```bash
npm install tough-cookie axios-cookiejar-support