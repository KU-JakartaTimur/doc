# Manajemen Kehadiran Kelas

Modul Manajemen Kehadiran (`Teacher/Dashboard.php`) memberikan kewenangan kepada Wali Kelas untuk memantau kehadiran siswa di kelas yang diampu secara langsung, serta melakukan koreksi (*adjustment*) presensi jika diperlukan.

![Manajemen Kehadiran Kelas](/img/screenshots/wali-kelas-kehadiran-1.9.10.png)

---

## Fitur Utama

- **Live Monitoring Kehadiran Kelas**: Menampilkan daftar seluruh siswa pada kelas asuhan wali kelas beserta status kehadiran hari berjalan (Hadir, Sakit, Izin, atau Alfa).
- **Pemilihan Tanggal Presensi**: Wali kelas dapat memilih tanggal kalender tertentu untuk memeriksa rekapan kehadiran kelas pada hari-hari sebelumnya.
- **Koreksi Status Kehadiran (Edit Kehadiran)**:
  Wali kelas dapat mengklik tombol **Edit** pada baris siswa untuk membuka modal dialog penyuntingan:

  ![Ubah Status Kehadiran Siswa](/img/screenshots/ubah-kehadiran.jpeg)

  - Mengubah status kehadiran: `HADIR`, `SAKIT`, `IZIN`, atau `TANPA KETERANGAN`.
  - Mengoreksi waktu Jam Masuk dan Jam Pulang.
  - Menambahkan catatan atau keterangan khusus (misalnya: dispensasi kegiatan lomba sekolah).
  - Menyimpan perubahan secara AJAX instan tanpa me-refresh halaman.
