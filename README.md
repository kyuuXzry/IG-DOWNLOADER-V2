<div align="center">

<img src="assets/instagram.svg" width="120" height="120" alt="Instagram"/>

# Instagram Downloader

**Plugin WhatsApp Bot untuk download konten Instagram**

Berbasis [Baileys](https://github.com/WhiskeySockets/Baileys). Mendukung video reels, slide foto, dan carousel, dengan cookie jar otomatis untuk melewati Cloudflare.

<br/>

<a href="https://github.com/kyuuXzry/INSTAGRAM-DOWNLOADER/stargazers"><img src="https://img.shields.io/github/stars/kyuuXzry/INSTAGRAM-DOWNLOADER?style=flat-square&logo=github&color=F77737&labelColor=0A0A0A" alt="Stars"/></a>
<a href="https://github.com/kyuuXzry/INSTAGRAM-DOWNLOADER/network/members"><img src="https://img.shields.io/github/forks/kyuuXzry/INSTAGRAM-DOWNLOADER?style=flat-square&logo=github&color=E1306C&labelColor=0A0A0A" alt="Forks"/></a>
<img src="https://img.shields.io/badge/Node.js-v18+-833AB4?style=flat-square&logo=nodedotjs&logoColor=white&labelColor=0A0A0A" alt="Node.js"/>
<a href="https://github.com/WhiskeySockets/Baileys"><img src="https://img.shields.io/badge/Baileys-WhatsApp-C13584?style=flat-square&logo=whatsapp&logoColor=white&labelColor=0A0A0A" alt="Baileys"/></a>
<a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-FCAF45?style=flat-square&logo=opensourceinitiative&logoColor=white&labelColor=0A0A0A" alt="License"/></a>

<br/><br/>

<a href="#fitur">Fitur</a> ·
<a href="#install">Install</a> ·
<a href="#cara-pakai">Cara Pakai</a> ·
<a href="#cara-pasang">Cara Pasang</a> ·
<a href="#troubleshooting">Troubleshooting</a> ·
<a href="#credit">Credit</a>

<br/><br/>

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:833AB4,50:E1306C,100:FCAF45&height=3" width="100%"/>

</div>

<br/>

## Fitur

<table width="100%">
<tr>
<td width="50%" valign="top">

**Core**

- Auto-detect Reels vs Slide
- Support video dan foto carousel
- Cookie jar otomatis
- Auto-warmup cookie tiap 25 menit
- Auto-retry kalau kena Cloudflare

</td>
<td width="50%" valign="top">

**Bonus**

- Album untuk slide banyak
- Bisa kirim URL atau reply pesan
- Auto-extract URL dari caption/teks
- Thumbnail slide dari foto asli IG
- Caption formal tanpa emoji

</td>
</tr>
</table>

## Install

```bash
npm install tough-cookie axios-cookiejar-support
```

| Package | Fungsi | Versi |
| :-- | :-- | :-- |
| `tough-cookie` | Cookie jar handler | <img src="https://img.shields.io/npm/v/tough-cookie?style=flat-square&color=E1306C&labelColor=0A0A0A"/> |
| `axios-cookiejar-support` | Bridge Axios + Cookie Jar | <img src="https://img.shields.io/npm/v/axios-cookiejar-support?style=flat-square&color=E1306C&labelColor=0A0A0A"/> |
| `axios` | HTTP client | <img src="https://img.shields.io/npm/v/axios?style=flat-square&color=E1306C&labelColor=0A0A0A"/> |
| `crypto` | Built-in Node.js | <img src="https://img.shields.io/badge/built--in-yes-833AB4?style=flat-square&labelColor=0A0A0A"/> |

## Cara Pakai

**Kirim URL langsung**

```bash
.ig https://www.instagram.com/reel/xxxxx/
.ig https://www.instagram.com/p/xxxxx/
```

**Reply pesan**

Reply chat yang ada link Instagram-nya, lalu ketik:

```bash
.ig
```

**Hasil**

| Input | Output |
| :-- | :-- |
| Reels / Video | Video MP4 |
| Post / Slide (1 foto) | Gambar |
| Post / Slide (banyak) | Album Carousel |

**Contoh**

```text
User: .ig https://www.instagram.com/reel/C8xYz123abc/
Bot:  [Kirim video reels]
```

```text
User: .ig https://www.instagram.com/p/C8xYz123abc/
Bot:  [Kirim gambar / album]
```

## Cara Pasang

**1. Install dependency**

```bash
npm install tough-cookie axios-cookiejar-support
```

**2. Salin plugin**

Taruh file `instagram.js` di folder `plugins/` bot kamu.

```text
plugins/
└── instagram.js
```

**3. Pastikan variabel tersedia**

| Variabel | Deskripsi |
| :-- | :-- |
| `conn` | Instance WhatsApp (`makeWASocket`) |
| `m` | Message object |
| `text` | Isi pesan setelah command |
| `prefix` | Prefix bot (biasanya `.`) |
| `command` | Command yang diketik |
| `Reply` | Fungsi reply pesan |
| `isRegistered` | Cek user terdaftar |
| `isCreator` | Cek user creator/owner |
| `checkLimit` | Cek limit user |
| `addLimit` | Tambah limit user |
| `daftar` | Fungsi registrasi |
| `global.mess` | Object berisi pesan template |

> [!NOTE]
> Kalau nama instance di bot kamu berbeda, ganti `conn` dengan nama instance bot kamu.

**4. Restart bot**

```bash
node index.js
```

## Struktur

```text
INSTAGRAM-DOWNLOADER
├── assets
│   └── instagram.svg
├── plugins
│   └── instagram.js
├── LICENSE
└── README.md
```

## Troubleshooting

<details>
<summary><b>Cloudflare Block (403/503)</b></summary>
<br/>
Cookie jar otomatis retry. Kalau masih gagal:
<ul>
<li>Cek koneksi internet</li>
<li>Kalau server di Indonesia diblokir, pakai VPS luar</li>
<li>Tunggu 1-2 menit, lalu ulangi command</li>
</ul>
</details>

<details>
<summary><b>Media tidak ditemukan</b></summary>
<br/>
<ul>
<li>Pastikan URL Instagram valid</li>
<li>Pastikan post tidak private</li>
<li>Coba URL lain untuk test</li>
</ul>
</details>

<details>
<summary><b>Error Cannot find module</b></summary>
<br/>

```bash
npm install tough-cookie axios-cookiejar-support
```

Pastikan install di folder bot.

</details>

<details>
<summary><b>Cookie expired</b></summary>
<br/>
Warmup otomatis tiap 25 menit. Kalau error, tunggu sebentar atau restart bot.
</details>

## Tech Stack

<div align="center">

<img src="https://cdn.simpleicons.org/nodedotjs/5FA04E" width="44" height="44" alt="Node.js" title="Node.js"/>&nbsp;&nbsp;&nbsp;<img src="https://cdn.simpleicons.org/javascript/F7DF1E" width="44" height="44" alt="JavaScript" title="JavaScript"/>&nbsp;&nbsp;&nbsp;<img src="https://cdn.simpleicons.org/whatsapp/25D366" width="44" height="44" alt="Baileys (WhatsApp)" title="Baileys (WhatsApp)"/>&nbsp;&nbsp;&nbsp;<img src="https://cdn.simpleicons.org/axios/5A29E4" width="44" height="44" alt="Axios" title="Axios"/>

<sub>Node.js · JavaScript · Baileys · Axios</sub>

</div>

## Credit

<div align="center">

**Author** · KyuuAI

<a href="https://wa.me/628567126744"><img src="https://img.shields.io/badge/WhatsApp-Hubungi-25D366?style=flat-square&logo=whatsapp&logoColor=white&labelColor=0A0A0A" alt="WhatsApp"/></a>
<a href="https://instagram.com/Rissxzry_"><img src="https://img.shields.io/badge/Instagram-Follow-E1306C?style=flat-square&logo=instagram&logoColor=white&labelColor=0A0A0A" alt="Instagram"/></a>

**Scraper** · igexport.com

<a href="https://igexport.com"><img src="https://img.shields.io/badge/Website-igexport.com-833AB4?style=flat-square&logo=googlechrome&logoColor=white&labelColor=0A0A0A" alt="igexport.com"/></a>

<br/>

<sub>MIT License · Bebas dipakai, dimodifikasi, dan dibagikan. Jangan hapus credit, hargai creator.</sub>

<br/><br/>

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:833AB4,50:E1306C,100:FCAF45&height=3" width="100%"/>

</div>
