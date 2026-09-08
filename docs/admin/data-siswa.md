# Data Siswa

Modul Data Siswa (`DataSiswa.php`) berfungsi sebagai pusat manajemen data seluruh peserta didik di lingkungan sekolah.

![Daftar Data Siswa](/img/screenshots/data-siswa-1.9.10.png)

---

## Fitur Utama

- **DataTables Server-Side**: Memuat ribuan data siswa dengan kecepatan tinggi tanpa membebani browser.
- **Filter Bertingkat**: Filter dinamis berdasarkan Tingkat (10, 11, 12), Jurusan/Kompetensi Keahlian, dan Kelas.
- **Pencarian Cepat AJAX**: Pencarian instan berdasarkan Nama, NIS, atau nomor telepon.
- **Auto-Generate QR Code**: Setiap kali data siswa baru disimpan, sistem secara otomatis menghasilkan kode unik QR Code absensi dan menyimpannya ke server.
- **Pencatatan Poin Keterlambatan**: Profil siswa memuat akumulasi poin keterlambatan dari modul presensi harian.

---

## Impor Massal CSV (Bulk Import)

Untuk pendaftaran siswa baru secara serentak, modul menyediakan fitur impor CSV:

1. Unduh format template berkas: `csv_siswa_template.csv`.
2. Buka dan isi data: `nis`, `nama_siswa`, `jenis_kelamin` (L/P), `id_kelas`, `no_hp`, `alamat`.
3. Unggah berkas CSV ke dalam modal impor.
4. **Pembersih BOM Otomatis (*BOM Cleaner*)**: Sistem otomatis membersihkan karakter *Byte Order Mark* UTF-8 yang kerap merusak pembacaan data di Microsoft Excel.
5. **Pencegah Duplikasi**: Sistem memvalidasi dan menolak entri NIS yang sudah terdaftar guna mencegah data ganda.

---

## Aksi & Manajemen

- **Tambah Siswa Baru**: Formulir lengkap dengan pemilihan rombel kelas dan nomor WhatsApp wali/siswa.
- **Edit Data**: Mengubah biodata siswa atau memindahkan siswa ke rombel kelas lain.
- **Hapus Data & Hapus Terpilih**: Mendukung penghapusan data siswa satuan maupun penghapusan massal melalui kotak centang (*checkbox*).
- **Cetak Kartu QR Siswa**: Tautan cepat untuk melihat dan mencetak kartu absensi siswa terkait.
