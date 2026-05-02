# Scan QR Absensi

Endpoint Publik (`Scan.php`) yang digunakan sebagai Kiosk atau titik pemindaian (scanner) mandiri di pintu masuk sekolah.

Modul ini dioperasikan oleh kamera web/scanner hardware dan memfasilitasi:
- Scan Masuk (Waktu kedatangan)
- Scan Keluar (Waktu kepulangan)

Seluruh hasil scan (untuk Siswa, Guru, dan Petugas) akan secara otomatis diproses dan disimpan ke database presensi sesuai dengan jadwal dan toleransi keterlambatan yang telah diatur oleh Admin.
