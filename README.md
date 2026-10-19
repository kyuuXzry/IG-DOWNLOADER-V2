<div align="center">

<img src="assets/instagram.svg" width="120" height="120" alt="Instagram Downloader"/>

# Instagram Downloader

**Plugin WhatsApp bot untuk mengunduh Reels, foto, dan carousel Instagram**

Berbasis [Baileys](https://github.com/WhiskeySockets/Baileys), dilengkapi cookie jar otomatis, auto-warmup, dan auto-retry untuk melewati proteksi Cloudflare.

<br/>

<a href="https://github.com/kyuuXzry/IG-DOWNLOADER-V2/stargazers"><img src="https://img.shields.io/github/stars/kyuuXzry/IG-DOWNLOADER-V2?style=for-the-badge&logo=github&color=F77737&labelColor=0A0A0A" alt="Stars"/></a>
<a href="https://github.com/kyuuXzry/IG-DOWNLOADER-V2/network/members"><img src="https://img.shields.io/github/forks/kyuuXzry/IG-DOWNLOADER-V2?style=for-the-badge&logo=github&color=E1306C&labelColor=0A0A0A" alt="Forks"/></a>
<a href="https://github.com/kyuuXzry/IG-DOWNLOADER-V2/watchers"><img src="https://img.shields.io/github/watchers/kyuuXzry/IG-DOWNLOADER-V2?style=for-the-badge&logo=github&color=C13584&labelColor=0A0A0A" alt="Watchers"/></a>
<a href="https://github.com/kyuuXzry/IG-DOWNLOADER-V2/issues"><img src="https://img.shields.io/github/issues/kyuuXzry/IG-DOWNLOADER-V2?style=for-the-badge&logo=github&color=833AB4&labelColor=0A0A0A" alt="Issues"/></a>
<a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-FCAF45?style=for-the-badge&logo=opensourceinitiative&logoColor=white&labelColor=0A0A0A" alt="License"/></a>

<img src="https://img.shields.io/github/last-commit/kyuuXzry/IG-DOWNLOADER-V2?style=flat-square&logo=git&logoColor=white&color=833AB4&labelColor=0A0A0A" alt="Last Commit"/>
<img src="https://img.shields.io/github/commit-activity/m/kyuuXzry/IG-DOWNLOADER-V2?style=flat-square&logo=github&color=E1306C&labelColor=0A0A0A" alt="Commit Activity"/>
<img src="https://img.shields.io/github/repo-size/kyuuXzry/IG-DOWNLOADER-V2?style=flat-square&color=F77737&labelColor=0A0A0A" alt="Repo Size"/>
<img src="https://img.shields.io/github/languages/code-size/kyuuXzry/IG-DOWNLOADER-V2?style=flat-square&color=C13584&labelColor=0A0A0A" alt="Code Size"/>
<img src="https://img.shields.io/github/languages/top/kyuuXzry/IG-DOWNLOADER-V2?style=flat-square&logo=javascript&logoColor=white&color=F7DF1E&labelColor=0A0A0A" alt="Top Language"/>

<img src="https://img.shields.io/badge/Node.js-%E2%89%A518-5FA04E?style=flat-square&logo=nodedotjs&logoColor=white&labelColor=0A0A0A" alt="Node.js"/>
<a href="https://github.com/WhiskeySockets/Baileys"><img src="https://img.shields.io/badge/Baileys-WhatsApp-25D366?style=flat-square&logo=whatsapp&logoColor=white&labelColor=0A0A0A" alt="Baileys"/></a>
<img src="https://img.shields.io/badge/Axios-HTTP%20Client-5A29E4?style=flat-square&logo=axios&logoColor=white&labelColor=0A0A0A" alt="Axios"/>
<img src="https://img.shields.io/badge/Cloudflare-Bypass-F38020?style=flat-square&logo=cloudflare&logoColor=white&labelColor=0A0A0A" alt="Cloudflare"/>
<img src="https://img.shields.io/badge/Platform-Linux%20%7C%20Windows%20%7C%20Termux-833AB4?style=flat-square&logo=linux&logoColor=white&labelColor=0A0A0A" alt="Platform"/>

<img src="https://img.shields.io/badge/Status-Active-brightgreen?style=flat-square&labelColor=0A0A0A" alt="Status"/>
<img src="https://img.shields.io/badge/Maintained-yes-brightgreen?style=flat-square&labelColor=0A0A0A" alt="Maintained"/>
<img src="https://img.shields.io/badge/PRs-welcome-FCAF45?style=flat-square&labelColor=0A0A0A" alt="PRs Welcome"/>
<img src="https://img.shields.io/badge/Made%20with-%E2%9D%A4-E1306C?style=flat-square&labelColor=0A0A0A" alt="Made with love"/>

<br/><br/>

[Highlights](#highlights) · [Preview](#preview) · [Quick Start](#quick-start) · [Command](#command) · [Cara Kerja](#cara-kerja) · [FAQ](#faq) · [Roadmap](#roadmap) · [Kontribusi](#kontribusi) · [Credit](#credit)

</div>

<br/>

## Daftar Isi

- [Highlights](#highlights)
- [Preview](#preview)
- [Quick Start](#quick-start)
- [Command](#command)
- [Cara Kerja](#cara-kerja)
- [Kompatibilitas](#kompatibilitas)
- [Troubleshooting](#troubleshooting)
- [FAQ](#faq)
- [Roadmap](#roadmap)
- [Struktur Proyek](#struktur-proyek)
- [Kontribusi](#kontribusi)
- [Tech Stack](#tech-stack)
- [Disclaimer](#disclaimer)
- [Lisensi](#lisensi)
- [Credit](#credit)

## Highlights

<table width="100%">
<tr>
<td width="33%" valign="top">

**Deteksi Cerdas**

Membedakan Reels, foto tunggal, dan carousel secara otomatis tanpa command tambahan.

</td>
<td width="33%" valign="top">

**Tahan Blokir**

Cookie jar, warmup tiap 25 menit, dan auto-retry saat terkena Cloudflare 403/503.

</td>
<td width="33%" valign="top">

**Input Fleksibel**

Kirim URL langsung, reply pesan, atau biarkan bot mengambil link dari caption/teks.

</td>
</tr>
<tr>
<td width="33%" valign="top">

**Album Carousel**

Slide banyak foto dikirim sebagai album, lengkap dengan thumbnail dari foto asli Instagram.

</td>
<td width="33%" valign="top">

**Caption Bersih**

Format caption formal tanpa emoji, siap dipakai untuk bot berkarakter profesional.

</td>
<td width="33%" valign="top">

**Plug and Play**

Satu file plugin, dua dependency tambahan, langsung jalan di bot Baileys kamu.

</td>
</tr>
</table>

## Preview

```text
┌─────────────────────────────────────────────┐
│ User                                        │
│ .ig https://www.instagram.com/reel/C8xYz/   │
├─────────────────────────────────────────────┤
│ Bot                                         │
│ [ Video MP4 ]                               │
├─────────────────────────────────────────────┤
│ User                                        │
│ .ig https://www.instagram.com/p/C8xYz/      │
├─────────────────────────────────────────────┤
│ Bot                                         │
│ [ Album Carousel ]                          │
└─────────────────────────────────────────────┘
```

## Quick Start

**1. Clone repository**

```bash
git clone https://github.com/kyuuXzry/IG-DOWNLOADER-V2.git
cd IG-DOWNLOADER-V2
```

**2. Install dependency di folder bot**

```bash
npm install tough-cookie axios-cookiejar-support
```

**3. Salin plugin**

```bash
cp igdl.js /path/ke/bot/plugins/
```

**4. Restart bot**

```bash
node index.js
```

> [!IMPORTANT]
> Jalankan `npm install` di folder bot kamu, bukan di folder repo ini, supaya dependency terbaca oleh plugin.

> [!NOTE]
> Kalau nama instance di bot kamu bukan `conn`, ganti pemakaian `conn` di plugin dengan nama instance bot kamu.

### Dependency

| Package | Fungsi | Versi |
| :-- | :-- | :-- |
| `axios` | HTTP client | <img src="https://img.shields.io/npm/v/axios?style=flat-square&color=E1306C&labelColor=0A0A0A" alt="axios"/> |
| `tough-cookie` | Cookie jar handler | <img src="https://img.shields.io/npm/v/tough-cookie?style=flat-square&color=E1306C&labelColor=0A0A0A" alt="tough-cookie"/> |
| `axios-cookiejar-support` | Bridge Axios dan cookie jar | <img src="https://img.shields.io/npm/v/axios-cookiejar-support?style=flat-square&color=E1306C&labelColor=0A0A0A" alt="axios-cookiejar-support"/> |
| `crypto` | Modul bawaan Node.js | <img src="https://img.shields.io/badge/built--in-yes-833AB4?style=flat-square&labelColor=0A0A0A" alt="crypto"/> |

## Command

| Command | Input | Output |
| :-- | :-- | :-- |
| `.ig <url>` | Link Reels atau video | Video MP4 |
| `.ig <url>` | Link post berisi 1 foto | Gambar |
| `.ig <url>` | Link post berisi banyak foto | Album carousel |
| `.ig` | Reply pesan yang berisi link | Sesuai tipe konten |

**Format URL yang didukung**

```text
https://www.instagram.com/reel/<id>/
https://www.instagram.com/p/<id>/
```

## Cara Kerja

```text
.ig <url>
   │
   ▼
Ekstrak URL dari teks atau pesan yang di-reply
   │
   ▼
Request ke igexport.com dengan cookie jar aktif
   │
   ├── 403 / 503 ──► Warmup cookie ──► Retry
   │
   ▼
Deteksi tipe konten
   ├── Reels ───────► Kirim video MP4
   ├── 1 foto ──────► Kirim gambar
   └── Carousel ────► Kirim album
```

| Komponen | Peran |
| :-- | :-- |
| Cookie jar | Menyimpan sesi antar request |
| Warmup | Menyegarkan cookie setiap 25 menit |
| Retry | Mengulang request saat diblokir Cloudflare |
| Type detector | Menentukan format output: video, gambar, atau album |

## Kompatibilitas

| Environment | Status |
| :-- | :--: |
| Node.js 18+ | 

![ok](https://img.shields.io/badge/-Didukung-brightgreen?style=flat-square)

 |
| Linux / VPS | 

![ok](https://img.shields.io/badge/-Didukung-brightgreen?style=flat-square)

 |
| Windows | 

![ok](https://img.shields.io/badge/-Didukung-brightgreen?style=flat-square)

 |
| Termux (Android) | 

![ok](https://img.shields.io/badge/-Didukung-brightgreen?style=flat-square)

 |
| Baileys (WhiskeySockets) | 

![ok](https://img.shields.io/badge/-Didukung-brightgreen?style=flat-square)

 |
| Post private | 

![no](https://img.shields.io/badge/-Tidak%20didukung-red?style=flat-square)

 |

## Troubleshooting

<details>
<summary><b>Cloudflare Block (403/503)</b></summary>
<br/>

Cookie jar akan retry otomatis. Jika masih gagal:

- Cek koneksi internet server
- Jika IP server di Indonesia diblokir, gunakan VPS luar negeri
- Tunggu 1-2 menit lalu ulangi command

</details>

<details>
<summary><b>Media tidak ditemukan</b></summary>
<br/>

- Pastikan URL Instagram valid
- Pastikan post tidak private
- Coba dengan URL lain sebagai pembanding

</details>

<details>
<summary><b>Error: Cannot find module</b></summary>
<br/>

```bash
npm install tough-cookie axios-cookiejar-support
```

Pastikan perintah dijalankan di folder bot.

</details>

<details>
<summary><b>Cookie expired</b></summary>
<br/>

Warmup berjalan otomatis tiap 25 menit. Jika error muncul, tunggu sebentar atau restart bot.

</details>

## FAQ

<details>
<summary><b>Apakah perlu login Instagram atau API key?</b></summary>
<br/>

Tidak. Data diambil lewat igexport.com, jadi tidak ada akun maupun API key yang perlu disiapkan.

</details>

<details>
<summary><b>Bisa dipakai di bot selain Baileys?</b></summary>
<br/>

Plugin ditulis untuk Baileys. Untuk library lain, bagian pengiriman media perlu disesuaikan.

</details>

<details>
<summary><b>Kenapa post private tidak bisa diunduh?</b></summary>
<br/>

Konten private membutuhkan sesi login pemilik akun, sementara plugin ini hanya mengakses konten publik.

</details>

<details>
<summary><b>Boleh dimodifikasi dan dibagikan ulang?</b></summary>
<br/>

Boleh, selama mengikuti lisensi MIT dan tetap mencantumkan credit.

</details>

## Roadmap

- [x] Deteksi otomatis Reels dan Slide
- [x] Dukungan carousel dalam bentuk album
- [x] Cookie jar dan auto-warmup
- [x] Auto-retry untuk Cloudflare
- [x] Input via reply pesan
- [ ] Pilihan kualitas video
- [ ] Download audio dari Reels
- [ ] Dukungan Stories dan Highlights
- [ ] Cache hasil unduhan

## Struktur Proyek

```text
IG-DOWNLOADER-V2
├── assets
│   └── instagram.svg
├── igdl.js
├── LICENSE
└── README.md
```

## Kontribusi

Kontribusi berupa issue maupun pull request sangat diterima.

1. Fork repository ini
2. Buat branch: `git checkout -b fitur/nama-fitur`
3. Commit perubahan: `git commit -m "feat: deskripsi singkat"`
4. Push branch: `git push origin fitur/nama-fitur`
5. Buka Pull Request

Gunakan format commit [Conventional Commits](https://www.conventionalcommits.org/) (`feat`, `fix`, `docs`, `refactor`). Menemukan bug? [Buka issue baru](https://github.com/kyuuXzry/IG-DOWNLOADER-V2/issues/new).

## Tech Stack

<div align="center">

<img src="https://cdn.simpleicons.org/nodedotjs/5FA04E" width="44" height="44" alt="Node.js" title="Node.js"/>&nbsp;&nbsp;&nbsp;<img src="https://cdn.simpleicons.org/javascript/F7DF1E" width="44" height="44" alt="JavaScript" title="JavaScript"/>&nbsp;&nbsp;&nbsp;<img src="https://cdn.simpleicons.org/whatsapp/25D366" width="44" height="44" alt="Baileys" title="Baileys"/>&nbsp;&nbsp;&nbsp;<img src="https://cdn.simpleicons.org/axios/5A29E4" width="44" height="44" alt="Axios" title="Axios"/>&nbsp;&nbsp;&nbsp;<img src="https://cdn.simpleicons.org/cloudflare/F38020" width="44" height="44" alt="Cloudflare" title="Cloudflare"/>&nbsp;&nbsp;&nbsp;<img src="https://cdn.simpleicons.org/git/F05032" width="44" height="44" alt="Git" title="Git"/>

<sub>Node.js · JavaScript · Baileys · Axios · Cloudflare Bypass · Git</sub>

</div>

## Disclaimer

Proyek ini dibuat untuk keperluan edukasi dan penggunaan pribadi. Gunakan dengan bijak, hormati hak cipta kreator konten, dan patuhi ketentuan layanan Instagram. Pengembang tidak bertanggung jawab atas penyalahgunaan.

## Lisensi

Dirilis di bawah [MIT License](LICENSE). Bebas dipakai, dimodifikasi, dan dibagikan. Mohon tetap mencantumkan credit.

## Credit

<div align="center">

**Author** · KyuuAI

<a href="https://wa.me/628567126744"><img src="https://img.shields.io/badge/WhatsApp-Hubungi-25D366?style=for-the-badge&logo=whatsapp&logoColor=white&labelColor=0A0A0A" alt="WhatsApp"/></a>
<a href="https://instagram.com/Rissxzry_"><img src="https://img.shields.io/badge/Instagram-Follow-E1306C?style=for-the-badge&logo=instagram&logoColor=white&labelColor=0A0A0A" alt="Instagram"/></a>
<a href="https://github.com/kyuuXzry"><img src="https://img.shields.io/badge/GitHub-Follow-181717?style=for-the-badge&logo=github&logoColor=white&labelColor=0A0A0A" alt="GitHub"/></a>

**Scraper** · [igexport.com](https://igexport.com)

<br/>

<a href="https://github.com/kyuuXzry/IG-DOWNLOADER-V2"><img src="https://img.shields.io/badge/Beri%20Bintang-Jika%20Bermanfaat-FCAF45?style=for-the-badge&logo=github&logoColor=white&labelColor=0A0A0A" alt="Star"/></a>

<br/><br/>

<sub>Jangan hapus credit, hargai creator.</sub>

</div>