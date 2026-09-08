---
sidebar_position: 2
---

# Tata Cara Penggunaan

Panduan operasional awal untuk masuk, menavigasi modul, dan menggunakan sistem **SIKU (Sistem Informasi Sekolah Khoiru Ummah)** sesuai peran pengguna.

---

## 1. Alur Masuk (Login)

Untuk mengakses dashboard sistem, pengguna harus masuk melalui halaman autentikasi terpadu.

![Halaman Login SIKU](/img/screenshots/login-1.9.10.png)

1. Buka halaman utama aplikasi atau kunjungi alamat `/login`.
2. Masukkan **Email atau Username** dan **Kata Sandi**.
3. Klik tombol **Masuk (Login)**.

### Pengalihan Otomatis Berdasarkan Peran (*Role-Based Redirect*)
Sistem secara cerdas mengenali grup akun dan mengarahkan pengguna ke dashboard yang relevan:
- Akun `superadmin` atau `admin` diarahkan ke **Dashboard Admin** (`/admin`).
- Akun `guru` (Wali Kelas) diarahkan langsung ke **Dashboard Wali Kelas** (`/teacher/dashboard`).
- Akun `orangtua` diarahkan ke **Dashboard Orang Tua** (`/parent/dashboard`).
- Akun `scanner` diarahkan langsung ke **Halaman Pemindai Presensi** (`/scan`).
- Akun `alumni` diarahkan ke **Portal Alumni**.

---

## 2. Mengenal Dashboard Utama

Setelah login sebagai Administrator atau Superadmin, halaman dashboard menyajikan ikhtisar kondisi sekolah secara komprehensif.

![Dashboard Admin SIKU](/img/screenshots/admin-dashboard-1.9.10.png)

### Elemen-Elemen Utama:
- **Statistik Header**: Kartu ringkasan jumlah siswa aktif, guru, rombel kelas/jurusan, dan akun petugas terdaftar.
- **Widget Presensi Hari Ini**: Pemantauan langsung jumlah Hadir, Sakit, Izin, dan Alfa pada hari berjalan dengan filter kelas dinamis.
- **Grafik Tren 7 Hari**: Visualisasi statistik kehadiran siswa dan guru selama sepekan terakhir.
- **Peringatan Disiplin Kehadiran**: Widget pemantauan siswa terlambat dan notifikasi siswa yang tidak hadir berturut-turut tanpa keterangan.

---

## 3. Panduan Pengaturan Akun Khusus

### A. Menyiapkan Akun Wali Kelas
1. Daftarkan identitas pengajar di menu **Data Guru**.
2. Pastikan daftar kelas telah dibuat di menu **Kelas & Jurusan** → **Data Kelas**.
3. Edit kelas terkait dan pilih guru yang bertugas sebagai **Wali Kelas**.
4. Di menu **Data Petugas**, buat atau edit akun guru tersebut:
   - Pilih nama guru pada opsi **"Hubungkan ke Guru"**.
   - Berikan role **Guru** (`guru`).
5. Saat guru tersebut login, ia akan otomatis memegang kendali atas siswa di kelas asuhannya.

### B. Menyiapkan Akun Orang Tua Siswa
1. Masuk ke menu **Data Orang Tua** lalu daftarkan data orang tua siswa dan hubungkan dengan NIS siswa terkait.
2. Buat akun login baru di menu **Data Petugas** dengan peran `orangtua`.
3. Orang tua dapat login untuk memantau grafik kehadiran, rekap kedatangan/kepulangan harian, serta bukti foto kehadiran anak.

### C. Menyiapkan Akun Petugas Scanner di Gerbang
1. Buat akun petugas baru di menu **Data Petugas**.
2. Berikan role khusus **Petugas Scanner** (`scanner`).
3. Akun ini hanya memiliki akses ke layar scanner presensi di gerbang dan tidak dapat membuka data administratif sekolah.
