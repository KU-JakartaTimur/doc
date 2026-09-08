# Pengaturan Aplikasi

Modul Pengaturan (`GeneralSettings.php` & `SettingsSideBar.php`) mengatur identitas kelembagaan sekolah, parameter jam kerja presensi, serta menu navigasi aplikasi.

![Pengaturan Utama SIKU](/img/screenshots/pengaturan-1.9.10.png)

---

## 1. Identitas Sekolah

- **Nama Sekolah**: Nama resmi lembaga sekolah (contoh: *"Khoiru Ummah"*). Digunakan pada judul situs, kartu presensi, cetak QR, dan kover laporan PDF.
- **Tahun Ajaran**: Periode kalender pendidikan aktif (contoh: *"2025/2026"*).
- **Copyright Footer**: Teks hak cipta yang muncul di bagian bawah aplikasi.
- **Logo Sekolah**: Berkas logo berformat PNG, JPG, atau SVG. Logo yang diunggah otomatis dapat di-generate menjadi ikon PWA menggunakan perintah CLI `php spark pwa:icons`.

---

## 2. Parameter Waktu Presensi & Toleransi

Admin dapat mengatur batas-batas waktu operasional kehadiran:
- **Jam Masuk Standar**: Batas waktu kehadiran tepat waktu (misal `07:00:00`).
- **Toleransi Keterlambatan**: Rentang menit kelonggaran sebelum siswa/guru mulai dikenai poin keterlambatan.
- **Jam Kepulangan Standar**: Waktu resmi kepulangan sekolah untuk validasi scan keluar.

---

## 3. Dynamic Sidebar (Menu Dinamis)

Melalui modul `SettingsSideBar.php`, urutan menu, visibilitas ikon, dan pengelompokan menu pada bilah navigasi kiri dapat diubah secara fleksibel berbasis basis data sesuai kebutuhan institusi.
