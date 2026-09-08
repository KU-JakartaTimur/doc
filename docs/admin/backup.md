# Backup & Restore Data

Modul Backup & Restore (`Backup.php`) menyediakan sarana pencadangan dan pemulihan berkala untuk basis data MySQL serta aset arsip foto/capture demi menjamin keamanan data lembaga sekolah.

![Backup & Restore](/img/screenshots/backup-restore-1.9.10.png)

---

## 1. Cadangan Basis Data (Database MySQL)

- **Download Backup SQL**: Menghasilkan dump SQL terkompresi dari seluruh skema dan baris data (data master siswa, guru, akun, log presensi, audit log, dan histori perizinan).
- **Restore Database**: Mengunggah berkas SQL hasil backup sebelumnya untuk memulihkan keadaan basis data secara instan.

:::caution Perhatian Restore Database
Operasi *Restore* akan menggantikan seluruh tabel dan data yang sedang aktif saat ini. Pastikan Anda telah membuat salinan cadangan terkini sebelum menjalankan proses pemulihan.
:::

---

## 2. Cadangan Berkas Foto & Capture

- **Backup Foto (ZIP)**: Mengunduh arsip ZIP yang memuat seluruh foto profil, QR Code siswa/guru, serta foto tangkapan wajah dari modul Camera Capture.
- **Restore Foto**: Mengekstrak kembali berkas arsip foto ke direktori penyimpanan server (`writable/uploads/` dan `writable/faces/`).
