---
sidebar_position: 1
---

# Instalasi & Cara Penggunaan

Panduan langkah demi langkah untuk menginstal, mengonfigurasi, dan menjalankan aplikasi **SIKU (Sistem Informasi Sekolah Khoiru Ummah)** di lingkungan pengembangan lokal maupun server.

---

## Persyaratan Sistem

Pastikan perangkat Anda memenuhi spesifikasi kebutuhan sistem berikut:

- **PHP**: Versi **8.2** atau lebih baru.
  - Ekstensi PHP wajib aktif: `intl`, `gd`, `mbstring`, `curl`, `json`, `mysqli`.
- **Composer**: Composer versi 2.x ([getcomposer.org](https://getcomposer.org/)).
- **Database Server**: MySQL 8.x atau MariaDB 10.4+.
- **Perangkat Keras Pemindai**:
  - Webcam / Kamera USB / Kamera Laptop (bisa juga kamera smartphone via DroidCam / IP Webcam).
  - Atau USB RFID Reader (opsional untuk presensi tap kartu).
- **Node.js**: Versi 18+ (opsional, untuk menjalankan test automatis service worker PWA).

---

## Langkah-Langkah Instalasi

### 1. Clone Repository

Unduh kode sumber aplikasi dari repository resmi:

```bash
git clone https://github.com/KU-JakartaTimur/siku.git
cd siku
```

### 2. Install Dependensi Composer

Jalankan composer untuk mengunduh seluruh library PHP pihak ketiga (CodeIgniter 4, Shield, Endroid QR, dll):

```bash
composer install
```

### 3. Konfigurasi Environment (`.env`)

Salin berkas template konfigurasi `.env.example` menjadi `.env`:

```bash
cp .env.example .env
```

Buka berkas `.env` lalu sesuaikan konfigurasi URL dan koneksi database:

```env
CI_ENVIRONMENT = development

app.baseURL = 'http://localhost:8080/'

database.default.hostname = localhost
database.default.database = db_absensi
database.default.username = root
database.default.password = 
database.default.DBDriver = MySQLi
database.default.port = 3306
```

### 4. Buat Database MySQL

Buat basis data baru melalui MySQL CLI atau phpMyAdmin:

```sql
CREATE DATABASE db_absensi CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

### 5. Jalankan Database Migration

Jalankan perintah Spark untuk menyusun seluruh struktur tabel sistem:

```bash
php spark migrate
```

:::info Tabel yang Disusun
Sistem akan membuat tabel-tabel utama:
- `tb_jurusan`, `tb_kelas`, `tb_kehadiran`, `tb_guru`, `tb_siswa`, `tb_orangtua`, `tb_alumni`
- `tb_presensi_guru`, `tb_presensi_siswa`, `tb_camera_capture`, `tb_perizinan`, `tb_hari_libur`, `tb_audit_logs`
- `general_settings`, serta tabel autentikasi CodeIgniter Shield (`users`, `auth_identities`, `auth_groups_users`).
:::

### 6. Jalankan Database Seeder

Isi data master awal sistem (status kehadiran default, jurusan, kelas awal, pengaturan umum, dan akun default superadmin):

```bash
php spark db:seed DatabaseSeeder
```

### 7. Jalankan Server Aplikasi

Gunakan built-in development server CodeIgniter 4:

```bash
php spark serve
```

Aplikasi kini dapat diakses di browser pada alamat **`http://localhost:8080`**.

:::tip Alternatif Menggunakan Docker
Jika Anda lebih menyukai lingkungan terisolasi dengan Docker:
```bash
docker compose up -d --build
```
Aplikasi dapat dibuka di `http://localhost:8080` dan phpMyAdmin di `http://localhost:8081`.
:::

---

## Akun Default Superadmin

Setelah proses seeder berhasil, gunakan akun default administrator berikut untuk login pertama kali:

- **Username**: `superadmin`
- **Email**: `adminsuper@gmail.com`
- **Password**: `superadmin`

:::caution Keamanan Sistem
Segera perbarui email dan ubah kata sandi akun `superadmin` melalui menu **Data Petugas** atau halaman profil setelah berhasil login!
:::

---

## Akses Publik & Modul Scanner

Setelah server berjalan, Anda dapat mengakses endpoint penting berikut tanpa harus login:

- **Presensi Multi-Metode (Kiosk)**: `http://localhost:8080/scan` (pilihan mode Masuk / Pulang).
- **Pengajuan Izin/Sakit Mandiri**: `http://localhost:8080/izin`
- **Portal Cek Kehadiran Mandiri Siswa**: `http://localhost:8080/cek-kehadiran`
