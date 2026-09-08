# Data Orang Tua / Wali Murid

Modul Data Orang Tua (`DataOrangTua.php`) mengelola basis data wali murid dan memetakannya secara akurat dengan data siswa (`tb_orangtua_siswa`).

---

## Urgensi Modul

Pemetaan data orang tua sangat penting dalam SIKU karena:
1. **Penerima Notifikasi WhatsApp**: Nomor WhatsApp yang didaftarkan pada modul ini menjadi tujuan pengiriman laporan real-time ketika anak melakukan presensi masuk atau pulang di sekolah.
2. **Autentikasi Akun Orang Tua**: Memungkinkan orang tua untuk memiliki akun login dan mengakses **Dashboard Orang Tua** guna memantau rekap absensi harian dan bulanan anak.

---

## Fitur Utama

- **Pemetaan Multi-Anak**: Satu orang tua/wali dapat dihubungkan ke lebih dari satu siswa jika memiliki beberapa anak yang bersekolah di sekolah yang sama.
- **Server-Side DataTables**: Daftar orang tua dilengkapi kolom Nama Ayah/Ibu/Wali, Nomor HP/WhatsApp, Pekerjaan, Alamat, serta Daftar Siswa yang Terhubung.
- **Import Massal CSV**: Mendukung impor data orang tua secara massal menggunakan file CSV.
- **CRUD Lengkap**: Tambah, edit data kontak, perbarui relasi siswa, dan hapus data orang tua.
