# QR Generator

Modul QR Generator (`GenerateQR.php` / `QRGenerator.php`) menyediakan alat untuk mencetak masal kartu identitas yang memuat QR Code (untuk siswa, guru, maupun petugas) yang akan digunakan saat proses absensi digital (scanning).

![Generate QR Code](/img/screenshots/generate-qr-1.9.10.png)

## Generate QR — Data Siswa

- Menampilkan total siswa yang terdata.
- **GENERATE ALL**: Membuat QR Code untuk seluruh siswa sekaligus.
- **DOWNLOAD ALL**: Mengunduh kumpulan QR Code siswa dalam bentuk arsip.

## Generate QR — Data Guru

- Menampilkan total guru yang terdata.
- **GENERATE ALL** dan **DOWNLOAD ALL** untuk seluruh guru.

## Generate per Kelas

- Pilih kelas dari dropdown.
- **GENERATE PER KELAS**: Membuat QR Code untuk seluruh siswa pada kelas yang dipilih.
- **DOWNLOAD PER KELAS**: Mengunduh kumpulan QR Code kelas terpilih.

:::tip
File hasil generate QR Code tersimpan di folder `public/uploads/`. Pastikan koneksi server tetap stabil saat melakukan generate untuk jumlah data besar.
:::
