<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=200&section=header&text=Instagram%20Downloader&fontSize=70&fontColor=fff&animation=twinkling&fontAlignY=35&desc=WhatsApp%20Bot%20%7C%20Baileys%20%7C%20Cookie%20Jar%20Auto&descAlignY=55&descSize=18" width="100%"/>

<br>

<a href="https://github.com/username/instagram-downloader/stargazers">
    <img src="https://img.shields.io/github/stars/username/instagram-downloader?style=for-the-badge&logo=github&color=f4c542&labelColor=0d1117" alt="Stars"/>
</a>
<a href="https://github.com/username/instagram-downloader/network/members">
    <img src="https://img.shields.io/github/forks/username/instagram-downloader?style=for-the-badge&logo=github&color=58a6ff&labelColor=0d1117" alt="Forks"/>
</a>
<a href="https://github.com/username/instagram-downloader/issues">
    <img src="https://img.shields.io/github/issues/username/instagram-downloader?style=for-the-badge&logo=github&color=f85149&labelColor=0d1117" alt="Issues"/>
</a>
<a href="https://github.com/username/instagram-downloader/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/username/instagram-downloader?style=for-the-badge&logo=opensourceinitiative&color=3fb950&labelColor=0d1117" alt="License"/>
</a>

<br><br>

<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white"/>
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
<img src="https://img.shields.io/badge/Baileys-25D366?style=for-the-badge&logo=whatsapp&logoColor=white"/>
<img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white"/>

<br><br>

<b>Instagram Downloader</b> untuk bot WhatsApp berbasis <a href="https://github.com/WhiskeySockets/Baileys">Baileys</a>.<br>
Support video reels, slide foto, dan carousel. Pakai <b>cookie jar otomatis</b> buat bypass Cloudflare.

<br>

<a href="#fitur">Fitur</a> •
<a href="#install">Install</a> •
<a href="#cara-pakai">Cara Pakai</a> •
<a href="#contoh">Contoh</a> •
<a href="#struktur">Struktur</a> •
<a href="#troubleshooting">Troubleshooting</a> •
<a href="#credit">Credit</a>

<br>

</div>

---

## Fitur

<table>
<tr>
<td width="50%" valign="top">

**Core**

- Auto-detect Reels vs Slide
- Support video & foto carousel
- Cookie jar otomatis
- Auto-warmup cookie tiap 25 menit
- Auto-retry kalau kena Cloudflare

</td>
<td width="50%" valign="top">

**Bonus**

- Album support untuk slide banyak
- Bisa kirim URL atau reply pesan
- Auto-extract URL dari caption/teks
- Thumbnail slide dari foto asli IG
- Caption formal tanpa emoji

</td>
</tr>
</table>

---

## Install

### Dependency

```bash
npm install tough-cookie axios-cookiejar-support
```

<table>
<thead>
<tr>
<th align="left">Package</th>
<th align="left">Fungsi</th>
<th align="left">Versi</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>tough-cookie</code></td>
<td>Cookie jar handler</td>
<td><img src="https://img.shields.io/npm/v/tough-cookie?style=flat-square&color=cb3837"/></td>
</tr>
<tr>
<td><code>axios-cookiejar-support</code></td>
<td>Bridge Axios + Cookie Jar</td>
<td><img src="https://img.shields.io/npm/v/axios-cookiejar-support?style=flat-square&color=cb3837"/></td>
</tr>
<tr>
<td><code>axios</code></td>
<td>HTTP client</td>
<td><img src="https://img.shields.io/npm/v/axios?style=flat-square&color=cb3837"/></td>
</tr>
<tr>
<td><code>crypto</code></td>
<td>Built-in Node.js</td>
<td><img src="https://img.shields.io/badge/built--in-yes-3fb950?style=flat-square"/></td>
</tr>
</tbody>
</table>

---

## Cara Pakai

### Kirim URL Langsung

```bash
.ig https://www.instagram.com/reel/xxxxx/
.ig https://www.instagram.com/p/xxxxx/
```

### Reply Pesan

Reply chat yang ada link Instagram-nya, terus ketik:

```bash
.ig
```

### Hasil

<table>
<thead>
<tr>
<th align="center">Input</th>
<th align="center">Output</th>
</tr>
</thead>
<tbody>
<tr>
<td align="center">Reels / Video</td>
<td align="center">Video MP4</td>
</tr>
<tr>
<td align="center">Post / Slide (1 foto)</td>
<td align="center">Gambar</td>
</tr>
<tr>
<td align="center">Post / Slide (banyak)</td>
<td align="center">Album Carousel</td>
</tr>
</tbody>
</table>

---

## Contoh

<table>
<tr>
<td align="center" width="50%">

**Video Reels**

```bash
User: .ig https://www.instagram.com/reel/C8xYz123abc/
Bot:  [Kirim video reels]
```

</td>
<td align="center" width="50%">

**Slide Foto**

```bash
User: .ig https://www.instagram.com/p/C8xYz123abc/
Bot:  [Kirim gambar / album]
```

</td>
</tr>
</table>

---

## Cara Pasang

### 1. Install Dependency

```bash
npm install tough-cookie axios-cookiejar-support
```

### 2. Copy File Plugin

Copy file `instagram.js` ke folder `plugins/` di bot lo.

```
plugins/
└── instagram.js
```

### 3. Pastikan Variabel Ada

<table>
<thead>
<tr>
<th align="left">Variabel</th>
<th align="left">Deskripsi</th>
</tr>
</thead>
<tbody>
<tr><td><code>conn</code></td><td>Instance WhatsApp (<code>makeWASocket</code>)</td></tr>
<tr><td><code>m</code></td><td>Message object</td></tr>
<tr><td><code>text</code></td><td>Isi pesan setelah command</td></tr>
<tr><td><code>prefix</code></td><td>Prefix bot (biasanya <code>.</code>)</td></tr>
<tr><td><code>command</code></td><td>Command yang diketik</td></tr>
<tr><td><code>Reply</code></td><td>Fungsi reply pesan</td></tr>
<tr><td><code>isRegistered</code></td><td>Cek user terdaftar</td></tr>
<tr><td><code>isCreator</code></td><td>Cek user creator/owner</td></tr>
<tr><td><code>checkLimit</code></td><td>Cek limit user</td></tr>
<tr><td><code>addLimit</code></td><td>Tambah limit user</td></tr>
<tr><td><code>daftar</code></td><td>Fungsi registrasi</td></tr>
<tr><td><code>global.mess</code></td><td>Object berisi pesan template</td></tr>
</tbody>
</table>

> Kalau nama instance beda (misal `alip`, `kyuu`, dll), tinggal ganti `conn` ke nama instance bot lo.

### 4. Restart Bot

```bash
node index.js
```

---

## Struktur

```
instagram-downloader/
├── README.md
├── LICENSE
└── plugins/
    └── instagram.js     ← file case IG
```

---

## Troubleshooting

<details>
<summary><b>Cloudflare Block (403/503)</b></summary>

<br>

Cookie jar otomatis retry. Kalau masih gagal:
- Cek koneksi internet
- Kalau server di Indonesia diblokir, pakai VPS luar
- Coba tunggu 1-2 menit, terus ulang command

</details>

<details>
<summary><b>Media Tidak Ditemukan</b></summary>

<br>

- Pastikan URL Instagram valid
- Pastikan post tidak private
- Coba URL lain untuk test

</details>

<details>
<summary><b>Error Cannot find module</b></summary>

<br>

```bash
npm install tough-cookie axios-cookiejar-support
```

Pastikan install di folder bot.

</details>

<details>
<summary><b>Cookie Expired</b></summary>

<br>

Warmup otomatis tiap 25 menit. Kalau error, tunggu aja. Atau restart bot.

</details>

---

## Tech Stack

<div align="center">

<table>
<tr>
<td align="center" width="25%">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width="50"/><br>
<b>Node.js</b><br>
<sub>Runtime</sub>
</td>
<td align="center" width="25%">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="50"/><br>
<b>JavaScript</b><br>
<sub>Language</sub>
</td>
<td align="center" width="25%">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/whatsapp/whatsapp-original.svg" width="50"/><br>
<b>Baileys</b><br>
<sub>WhatsApp API</sub>
</td>
<td align="center" width="25%">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/axios/axios-plain.svg" width="50"/><br>
<b>Axios</b><br>
<sub>HTTP Client</sub>
</td>
</tr>
</table>

</div>

---

## Credit

<div align="center">

<table>
<tr>
<td align="center" width="50%">

**Author**

**KyuuAI**

<a href="https://wa.me/628567126744">
    <img src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white"/>
</a>
<a href="https://instagram.com/Rissxzry_">
    <img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white"/>
</a>

</td>
<td align="center" width="50%">

**Scraper**

**igexport.com**

<a href="https://igexport.com">
    <img src="https://img.shields.io/badge/Website-58a6ff?style=for-the-badge&logo=googlechrome&logoColor=white"/>
</a>

</td>
</tr>
</table>

</div>

---

## License

<div align="center">

<a href="https://github.com/username/instagram-downloader/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-3fb950?style=for-the-badge&logo=opensourceinitiative&logoColor=white"/>
</a>

<br><br>

**MIT License** - Bebas dipakai, modif, dan share.

**Jangan hapus credit, hargai creator.**

</div>

---

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=120&section=footer&text=Made%20with%20Love&fontSize=30&fontColor=fff&animation=twinkling&fontAlignY=70" width="100%"/>

</div>