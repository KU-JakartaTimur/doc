---
sidebar_position: 2
---

# Portal Cek Kehadiran Mandiri

Portal Cek Kehadiran Mandiri (`/cek-kehadiran`) adalah layanan publik yang memungkinkan siswa maupun orang tua murid memeriksa riwayat dan statistik kehadiran siswa tanpa perlu memiliki akun login sistem.

---

## Cara Menggunakan Portal

1. Kunjungi tautan: `http://localhost:8080/cek-kehadiran`.
2. Masukkan dua data verifikasi keamanan:
   - **Nomor Induk Siswa (NIS)**
   - **Nomor Handphone / WhatsApp** yang telah terdaftar di data siswa.
3. Klik tombol **Cek Kehadiran**.

:::note Keamanan Data Siswa
Sistem memverifikasi kecocokan antara NIS dan Nomor HP terdaftar. Jika kombinasi salah, sistem akan menampilkan notifikasi penolakan untuk menjaga privasi kehadiran siswa dari pihak luar.
:::

---

## Informasi yang Ditampilkan

Setelah identitas terverifikasi, sistem menampilkan:

### 1. Profil Siswa
- Nama Lengkap Siswa
- Nomor Induk Siswa (NIS)
- Tingkat, Jurusan, dan Rombongan Belajar / Kelas

### 2. Ringkasan Kehadiran Bulan Berjalan
Kartu statistik interaktif yang merangkum akumulasi kehadiran pada bulan aktif:
- **Total Hadir**
- **Total Sakit**
- **Total Izin**
- **Total Alfa / Tanpa Keterangan**

### 3. Tabel Riwayat Presensi Lengkap
Tabel interaktif yang memuat seluruh riwayat presensi sepanjang tahun ajaran berjalan:
- **Tanggal Presensi**
- **Status Kehadiran** (dengan badge warna: Hadir, Sakit, Izin, Alfa)
- **Waktu Jam Masuk**
- **Waktu Jam Pulang**
- **Catatan / Keterangan**
