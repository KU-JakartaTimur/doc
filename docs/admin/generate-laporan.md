# Generate Laporan Presensi

Modul Generate Laporan (`GenerateLaporan.php`) memungkinkan pencetakan dan ekspor data rekap kehadiran siswa dan guru ke dalam berkas **PDF** maupun **DOC**.

![Generate Laporan](/img/screenshots/laporan-1.9.10.png)

---

## 1. Laporan Absensi Siswa

- **Filter Periode Bulan**: Tentukan bulan dan tahun rekap (misalnya: *2026-02*).
- **Filter Kelas / Rombel**: Pilih kelas yang akan dibuat laporannya (contoh: *X BDP A*).
- **Ekspor Dokumen**:
  - **GENERATE PDF**: Menghasilkan dokumen PDF siap cetak dengan tata letak matriks tanggal presensi, persentase kehadiran, dan ringkasan sakit/izin/alfa.
  - **GENERATE DOC**: Menghasilkan berkas Word untuk keperluan penyuntingan lanjutan oleh staf administrasi.

---

## 2. Laporan Absensi Guru

- Menampilkan total guru yang aktif.
- Pilih periode bulan pelaporan.
- Klik **GENERATE PDF** atau **GENERATE DOC** untuk mengekspor rekapitulasi kehadiran seluruh dewan guru beserta jam kedatangan dan kepulangan.

---

## Tata Letak Standar Dokumen

Setiap berkas PDF yang dihasilkan memuat:
- **Kop Surat Sekolah**: Berisi logo resmi sekolah, nama lembaga, alamat, dan tahun ajaran.
- **Tabel Matriks Harian**: Kolom status per tanggal dalam bulan terpilih (H/S/I/A).
- **Kolom Rekapitulasi**: Akumulasi total hadir, sakit, izin, dan alfa.
- **Titimangsa & Tanda Tangan**: Kolom tanda tangan Kepala Sekolah dan Wali Kelas / Petugas Administrasi.
