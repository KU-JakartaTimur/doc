# Laporan Kehadiran Kelas

Modul Laporan Kelas (`Teacher/Reports.php`) memfasilitasi Wali Kelas untuk mencetak dan mengunduh berkas laporan kehadiran bulanan siswa di kelas yang diampu dalam format **PDF** atau **DOC**.

---

## Alur Pembuatan Laporan

1. Buka menu **Laporan Kelas** pada sidebar guru.
2. Tentukan periode bulan dan tahun pelaporan (misalnya: *Maret 2026*).
3. Klik tombol:
   - **Cetak PDF**: Untuk menghasilkan berkas PDF siap cetak dengan format resmi sekolah.
   - **Download DOC**: Untuk mengunduh berkas dokumen Microsoft Word.

---

## Struktur Dokumen Laporan Kelas

Berkas laporan memuat:
- **Kop Surat Lembaga**: Menampilkan logo dan identitas resmi sekolah Khoiru Ummah.
- **Identitas Rombel**: Nama kelas, tingkat, semester, dan nama wali kelas.
- **Tabel Rekapitulasi Presensi**:
  - Kolom nomor urut, NIS, dan nama lengkap siswa.
  - Matriks tanggal kehadiran 1 s/d 31 (dengan kode H, S, I, A).
  - Kolom akumulasi total: Hadir, Sakit, Izin, dan Alfa.
- **Kolom Pengesahan**: Titimangsa dan tanda tangan resmi Wali Kelas serta Kepala Sekolah.
