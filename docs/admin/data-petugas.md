# Data Petugas & Hak Akses Pengguna

Modul Data Petugas (`DataPetugas.php` / `DataPengguna.php`) menangani manajemen autentikasi dan otorisasi seluruh akun pengguna aplikasi menggunakan pustaka **CodeIgniter Shield**.

---

## 7 Peran Pengguna (Shield Groups)

Saat mendaftarkan atau mengedit akun petugas, administrator dapat memilih salah satu peran hak akses:

1. **Super Admin (`superadmin`)**: Akses penuh ke seluruh fitur, pengaturan aplikasi, audit log, serta backup & restore.
2. **Staf Petugas / Admin (`admin`)**: Mengelola presensi harian, data master (siswa, guru, kelas, jurusan, orang tua, alumni), generate QR, dan laporan.
3. **Kepala Sekolah (`kepsek`)**: Memantau dashboard performa dan statistik kehadiran sekolah serta mengunduh rekap laporan.
4. **Guru / Wali Kelas (`guru`)**: Akses khusus untuk guru. Jika dihubungkan ke ID Guru yang menjadi wali kelas, otomatis membuka dashboard wali kelas, approval perizinan siswa, dan unduh QR kelas.
5. **Orang Tua (`orangtua`)**: Akses portal bagi wali murid untuk memantau kehadiran anak.
6. **Alumni (`alumni`)**: Akses portal bagi siswa yang telah lulus.
7. **Petugas Scanner (`scanner`)**: Akun khusus pos scanner di gerbang sekolah (hanya dapat membuka antarmuka `/scan`).

---

## Fitur Utama

- **Hubungkan ke Guru / Orang Tua**: Menautkan akun pengguna dengan data master guru atau data master orang tua.
- **Aktivasi Akun (Toggle Activation)**: Mengaktifkan atau menonaktifkan akun secara instan tanpa perlu menghapus data.
- **Reset Kata Sandi**: Fasilitas memperbarui kata sandi pengguna jika lupa password.
- **Import Massal Akun (CSV)**: Pendaftaran akun petugas/pengguna secara massal via berkas CSV.
- **Server-Side DataTables**: Daftar akun dilengkapi username, email, role, status aktif, dan tombol aksi cepat.
