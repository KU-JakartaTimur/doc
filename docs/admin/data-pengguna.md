# Data Pengguna (Shield)

Modul Data Pengguna (`DataPengguna.php`) terintegrasi langsung dengan mesin keamanan dan otentikasi **CodeIgniter Shield**.

Modul ini bekerja berdampingan dengan [Data Petugas](./data-petugas.md) untuk mengatur tabel `users`, `auth_identities`, dan `auth_groups_users`.

---

## Kemampuan Autentikasi Shield di SIKU

- **Session-Based & Form Protection**: Perlindungan login dengan proteksi serangan brute force (*throttling*) bawaan Shield.
- **Group & Permission Filters**: Setiap rute aplikasi di `Config/Routes.php` dilindungi filter peran (`filter => 'permission:...'`), memastikan pengguna hanya dapat mengakses fitur yang menjadi haknya.
- **Isolasi Role**: Pemisahan tegas dashboard antara Superadmin, Admin, Guru/Wali Kelas, Orang Tua, Alumni, dan Petugas Scanner.
