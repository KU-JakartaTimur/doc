# Data Perizinan (Sakit & Izin)

Modul Perizinan Admin (`Admin/Perizinan.php`) digunakan oleh Staf Tata Usaha atau Administrator untuk mengelola, memverifikasi, dan menyetujui pengajuan izin/sakit digital yang diajukan oleh siswa maupun guru.

---

## Antarmuka Tabel DataTables

Daftar perizinan disajikan menggunakan DataTables Server-Side dengan pemuatan instan:

- **Pemohon**: Menampilkan nama lengkap, badge penanda (Siswa / Guru), NIS/NUPTK, serta rombel kelas.
- **Rentang Tanggal**: Tanggal mulai hingga tanggal selesai ketidakhadiran.
- **Jenis Izin**: Badge pembeda `Sakit` atau `Izin`.
- **Alasan**: Catatan uraian yang dituliskan oleh pemohon.
- **Bukti Lampiran**: Tautan/tombol untuk melihat foto surat dokter atau berkas keterangan yang diunggah.
- **Status Permohonan**: 
  - `Pending` (Kuning)
  - `Disetujui` (Hijau)
  - `Ditolak` (Merah)
- **Aksi**: Tombol verifikasi (**Konfirmasi**) dan tombol **Hapus**.

---

## Alur Verifikasi & Dampak ke Presensi

1. Admin meninjau berkas bukti surat yang dilampirkan pemohon.
2. Klik tombol **Konfirmasi** untuk membuka modal verifikasi.
3. Pilih status: **Setujui (Approved)** atau **Tolak (Rejected)**.
4. **Otomasi Presensi**:
   - Jika permohonan disetujui, sistem secara otomatis mengisi catatan presensi pada rentang tanggal tersebut menjadi status **Sakit** atau **Izin** pada tabel `tb_presensi_siswa` / `tb_presensi_guru`.
   - Hal ini memastikan bahwa pada rekap bulanan dan laporan absensi, siswa/guru tidak terhitung Alfa (bolos).
