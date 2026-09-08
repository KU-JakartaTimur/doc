---
sidebar_position: 6
---

# Perintah CLI & Development

Kumpulan perintah Command Line Interface (CLI) yang sering digunakan selama pengembangan, pengelolaan basis data, dan deployment aplikasi **SIKU**.

---

## 1. Menjalankan Server Aplikasi

```bash
# Menjalankan local development server bawaan CodeIgniter 4
php spark serve

# Menjalankan di port atau host tertentu
php spark serve --port 8080 --host 0.0.0.0
```

---

## 2. Manajemen Database Migration

```bash
# Menjalankan seluruh file migration yang belum dieksekusi
php spark migrate

# Membatalkan (rollback) batch migrasi terakhir
php spark migrate:rollback

# Menjalankan satu file migration tertentu secara spesifik
php spark migrate:file "app\Database\Migrations\2026-08-15-000001_CreateCameraCaptureTable.php"

# Menampilkan status seluruh file migration
php spark migrate:status
```

---

## 3. Database Seeding

```bash
# Mengisi data master awal melalui DatabaseSeeder utama
php spark db:seed DatabaseSeeder

# Menjalankan seeder individual tertentu
php spark db:seed KehadiranSeeder
php spark db:seed SettingsSeeder
```

---

## 4. Spark Generators (Scaffolding Kode)

```bash
# Membuat file Migration baru
php spark make:migration TambahKolomSiswa

# Membuat file Model baru
php spark make:model AlumniModel

# Membuat file Controller baru
php spark make:controller Admin/LaporanController

# Membuat file Filter autentikasi/otorisasi
php spark make:filter RoleFilter

# Membuat file Seeder baru
php spark make:seeder DemoDataSeeder
```

---

## 5. Perintah Khusus SIKU

```bash
# Mengenerate seluruh varian ikon PWA dari berkas logo sekolah
php spark pwa:icons --logo writable/uploads/logo/logo_sekolah.png

# Generate ulang ikon PWA dari logo yang tersimpan saat ini
php spark pwa:icons

# Reset ikon PWA kembali ke logo bawaan sistem
php spark pwa:icons --reset

# Menghasilkan Encryption Key Secret (32 bytes base64)
php -r "echo base64_encode(random_bytes(32)) . PHP_EOL;"

# Pengujian otomatis rute Service Worker PWA (Node.js)
node tests/pwa/sw-routing.mjs
```

---

## 6. Pengelolaan Container Docker

Jika mengoperasikan SIKU menggunakan Docker Compose:

```bash
# Membangun image dan menjalankan container di background
docker compose up -d --build

# Meninjau status kontainer yang sedang berjalan
docker compose ps

# Memeriksa log output container aplikasi
docker compose logs -f app

# Menghentikan dan menghapus container Docker
docker compose down
```
