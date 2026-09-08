---
sidebar_position: 1
---

# Pengajuan Perizinan Sakit/Izin Digital

Modul Perizinan Publik (`/izin`) menyediakan formulir daring (*online*) bagi siswa maupun guru untuk mengajukan permohonan izin atau sakit secara mandiri tanpa memerlukan proses login terlebih dahulu.

---

## Alur Pengajuan Izin

1. Buka tautan publik perizinan di browser: `http://localhost:8080/izin`.
2. Pilih tipe pemohon: **Siswa** atau **Guru**.
3. Masukkan identitas pengenal:
   - Jika Siswa: Masukkan **NIS** (Nomor Induk Siswa).
   - Jika Guru: Masukkan **NUPTK**.
4. Sistem secara otomatis mengecek database via AJAX dan menampilkan nama lengkap pemohon beserta kelas atau jabatannya.
5. Tentukan rentang waktu ketidakhadiran:
   - **Tanggal Mulai** dan **Tanggal Selesai**.
6. Pilih **Jenis Permohonan**: `Sakit` atau `Izin`.
7. Tuliskan rincian **Alasan / Keterangan**.
8. Unggah **Berkas Bukti**: Lampirkan foto surat dokter, surat keterangan orang tua, atau dokumen pendukung lainnya (format JPG, PNG, atau PDF).
9. Klik tombol **Kirim Pengajuan**.

---

## Mekanisme Approval Berjenjang

Setelah permohonan dikirimkan oleh pemohon:

- Permohonan berstatus **Pending (Menunggu Persetujuan)**.
- Notifikasi permohonan akan muncul di dashboard:
  - **Wali Kelas**: Untuk siswa di kelas yang diampu (melalui menu *Perizinan Siswa* di dashboard guru).
  - **Admin / Tata Usaha**: Melalui menu *Data Perizinan* di dashboard admin.
- Wali Kelas atau Admin dapat meninjau alasan dan membuka berkas bukti surat dokter yang dilampirkan.
- Apabila disetujui (**Disetujui / Approved**):
  - Sistem secara otomatis mencatat rekap presensi siswa/guru bersangkutan pada tanggal yang diajukan menjadi berstatus **Sakit** atau **Izin**.
  - Siswa/guru tidak akan dihitung sebagai "Alfa / Tanpa Keterangan".
- Apabila ditolak (**Ditolak / Rejected**):
  - Permohonan tidak akan mengubah status presensi.
