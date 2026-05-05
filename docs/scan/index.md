# Scan QR Absensi

Endpoint Publik (`Scan.php`) digunakan sebagai *kiosk* atau titik pemindaian (scanner) mandiri di pintu masuk sekolah. Modul ini dioperasikan menggunakan kamera web atau scanner hardware.

![Halaman Scanner QR](/img/screenshots/new-scanner-1.9.10.png)

## Tata Letak Halaman

Halaman scanner terbagi menjadi 3 panel utama:

- **Tips (kiri)**: Panduan singkat penggunaan kamera dan posisi QR Code agar terbaca dengan baik.
- **Area Scan (tengah)**: Berisi tombol **ABSEN MASUK / ABSEN PULANG**, toggle **Gunakan Kamera (Scan QR)**, pilihan kamera (Video device), serta preview hasil scan.
- **Penggunaan (kanan)**: Penjelasan langkah-langkah penggunaan, klik tombol **Absen Masuk / Absen Pulang** untuk mengubah waktu absensi, dan tombol **Dashboard** untuk melihat data absensi.

Halaman scanner juga mendukung perangkat **NFC Reader (rfid)** sebagai alternatif scan QR.

## Status Hasil Scan

Setelah QR Code anak/guru/petugas terbaca, sistem akan menampilkan status berikut:

![Beragam Status Hasil Scan](/img/screenshots/absen.jpg)

- **Absen masuk berhasil**: Pemindaian masuk pertama kali pada hari berjalan tercatat.
- **Anda sudah absen hari ini**: Mencegah duplikasi absen masuk.
- **Absen pulang berhasil**: Pemindaian keluar tercatat sebagai jam pulang.
- **Anda belum absen hari ini**: Saat menekan ABSEN PULANG tetapi belum tercatat absen masuk.

Setiap status menampilkan **Nama**, **NIS/NUPTK**, **Kelas**, **Jam masuk**, dan **Jam pulang** yang relevan.

## Alur Operasional

1. Operator memilih mode **Absen Masuk** atau **Absen Pulang**.
2. Aktifkan toggle **Gunakan Kamera (Scan QR)** dan pilih kamera yang sesuai.
3. Arahkan QR Code siswa/guru/petugas ke kamera.
4. Sistem memvalidasi QR, mencatat waktu, dan mengirim notifikasi WhatsApp ke orang tua (untuk siswa).
5. Seluruh hasil scan otomatis tersimpan ke database presensi sesuai jadwal dan toleransi keterlambatan yang diatur Admin.
