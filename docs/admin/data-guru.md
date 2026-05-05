# Data Guru

Modul Data Guru (`DataGuru.php`) digunakan untuk mengelola data tenaga pendidik di sekolah.

![Daftar Data Guru](/img/screenshots/data-guru-1.9.10.png)

## Fitur

- **CRUD Data Guru**: Tambah, ubah, dan hapus data guru (NUPTK, Nama, Jenis Kelamin, No HP, Alamat, dll).
- **Import Data**: Impor data guru secara massal dari file Excel/CSV melalui tombol **IMPORT CSV**.
- **Refresh**: Muat ulang daftar guru dengan tombol **REFRESH**.
- **Cetak Kartu Guru**: Cetak identitas/kartu guru lengkap dengan QR Code untuk keperluan absensi digital.

## Tampilan Daftar

Daftar guru ditampilkan dalam tabel server-side DataTables dengan kolom No, NUPTK, Nama Guru, Jenis Kelamin, No HP, Alamat, dan kolom Aksi (edit, ubah QR, hapus).
