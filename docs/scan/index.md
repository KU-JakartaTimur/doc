---
sidebar_position: 1
---

# Presensi Multi-Metode (Scanner)

Modul Scanner (`Scan.php`) merupakan antarmuka titik presensi (*kiosk*) yang ditempatkan di gerbang sekolah atau ruang presensi. Halaman ini dirancang untuk operasional presensi yang cepat, interaktif, dan akurat.

![Halaman Scanner Presensi Multi-Metode](/img/screenshots/new-scanner-1.9.10.png)

---

## 3 Pilihan Metode Presensi (3-in-1)

SIKU mendukung tiga metode verifikasi kehadiran yang dapat digunakan secara fleksibel:

1. **Pemindaian QR Code (Webcam / Kamera)**:
   Siswa atau guru menunjukkan kartu absensi QR Code ke arah kamera. Library pemindai berbasis web (*ZXing*) langsung membaca kode secara real-time.
2. **Kartu RFID / NFC (USB RFID Reader)**:
   Tanpa menyentuh kamera, siswa cukup men-tap kartu pelajar berbasis RFID ke USB Reader yang terpasang pada komputer/laptop scanner. Nomor seri kartu otomatis tertangkap ke sistem.
3. **Face Recognition & Camera Capture**:
   Sistem mendukung identifikasi berbasis pengenalan wajah melalui Face Recognition API. Kamera juga secara otomatis memotret wajah sebagai bukti fisik presensi digital yang tersimpan di server.

---

## Fitur Interaktif Saat Presensi

### 🔊 Audio Announcer (Text-To-Speech)
Setiap kali presensi berhasil diverifikasi, sistem akan memutar pengumuman suara yang menyebutkan nama orang yang hadir, ucapan salam (Selamat pagi / siang), dan konfirmasi status (misalnya *"Presensi Masuk Berhasil"*). Sistem menggunakan **Edge-TTS API** dengan cadangan otomatis ke **Web Speech API** browser jika server suara sedang tidak tersambung.

### 💬 Notifikasi WhatsApp Instan
Konfirmasi presensi langsung dikirimkan ke nomor WhatsApp siswa atau orang tua dalam hitungan detik.

### 🚫 Proteksi Hari Libur Otomatis
Jika tanggal pemindaian bertepatan dengan hari libur yang terdaftar pada modul **Hari Libur**, sistem secara otomatis menolak presensi dan menampilkan peringatan:
> *"Hari ini sistem presensi dinonaktifkan karena: [Alasan Libur]"*

---

## Status Hasil Pemindaian

![Beragam Status Hasil Scan](/img/screenshots/absen.jpg)

Sistem menampilkan feedback visual yang jelas berdasarkan waktu dan kondisi absensi:
- **Absen Masuk Berhasil**: Presensi kedatangan pertama di hari berjalan berhasil terekam (mencatat jam kedatangan dan menghitung toleransi menit keterlambatan).
- **Anda Sudah Absen Hari Ini**: Mencegah pemindaian ganda (*double tapping*) untuk absen masuk.
- **Absen Pulang Berhasil**: Presensi kepulangan tercatat sebagai jam keluar.
- **Anda Belum Absen Masuk**: Ditampilkan jika menekan mode **Absen Pulang** padahal belum ada catatan kehadiran masuk di hari yang sama.
- **Data Tidak Ditemukan**: QR Code atau nomor RFID tidak cocok dengan basis data siswa maupun guru sekolah.

---

## Tata Cara Pengoperasian Pos Presensi

1. Buka browser pada alamat `http://localhost:8080/scan` (atau klik menu **Scan Presensi**).
2. Pilih mode presensi di bagian atas: **ABSEN MASUK** atau **ABSEN PULANG**.
3. Aktifkan toggle **Gunakan Kamera (Scan QR)** dan tentukan perangkat webcam yang digunakan pada dropdown *Video Device*.
4. Siswa/guru mengarahkan QR Code atau men-tap kartu RFID ke scanner.
5. Indikator suara, visual kartu kehadiran, dan notifikasi WhatsApp akan dipicu secara simultan.
