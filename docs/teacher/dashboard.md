# Dashboard Wali Kelas

Halaman utama bagi Guru yang ditugaskan sebagai Wali Kelas (`Teacher/Dashboard.php`). Dashboard ini menyajikan gambaran komprehensif mengenai kondisi kehadiran rombongan belajar yang menjadi tanggung jawabnya secara *real-time*.

![Dashboard Wali Kelas SIKU](/img/screenshots/dashboard-wali-kelas-1.9.10.png)

---

## Komponen Dashboard

### 1. Kartu Identitas Kelas
- Menampilkan nama dan tingkat kelas yang diampu (misalnya: *X BDP A*).
- Menampilkan jumlah total siswa di dalam rombel kelas tersebut.
- Tombol **Download QR Code Siswa**: Tautan instan untuk mengunduh seluruh berkas QR Code siswa di kelas asuhannya.

### 2. Statistik Kehadiran Hari Ini
Kartu metrik yang menghitung secara live status absensi kelas pada hari berjalan:
- **Hadir**: Jumlah siswa yang sudah melakukan scan masuk.
- **Sakit**: Jumlah siswa yang berstatus sakit (dari form perizinan atau input wali kelas).
- **Izin**: Jumlah siswa dengan permohonan izin terkonfirmasi.
- **Alfa**: Jumlah siswa tanpa keterangan (setelah jam toleransi sekolah berakhir).

### 3. Grafik Kehadiran Kelas (7 Hari Terakhir)
Diagram batang interaktif yang memetakan fluktuasi kehadiran siswa di kelas tersebut selama sepekan terakhir.

### 4. Pintasan Menu Wali Kelas
- **Dashboard Wali Kelas**: Halaman ikhtisar utama.
- **Manajemen Kehadiran**: Memantau dan mengoreksi presensi harian siswa kelas.
- **Perizinan Siswa**: Approval surat izin dan sakit siswa kelas.
- **QR Code Siswa**: Melihat dan mencetak QR Code siswa kelas.
- **Laporan Kelas**: Mengunduh rekap presensi bulanan dalam bentuk dokumen.
