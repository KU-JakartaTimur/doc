# Verifikasi Perizinan Siswa Kelas

Modul Perizinan Guru (`Teacher/Perizinan.php`) digunakan oleh Wali Kelas untuk meninjau dan memvalidasi surat permohonan sakit atau izin yang diajukan oleh siswa di rombel kelas asuhannya.

---

## Alur Verifikasi Wali Kelas

1. Masuk ke dashboard guru lalu pilih menu **Perizinan Siswa**.
2. Sistem secara otomatis hanya menampilkan daftar pengajuan izin dari siswa di kelas yang diampu oleh wali kelas tersebut.
3. Tabel menyajikan informasi:
   - **Nama Siswa & NIS**
   - **Rentang Tanggal Sakit/Izin**
   - **Jenis Pengajuan**: Sakit atau Izin
   - **Alasan & Surat Keterangan / Bukti**: Klik tombol berkas untuk memeriksa foto surat dokter atau surat izin dari orang tua.
   - **Status Saat Ini**: `Pending`, `Disetujui`, atau `Ditolak`.
4. Klik tombol **Konfirmasi** untuk menyetujui atau menolak permohonan.
5. Jika **Disetujui**, sistem otomatis menyelaraskan kehadiran siswa pada tabel presensi menjadi Sakit atau Izin tanpa terhitung Alfa.
