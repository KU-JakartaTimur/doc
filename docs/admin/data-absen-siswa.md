# Data Absen Siswa

Modul Data Absen Siswa (`DataAbsenSiswa.php`) menyajikan rekapan presensi siswa. Admin dapat melihat kehadiran siswa harian, filter berdasarkan kelas, dan mencetak laporan ketidakhadiran (alfa, izin, sakit).

![Absen Siswa Harian](/img/screenshots/absen-siswa-1.9.10.png)

## Fitur

- **Daftar Absensi per Kelas**: Tabel menampilkan No, NIS, Nama Siswa, Kehadiran (Hadir/Sakit/Izin/Alfa), Jam Masuk, Jam Pulang, dan Keterangan untuk kelas terpilih (contoh: X BDP A).
- **Filter Kelas**: Pilih kelas/rombel yang ingin dilihat rekapnya pada hari berjalan.
- **Tombol REFRESH**: Memuat ulang data terkini hasil scan QR.
- **Edit Kehadiran**: Admin dapat memperbarui status absensi tiap siswa melalui tombol **EDIT**.
- **Rekap Laporan**: Cetak laporan ketidakhadiran siswa (alfa, izin, sakit) melalui modul Generate Laporan.
