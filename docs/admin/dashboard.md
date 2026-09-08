# Dashboard Admin

Modul Dashboard Admin (`Dashboard.php`) adalah pusat komando dan analitik kehadiran sekolah bagi Administrator dan Superadmin. Halaman ini menyajikan visualisasi data secara langsung (*live*) tanpa perlu memuat ulang seluruh halaman.

![Dashboard Admin SIKU](/img/screenshots/admin-dashboard-1.9.10.png)

---

## Fitur & Komponen Dashboard

### 1. Kartu Statistik Utama
Menampilkan metrik ringkasan sekolah:
- **Total Siswa Aktif**: Jumlah seluruh peserta didik yang terdaftar aktif.
- **Total Guru**: Jumlah tenaga pendidik dan pengajar.
- **Rombongan Belajar (Kelas & Jurusan)**: Total kelas dan program keahlian yang berjalan.
- **Akun Petugas**: Jumlah pengguna aktif dalam sistem.

### 2. Rekap Presensi Harian Real-time
- Menyajikan jumlah siswa dan guru dengan status **Hadir**, **Sakit**, **Izin**, dan **Alfa**.
- Dilengkapi dropdown filter kelas untuk memantau kehadiran per rombel secara spesifik.
- Membedakan status **"Belum Scan"** (siswa yang belum tiba di pagi hari) dengan **"Alfa"** (siswa yang tidak hadir hingga jam kepulangan terlewati).

### 3. Grafik Tren Kehadiran (7 Hari Terakhir)
Visualisasi diagram batang interaktif berbasis **Chart.js** yang menampilkan persentase tingkat kehadiran siswa dan guru selama 7 hari kalender terakhir.

### 4. Sistem Disiplin & Poin Keterlambatan
- **Perhitungan Keterlambatan Otomatis**: Sistem secara otomatis mengkalkulasi selisih menit kedatangan siswa terhadap batas jam masuk standar sekolah.
- **Widget Top 5 Siswa Terlambat**: Menampilkan daftar 5 siswa dengan akumulasi menit/poin keterlambatan tertinggi untuk memudahkan pembinaan kesiswaan.

### 5. Peringatan Ketidakhadiran Beruntun
Memberikan sinyal peringatan dini (*early warning*) bagi siswa yang tidak hadir selama **3 hari atau lebih berturut-turut** tanpa surat keterangan izin/sakit, sehingga pihak bimbingan konseling (BK) atau wali kelas dapat segera menindaklanjuti.
