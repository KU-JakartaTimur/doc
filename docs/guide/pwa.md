---
sidebar_position: 2
---

# Progressive Web App (PWA)

Aplikasi **SIKU** telah dilengkapi kapabilitas **Progressive Web App (PWA)** penuh, memungkinkan aplikasi dipasang (*install*) secara native di smartphone (Android / iOS) maupun desktop (Windows, macOS, Linux) tanpa memerlukan Play Store atau App Store.

---

## Keunggulan PWA di SIKU

1. **Mode Layar Penuh (Standalone)**: Aplikasi berjalan tanpa bilah navigasi browser (*browser chrome*), menyerupai aplikasi native asli. Sangat ideal untuk pos pemindai (*scanner kiosk*) di pintu masuk sekolah.
2. **Ketersediaan Halaman Offline**: Ketika jaringan Wi-Fi sekolah mengalami gangguan, sistem secara anggun menampilkan halaman `offline.html` informatif tanpa error halaman putih.
3. **Pintasan Cepat (Shortcuts)**: Ikon aplikasi di layar beranda mendukung pintasan langsung ke menu **Scan Masuk** dan **Scan Pulang**.
4. **Generator Ikon Otomatis**: Kemudahan meremajakan seluruh ukuran ikon PWA (192x192, 512x512, maskable) langsung dari logo sekolah via Spark CLI.

---

## Panduan Pemasangan Aplikasi

### 1. Android (Google Chrome / Microsoft Edge)
- Buka alamat aplikasi SIKU di browser Chrome.
- Tekan banner pop-up **"Pasang Aplikasi"** di bagian bawah layar atau klik menu titik tiga di kanan atas browser → pilih **Tambahkan ke Layar Utama** (*Add to Home screen*).
- Ikon SIKU akan muncul di daftar aplikasi perangkat Anda.

### 2. iOS / iPadOS (Apple Safari)
- Buka tautan SIKU menggunakan browser **Safari**.
- Tekan tombol **Bagikan** (*Share Button*) di bagian tengah bawah layar.
- Geser ke bawah lalu pilih menu **Tambahkan ke Layar Utama** (*Add to Home Screen*).
- Tekan **Tambah** (*Add*) di pojok kanan atas.

### 3. Desktop (Google Chrome / Microsoft Edge di Windows/macOS/Linux)
- Buka aplikasi SIKU.
- Perhatikan sisi kanan bilah alamat URL (*address bar*). Klik ikon komputer kecil dengan tanda panah ke bawah bertuliskan **Install SIKU**.
- SIKU akan terbuka di jendela aplikasi terpisah yang bersih dan mandiri.

---

## Generator Ikon PWA (CLI)

SIKU menyediakan perintah Spark khusus untuk mengotomasi konversi gambar logo sekolah menjadi paket ikon standar PWA:

```bash
# 1. Menghasilkan seluruh ukuran ikon dari berkas logo sekolah baru
php spark pwa:icons --logo writable/uploads/logo/logo_sekolah.png

# 2. Menghasilkan ulang ikon berdasarkan logo yang tersimpan di sistem saat ini
php spark pwa:icons

# 3. Mengembalikan (reset) ikon ke grafis bawaan SIKU
php spark pwa:icons --reset
```

Perintah ini akan secara otomatis memproses dan menyimpan berkas ikon ke direktori `public/assets/icons/` dan memperbarui `manifest.json`.

---

## Automated Testing Service Worker

Untuk memastikan routing service worker dan caching PWA berfungsi dengan semestinya, Anda dapat menjalankan unit test berbasis Node.js:

```bash
node tests/pwa/sw-routing.mjs
```
