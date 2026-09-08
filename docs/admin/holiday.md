# Manajemen Hari Kerja & Hari Libur

Modul Hari Libur (`Admin/Holiday.php`) digunakan oleh Superadmin untuk menetapkan kalender hari libur resmi, libur khusus sekolah, serta mengotomasi hari libur akhir pekan.

---

## Urgensi Modul

Penetapan hari libur sangat vital dalam ekosistem SIKU karena:
1. **Pencegahan Pemindaian**: Sistem pemindai di gerbang (`/scan`) otomatis menolak scan jika tanggal berjalan terdaftar sebagai hari libur dan menampilkan pesan informatif terkait alasan libur.
2. **Akurasi Rekap Alfa**: Mencegah siswa ditandai sebagai Alfa (Tanpa Keterangan) pada hari-hari libur resmi sekolah.

---

## Fitur Utama

### 1. Auto-Generator Libur Akhir Pekan (Weekend)
Sistem menyediakan tombol **Generate Weekend** yang secara otomatis mendeteksi seluruh hari non-kerja (hari Minggu) dalam bulan dan tahun yang sedang dipilih, lalu menyimpannya sekaligus ke basis data kalender libur.

### 2. Tambah Hari Libur Kustom
Admin dapat menambahkan hari libur spesifik (seperti Libur Nasional, Idul Fitri, Hari Kemerdekaan, atau Ujian Sekolah):
- **Tanggal Libur**: Pemilihan tanggal melalui date-picker.
- **Keterangan**: Nama atau alasan libur (contoh: "Hari Raya Idul Fitri 1447 H").

### 3. Filter Kalender & Hapus Massal
- **Filter Bulan & Tahun**: Menampilkan daftar hari libur per periode bulan terpilih.
- **Hapus Massal (Bulk Delete)**: Memilih beberapa hari libur sekaligus untuk dihapus dengan cepat.
