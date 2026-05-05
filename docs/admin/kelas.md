# Data Kelas & Jurusan

Modul Kelas (`KelasController.php`) dan Jurusan (`JurusanController.php`) digunakan untuk mendaftarkan dan mengelompokkan kelas beserta penentuan wali kelas dan tingkat (10, 11, 12), serta mengelola daftar program studi/keahlian (jurusan) yang ada di sekolah.

![Data Kelas & Jurusan](/img/screenshots/kelas-jurusan-1.9.10.png)

## Daftar Kelas

Tabel **Daftar Kelas** menampilkan kolom No, Tingkat, Jurusan, Indeks (A/B/C, dst.), Wali Kelas, dan kolom Aksi (edit, hapus).

Aksi yang tersedia:
- **+ BARIS**: Menambahkan kelas baru.
- **IMPORT**: Impor data kelas dari CSV.
- **REFRESH**: Memuat ulang daftar.

## Daftar Jurusan

Tabel **Daftar Jurusan** menampilkan kolom No, Jurusan (mis. OTKP, BDP, AKL, RPL, Rekayasa Perangkat Lunak, Teknik Komputer Jaringan), dan kolom Aksi.

Aksi yang tersedia: **+ BARIS**, **IMPORT**, **REFRESH**, serta tombol edit/hapus per baris.
