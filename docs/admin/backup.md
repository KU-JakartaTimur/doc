# Backup & Restore

Modul Backup (`Backup.php`) digunakan untuk mengunduh salinan *database* sekolah serta arsip foto QR Code secara berkala demi keamanan data.

![Backup & Restore](/img/screenshots/backup-restore-1.9.10.png)

## Panel Database

- **Backup Database**: Klik tombol **DOWNLOAD BACKUP** untuk mengunduh file SQL dump dari seluruh data aplikasi (siswa, guru, absensi, inventaris, pengaturan, dll).
- **Restore Database**: Pilih file SQL hasil backup melalui tombol **Browse...** lalu klik **RESTORE BACKUP**. Peringatan: tindakan ini akan menimpa database saat ini.

## Panel Foto (QR Code)

- **Backup Foto**: Mengunduh ZIP berisi semua foto/QR Code yang tersimpan di server.
- **Restore Foto**: Memulihkan kumpulan foto/QR Code dari file arsip yang diunggah.

:::warning
Lakukan backup secara berkala dan simpan di lokasi yang aman. Restore akan menimpa data yang ada saat ini.
:::
