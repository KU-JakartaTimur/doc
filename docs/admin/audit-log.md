# Audit Log (Jejak Aktivitas)

Modul Audit Log (`/admin/audit-log`) menyediakan pencatatan jejak audit komprehensif atas setiap aksi administratif penting yang dilakukan oleh pengguna di dalam sistem SIKU.

---

## Urgensi Audit Log

Untuk memastikan transparansi, integritas data kehadiran, dan akuntabilitas sistem, seluruh tindakan perubahan data dicatat secara otomatis ke dalam tabel basis data `tb_audit_logs`.

---

## Data yang Dicatat

Tabel audit log mencatat informasi penting meliputi:

- **Waktu Transaksi (Timestamp)**: Tanggal dan detik presisi saat aksi dilakukan.
- **Identitas Pelaku (User)**: Nama pengguna, peran (*role*), dan ID pengguna yang mengeksekusi aksi.
- **Alamat IP & User Agent**: Alamat IP client dan jenis peramban/perangkat yang digunakan.
- **Kategori Aksi**:
  - `CREATE`: Penambahan data baru (misalnya penambahan siswa baru, kartu RFID baru).
  - `UPDATE`: Perubahan data (misalnya koreksi manual status presensi, pembaruan jam masuk/keluar).
  - `DELETE`: Penghapusan data siswa, guru, atau lampiran foto.
  - `AUTH`: Aktivitas login dan logout pengguna.
- **Tabel Sasaran**: Modul atau tabel basis data yang mengalami perubahan.
- **Rekap Nilai Sebelum & Sesudah**: Rincian JSON yang memperlihatkan nilai asli (*old value*) dan nilai perubahan (*new value*) demi kemudahan penelusuran (*tracking*).
