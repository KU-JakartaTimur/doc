# Data Alumni

Modul Data Alumni (`Admin/DataAlumni.php`) berfungsi untuk mencatat, mengarsipkan, dan mengelola data siswa yang telah menyelesaikan masa studi (lulus) dari sekolah.

---

## Fungsi Modul

- **Pencatatan Kelulusan**: Memfasilitasi perpindahan (*mutasi*) siswa dari status aktif di kelas tingkat akhir (misal kelas XII) menjadi alumni.
- **Arsip Presensi Historis**: Siswa yang dipindahkan ke daftar alumni tetap memiliki riwayat presensi yang tersimpan rapi untuk keperluan rekap buku induk atau surat keterangan alumni.
- **Akses Portal Alumni**: Memberikan hak akses bagi alumni untuk login ke portal khusus alumni guna meninjau riwayat prestasi dan presensi mereka selama bersekolah.

---

## Fitur Modul

1. **Server-Side DataTables Alumni**: Menampilkan daftar nama alumni, NIS, tahun kelulusan, kontak, dan alamat.
2. **Pencarian & Registrasi Alumni**: Form pencarian siswa aktif berdasarkan NIS atau nama untuk dipromosikan statusnya menjadi alumni.
3. **Pembaruan Data Kontak**: Mengisi data nomor telepon atau kontak terbaru alumni setelah lulus demi keperluan jejaring ikatan alumni.
4. **Hapus Data**: Menghapus data alumni jika terjadi kesalahan entri data.
