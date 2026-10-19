<div align="center">

<img src="assets/instagram.svg" width="110" height="110" alt="Instagram Downloader"/>

# Instagram Downloader

**WhatsApp bot plugin untuk mengunduh Reels, foto, dan carousel Instagram**

Dibangun di atas [Baileys](https://github.com/WhiskeySockets/Baileys) dengan cookie jar otomatis, auto-warmup, dan auto-retry untuk melewati proteksi Cloudflare.

<br/>

<a href="https://github.com/kyuuXzry/IG-DOWNLOADER-V2/stargazers"><img src="https://img.shields.io/github/stars/kyuuXzry/IG-DOWNLOADER-V2?style=for-the-badge&logo=github&color=F77737&labelColor=0A0A0A" alt="Stars"/></a>
<a href="https://github.com/kyuuXzry/IG-DOWNLOADER-V2/network/members"><img src="https://img.shields.io/github/forks/kyuuXzry/IG-DOWNLOADER-V2?style=for-the-badge&logo=github&color=E1306C&labelColor=0A0A0A" alt="Forks"/></a>
<a href="https://github.com/kyuuXzry/IG-DOWNLOADER-V2/issues"><img src="https://img.shields.io/github/issues/kyuuXzry/IG-DOWNLOADER-V2?style=for-the-badge&logo=github&color=C13584&labelColor=0A0A0A" alt="Issues"/></a>
<a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-FCAF45?style=for-the-badge&logo=opensourceinitiative&logoColor=white&labelColor=0A0A0A" alt="License"/></a>

<img src="https://img.shields.io/github/last-commit/kyuuXzry/IG-DOWNLOADER-V2?style=flat-square&logo=git&logoColor=white&color=833AB4&labelColor=0A0A0A" alt="Last Commit"/>
<img src="https://img.shields.io/github/repo-size/kyuuXzry/IG-DOWNLOADER-V2?style=flat-square&color=833AB4&labelColor=0A0A0A" alt="Repo Size"/>
<img src="https://img.shields.io/github/languages/top/kyuuXzry/IG-DOWNLOADER-V2?style=flat-square&logo=javascript&logoColor=white&color=F7DF1E&labelColor=0A0A0A" alt="Language"/>
<img src="https://img.shields.io/badge/Node.js-%E2%89%A518-5FA04E?style=flat-square&logo=nodedotjs&logoColor=white&labelColor=0A0A0A" alt="Node.js"/>
<a href="https://github.com/WhiskeySockets/Baileys"><img src="https://img.shields.io/badge/Baileys-WhatsApp-25D366?style=flat-square&logo=whatsapp&logoColor=white&labelColor=0A0A0A" alt="Baileys"/></a>
<img src="https://img.shields.io/badge/Maintained-yes-brightgreen?style=flat-square&labelColor=0A0A0A" alt="Maintained"/>
<img src="https://img.shields.io/badge/PRs-welcome-FCAF45?style=flat-square&labelColor=0A0A0A" alt="PRs Welcome"/>

<br/><br/>

[Overview](#overview) · [Fitur](#fitur) · [Instalasi](#instalasi) · [Penggunaan](#penggunaan) · [Konfigurasi](#konfigurasi) · [Arsitektur](#arsitektur) · [Troubleshooting](#troubleshooting) · [Kontribusi](#kontribusi) · [Credit](#credit)

</div>

<br/>

## Overview

Instagram Downloader adalah plugin command untuk bot WhatsApp berbasis Baileys. Cukup kirim link Instagram atau reply pesan yang berisi link, bot otomatis mendeteksi tipe konten lalu mengirimkan hasilnya dalam format yang sesuai: video MP4, gambar tunggal, atau album carousel.

Data konten diambil dari [igexport.com](https://igexport.com). Request memakai cookie jar yang di-warmup otomatis, sehingga sesi tetap valid dan request yang terblokir Cloudflare dicoba ulang tanpa campur tangan manual.

## Fitur

<table width="100%">
<tr>
<td width="50%" valign="top">

**Core**

- Deteksi otomatis Reels vs Slide
- Dukungan video dan foto carousel
- Cookie jar otomatis
- Auto-warmup cookie tiap 25 menit
- Auto-retry saat kena Cloudflare (403/503)

</td>
<td width="50%" valign="top">

**Pengalaman Pengguna**

- Album untuk slide berisi banyak foto
- Input lewat URL langsung atau reply pesan
- Ekstraksi URL otomatis dari caption/teks
- Thumbnail slide dari foto asli Instagram
- Caption formal tanpa emoji

</td>
</tr>
</table>

## Instalasi

### Prasyarat

| Kebutuhan | Versi |
| :-- | :-- |
| Node.js | 18 atau lebih baru |
| Bot WhatsApp | Berbasis Baileys (`makeWASocket`) |

### Langkah

```bash
git clone https://github.com/kyuuXzry/IG-DOWNLOADER-V2.git
cd IG-DOWNLOADER-V2
npm install tough-cookie axios-cookiejar-support
cp igdl.js /path/ke/bot/plugins/
```

Restart bot setelah plugin disalin:

```bash
node index.js
```

> [!IMPORTANT]
> Jalankan `npm install` di dalam folder bot kamu, bukan di folder repo ini, supaya dependency terbaca oleh plugin.

### Dependency

| Package | Fungsi | Versi |
| :-- | :-- | :-- |
| `axios` | HTTP client | <img src="https://img.shields.io/npm/v/axios?style=flat-square&color=E1306C&labelColor=0A0A0A" alt="axios"/> |
| `tough-cookie` | Cookie jar handler | <img src="https://img.shields.io/npm/v/tough-cookie?style=flat-square&color=E1306C&labelColor=0A0A0A" alt="tough-cookie"/> |
| `axios-cookiejar-support` | Bridge Axios dan cookie jar | <img src="https://img.shields.io/npm/v/axios-cookiejar-support?style=flat-square&color=E1306C&labelColor=0A0A0A" alt="axios-cookiejar-support"/> |
| `crypto` | Modul bawaan Node.js | <img src="https://img.shields.io/badge/built--in-yes-833AB4?style=flat-square&labelColor=0A0A0A" alt="crypto"/> |

## Penggunaan

### Kirim URL langsung

```bash
.ig https://www.instagram.com/reel/xxxxx/
.ig https://www.instagram.com/p/xxxxx/
```

### Reply pesan

Reply pesan yang berisi link Instagram, lalu kirim:

```bash
.ig
```

### Hasil

| Input | Output |
| :-- | :-- |
| Reels / Video | Video MP4 |
| Post dengan 1 foto | Gambar |
| Post dengan banyak foto | Album carousel |

### Contoh percakapan

```text
User: .ig https://www.instagram.com/reel/C8xYz123abc/
Bot:  [Mengirim video Reels]

User: .ig https://www.instagram.com/p/C8xYz123abc/
Bot:  [Mengirim gambar atau album]
```

## Konfigurasi

Plugin membutuhkan variabel berikut tersedia di handler bot kamu.

| Variabel | Tipe | Deskripsi |
| :-- | :-- | :-- |
| `conn` | Object | Instance WhatsApp (`makeWASocket`) |
| `m` | Object | Message object |
| `text` | String | Isi pesan setelah command |
| `prefix` | String | Prefix bot (umumnya `.`) |
| `command` | String | Command yang diketik pengguna |
| `Reply` | Function | Fungsi untuk membalas pesan |
| `isRegistered` | Boolean | Status registrasi pengguna |
| `isCreator` | Boolean | Status owner/creator |
| `checkLimit` | Function | Cek sisa limit pengguna |
| `addLimit` | Function | Tambah pemakaian limit |
| `daftar` | Function | Fungsi registrasi pengguna |
| `global.mess` | Object | Kumpulan pesan template |

> [!NOTE]
> Kalau nama instance di bot kamu bukan `conn`, ganti semua pemakaian `conn` di plugin dengan nama instance bot kamu.

## Arsitektur

```text
.ig <url>
   │
   ▼
Ekstrak URL dari teks / pesan yang di-reply
   │
   ▼
Request ke igexport.com (cookie jar aktif)
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
| Type detector | Menentukan format output (video, gambar, album) |

## Struktur Proyek

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

## Kontribusi

Kontribusi berupa issue maupun pull request sangat diterima.

1. Fork repository ini
2. Buat branch: `git checkout -b fitur/nama-fitur`
3. Commit perubahan: `git commit -m "feat: deskripsi singkat"`
4. Push branch: `git push origin fitur/nama-fitur`
5. Buka Pull Request

Menemukan bug? [Buka issue baru](https://github.com/kyuuXzry/IG-DOWNLOADER-V2/issues/new).

## Tech Stack

<div align="center">

<img src="https://cdn.simpleicons.org/nodedotjs/5FA04E" width="44" height="44" alt="Node.js" title="Node.js"/>&nbsp;&nbsp;&nbsp;<img src="https://cdn.simpleicons.org/javascript/F7DF1E" width="44" height="44" alt="JavaScript" title="JavaScript"/>&nbsp;&nbsp;&nbsp;<img src="https://cdn.simpleicons.org/whatsapp/25D366" width="44" height="44" alt="Baileys" title="Baileys"/>&nbsp;&nbsp;&nbsp;<img src="https://cdn.simpleicons.org/axios/5A29E4" width="44" height="44" alt="Axios" title="Axios"/>&nbsp;&nbsp;&nbsp;<img src="https://cdn.simpleicons.org/cloudflare/F38020" width="44" height="44" alt="Cloudflare" title="Cloudflare"/>

<sub>Node.js · JavaScript · Baileys · Axios · Cloudflare Bypass</sub>

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

</div>