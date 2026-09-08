# Dashboard Orang Tua / Wali Murid

Modul Dashboard Orang Tua (`Parent/Dashboard.php`) adalah portal mandiri bagi para orang tua murid untuk memantau status kehadiran, riwayat kedatangan, serta kepulangan putra-putrinya di sekolah.

---

## Fitur-Fitur Utama

### 1. Kartu Profil Siswa (Putra/Putri)
Menampilkan identitas siswa yang terhubung dengan akun orang tua:
- Nama Lengkap Siswa
- Nomor Induk Siswa (NIS)
- Kelas dan Jurusan
- Nama Wali Kelas dan kontak sekolah

### 2. Status Kehadiran Hari Berjalan
- Menampilkan waktu persis jam kedatangan (*scan masuk*) dan jam kepulangan (*scan pulang*).
- Menampilkan status kehadiran (Hadir Tepat Waktu, Terlambat, Sakit, atau Izin).

### 3. Notifikasi WhatsApp Otomatis
Selain memantau melalui web, sistem secara otomatis mengirimkan pesan konfirmasi kehadiran langsung ke nomor WhatsApp orang tua ketika anak melakukan pemindaian kartu di gerbang sekolah:

![Notifikasi WhatsApp Absensi](/img/screenshots/notif-wa.png)
