<div align="center">

<img src="assets/instagram.svg" width="110" height="110" alt="Instagram"/>

# Instagram Downloader

**Plugin WhatsApp Bot untuk download konten Instagram**

Berbasis [Baileys](https://github.com/WhiskeySockets/Baileys). Mendukung video reels, slide foto, dan carousel, dengan cookie jar otomatis untuk melewati Cloudflare.

<br/>

<a href="https://github.com/kyuuXzry/IG-DOWNLOADER-V2/stargazers"><img src="https://img.shields.io/github/stars/kyuuXzry/IG-DOWNLOADER-V2?style=for-the-badge&logo=github&color=F77737&labelColor=0A0A0A" alt="Stars"/></a>
<a href="https://github.com/kyuuXzry/IG-DOWNLOADER-V2/network/members"><img src="https://img.shields.io/github/forks/kyuuXzry/IG-DOWNLOADER-V2?style=for-the-badge&logo=github&color=E1306C&labelColor=0A0A0A" alt="Forks"/></a>
<a href="https://github.com/kyuuXzry/IG-DOWNLOADER-V2/issues"><img src="https://img.shields.io/github/issues/kyuuXzry/IG-DOWNLOADER-V2?style=for-the-badge&logo=github&color=C13584&labelColor=0A0A0A" alt="Issues"/></a>
<a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-FCAF45?style=for-the-badge&logo=opensourceinitiative&logoColor=white&labelColor=0A0A0A" alt="License"/></a>

<img src="https://img.shields.io/github/last-commit/kyuuXzry/IG-DOWNLOADER-V2?style=flat-square&logo=git&logoColor=white&color=833AB4&labelColor=0A0A0A" alt="Last Commit"/>
<img src="https://img.shields.io/github/repo-size/kyuuXzry/IG-DOWNLOADER-V2?style=flat-square&logo=files&logoColor=white&color=833AB4&labelColor=0A0A0A" alt="Repo Size"/>
<img src="https://img.shields.io/github/languages/top/kyuuXzry/IG-DOWNLOADER-V2?style=flat-square&logo=javascript&logoColor=white&color=F7DF1E&labelColor=0A0A0A" alt="Top Language"/>
<img src="https://img.shields.io/github/languages/code-size/kyuuXzry/IG-DOWNLOADER-V2?style=flat-square&color=E1306C&labelColor=0A0A0A" alt="Code Size"/>

<img src="https://img.shields.io/badge/Node.js-v18+-5FA04E?style=flat-square&logo=nodedotjs&logoColor=white&labelColor=0A0A0A" alt="Node.js"/>
<a href="https://github.com/WhiskeySockets/Baileys"><img src="https://img.shields.io/badge/Baileys-WhatsApp-25D366?style=flat-square&logo=whatsapp&logoColor=white&labelColor=0A0A0A" alt="Baileys"/></a>
<img src="https://img.shields.io/badge/Maintained-yes-brightgreen?style=flat-square&labelColor=0A0A0A" alt="Maintained"/>
<img src="https://img.shields.io/badge/PRs-welcome-FCAF45?style=flat-square&labelColor=0A0A0A" alt="PRs Welcome"/>
<img src="https://img.shields.io/badge/Cloudflare-Bypass-F38020?style=flat-square&logo=cloudflare&logoColor=white&labelColor=0A0A0A" alt="Cloudflare"/>
<img src="https://img.shields.io/badge/Status-Active-brightgreen?style=flat-square&labelColor=0A0A0A" alt="Status"/>

<br/><br/>

<a href="#fitur">Fitur</a> ·
<a href="#quick-start">Quick Start</a> ·
<a href="#cara-pakai">Cara Pakai</a> ·
<a href="#cara-pasang">Cara Pasang</a> ·
<a href="#alur-kerja">Alur Kerja</a> ·
<a href="#troubleshooting">Troubleshooting</a> ·
<a href="#kontribusi">Kontribusi</a> ·
<a href="#credit">Credit</a>

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

## Quick Start

```bash
git clone https://github.com/kyuuXzry/IG-DOWNLOADER-V2.git
cd IG-DOWNLOADER-V2
npm install tough-cookie axios-cookiejar-support
cp igdl.js /path/ke/bot/plugins/
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

Taruh file `igdl.js` di folder `plugins/` bot kamu.

```text
plugins/
└── igdl.js
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

## Alur Kerja

```text
User kirim .ig + URL
        │
        ▼
   Extract URL
        │
        ▼
   Tipe konten?
   ├─ Reels ─────► Download MP4
   ├─ 1 foto ────► Download gambar
   └─ Carousel ──► Download semua slide
                   └─► Susun album
        │
        ▼
 Kirim ke WhatsApp

403 / 503 ─► Warmup cookie ─► Retry
```

## Struktur

```text
IG-DOWNLOADER-V2
├── assets
│   └── instagram.svg
├── igdl.js
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

## Kontribusi

Pull request dan issue sangat diterima.

1. Fork repo ini
2. Buat branch fitur: `git checkout -b fitur/nama-fitur`
3. Commit perubahan: `git commit -m "feat: deskripsi singkat"`
4. Push branch: `git push origin fitur/nama-fitur`
5. Buka Pull Request

Nemu bug? [Buka issue](https://github.com/kyuuXzry/IG-DOWNLOADER-V2/issues/new).

## Tech Stack

<div align="center">

<img src="https://cdn.simpleicons.org/nodedotjs/5FA04E" width="44" height="44" alt="Node.js" title="Node.js"/>&nbsp;&nbsp;&nbsp;<img src="https://cdn.simpleicons.org/javascript/F7DF1E" width="44" height="44" alt="JavaScript" title="JavaScript"/>&nbsp;&nbsp;&nbsp;<img src="https://cdn.simpleicons.org/whatsapp/25D366" width="44" height="44" alt="Baileys (WhatsApp)" title="Baileys (WhatsApp)"/>&nbsp;&nbsp;&nbsp;<img src="https://cdn.simpleicons.org/axios/5A29E4" width="44" height="44" alt="Axios" title="Axios"/>&nbsp;&nbsp;&nbsp;<img src="https://cdn.simpleicons.org/cloudflare/F38020" width="44" height="44" alt="Cloudflare" title="Cloudflare"/>

<sub>Node.js · JavaScript · Baileys · Axios · Cloudflare Bypass</sub>

</div>

## Disclaimer

Project ini dibuat untuk keperluan edukasi dan penggunaan pribadi. Gunakan dengan bijak, hormati hak cipta kreator, dan patuhi ketentuan layanan Instagram.

## Credit

<div align="center">

**Author** · KyuuAI

<a href="https://wa.me/628567126744"><img src="https://img.shields.io/badge/WhatsApp-Hubungi-25D366?style=for-the-badge&logo=whatsapp&logoColor=white&labelColor=0A0A0A" alt="WhatsApp"/></a>
<a href="https://instagram.com/Rissxzry_"><img src="https://img.shields.io/badge/Instagram-Follow-E1306C?style=for-the-badge&logo=instagram&logoColor=white&labelColor=0A0A0A" alt="Instagram"/></a>
<a href="https://github.com/kyuuXzry"><img src="https://img.shields.io/badge/GitHub-Follow-181717?style=for-the-badge&logo=github&logoColor=white&labelColor=0A0A0A" alt="GitHub"/></a>

**Scraper** · igexport.com

<a href="https://igexport.com"><img src="https://img.shields.io/badge/Website-igexport.com-833AB4?style=for-the-badge&logo=googlechrome&logoColor=white&labelColor=0A0A0A" alt="igexport.com"/></a>

<br/>

<sub>MIT License · Bebas dipakai, dimodifikasi, dan dibagikan. Jangan hapus credit, hargai creator.</sub>

<br/><br/>

<a href="https://github.com/kyuuXzry/IG-DOWNLOADER-V2"><img src="https://img.shields.io/badge/Kasih%20Bintang-Kalau%20Bermanfaat-FCAF45?style=for-the-badge&logo=github&logoColor=white&labelColor=0A0A0A" alt="Star"/></a>

</div>