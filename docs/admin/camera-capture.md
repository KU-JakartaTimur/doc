# Manajemen Camera Capture (Foto Wajah)

Modul Camera Capture (`CameraCapture.php`) mengelola repositori foto tangkapan wajah siswa dan guru yang diambil secara otomatis saat presensi scanner atau saat proses pendaftaran wajah (*enrolment*).

---

## Fungsi & Arsitektur

- **Penyimpanan Berkas**: File gambar fisik disimpan secara aman di direktori terisolasi `writable/faces/`.
- **Pencatatan Metadata**: Data riwayat foto (waktu pengambilan, NIS/NUPTK, kode unik, dan status) dicatat di tabel basis data `tb_camera_capture`.
- **Integrasi Face Recognition API**: Foto wajah yang didaftarkan melalui modul ini otomatis disinkronkan ke server AI Python (`FaceApi`) menggunakan `unique_code` sebagai pengenal yang dicocokkan pada saat pemindaian di gerbang.

---

## Fitur-Fitur Modul

1. **Galeri Foto Capture**: Menampilkan kisi (*grid*) foto wajah hasil tangkapan webcam scanner terkini secara kronologis.
2. **Filter Kategori**: Admin dapat memfilter tampilan galeri berdasarkan:
   - Semua Foto
   - Khusus Siswa
   - Khusus Guru
3. **Kartu Statistik**: Menampilkan jumlah akumulasi foto yang berhasil tertangkap untuk siswa dan guru.
4. **Detail Foto**: Menampilkan resolusi asli gambar, data siswa/guru pemilik foto, dan stempel waktu presensi.
5. **Hapus Foto**: Administrator dapat menghapus rekaman foto yang buram atau tidak relevan dengan dialog konfirmasi aman SweetAlert2.
