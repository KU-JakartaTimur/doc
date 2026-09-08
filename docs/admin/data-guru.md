# Data Guru

Modul Data Guru (`DataGuru.php`) digunakan untuk mengelola data tenaga pendidik dan staf pengajar di sekolah.

![Daftar Data Guru](/img/screenshots/data-guru-1.9.10.png)

---

## Fitur Utama

- **DataTables Server-Side**: Menampilkan seluruh data guru dengan kolom NUPTK, Nama Guru, Jenis Kelamin, Nomor Handphone/WA, Alamat, dan Aksi.
- **Auto-Generate QR Code Guru**: Sistem otomatis menghasilkan kode unik dan QR Code presensi untuk setiap guru yang didaftarkan.
- **Integrasi Penugasan Wali Kelas**: Guru yang terdaftar di modul ini dapat dipilih sebagai wali kelas pada modul **Kelas & Jurusan**.
- **Hubungkan ke Akun Pengguna**: Melalui menu **Data Petugas**, akun login dapat dihubungkan ke ID Guru sehingga saat login guru otomatis membuka dashboard wali kelas.

---

## Impor Data Massal (CSV)

Admin dapat mengunggah daftar pengajar secara massal:
- Gunakan format template `csv_guru_template.csv`.
- Memuat kolom `nuptk`, `nama_guru`, `jenis_kelamin`, `no_hp`, dan `alamat`.
- Dilengkapi penanganan otomatis encoding UTF-8, pembersih BOM, dan pencegah NUPTK duplikat.

---

## Cetak Kartu Absensi Guru

Tersedia fasilitas untuk mencetak kartu tanda pengenal guru yang telah dilengkapi kode QR presensi dalam layout siap cetak (*print-ready*).
