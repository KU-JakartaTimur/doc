---
sidebar_position: 4
---

# Text-To-Speech & Face Recognition API

SIKU menyediakan pengalaman presensi interaktif dengan pengumuman suara sambutan otomatis (*Audio Announcer*) serta opsi pencocokan wajah otomatis (*Face Recognition*).

---

## 1. Audio Announcer (Text-To-Speech / TTS)

Sistem memutar sambutan suara otomatis ketika presensi berhasil diverifikasi di layar scanner (menyebutkan nama siswa/guru, sapaan selamat pagi/siang, dan status masuk atau pulang).

### Konfigurasi `.env`

```env
# URL Layanan Edge-TTS API Server (Lokal / Terpisah)
TTS_API_BASE=http://localhost:8085

# Karakteristik Suara: 'male' (Laki-laki) atau 'female' (Perempuan)
TTS_VOICE=male

# Kecepatan Artikulasi Suara (-100% s/d +100%)
TTS_RATE=-3%
```

### Mekanisme Dual Fallback

SIKU mengimplementasikan sistem ketersediaan tinggi untuk suara:
1. **Edge-TTS Server (Prioritas Utama)**: Mengirimkan teks ke server TTS untuk menghasilkan audio MP3 jernih dan berintonasi alami bahasa Indonesia.
2. **Web Speech API (Fallback Otomatis)**: Jika server TTS eksternal tidak aktif atau mengalami masalah koneksi, browser scanner akan otomatis mengambil alih dan membacakan teks sambutan menggunakan fitur sintesis suara bawaan browser (Web Speech API). Pengumuman suara dipastikan selalu bekerja!

---

## 2. Face Recognition API (Pencocokan Wajah)

Selain pemindaian QR Code dan tap kartu RFID, SIKU mendukung verifikasi identitas kehadiran melalui pengenalan wajah (*Face Recognition*).

### Konfigurasi `.env`

```env
# Alamat server backend layanan pengenalan wajah Python
FACE_API_URL=http://localhost:5000
```

### Alur Kerja Deteksi Wajah

1. **Pendaftaran Wajah (Enrolment)**:
   Admin mengambil atau mengunggah sampel foto wajah siswa/guru melalui menu **Camera Capture** (`/admin/camera-capture`). Wajah akan diekstraksi dan didaftarkan ke server Face Recognition dengan identifier unik (`unique_code`).
2. **Pemindaian Wajah di Pintu Masuk (Verification)**:
   Pada halaman `/scan`, kamera menangkap gambar wajah orang yang berdiri di depan scanner. Gambar dikirim ke endpoint `/scan/face`.
3. **Pencocokan Model**:
   Server membandingkan encoding wajah dengan model database. Jika tingkat kemiripan memenuhi ambang batas (*confidence threshold*), sistem mencatat kehadiran siswa/guru terkait dan memicu pengumuman suara serta notifikasi WhatsApp.
