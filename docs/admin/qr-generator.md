# QR Code Generator & Cetak Kartu

Modul QR Generator (`QRGenerator.php` / `GenerateQR.php`) memfasilitasi pembuatan kode QR beresolusi tinggi dan pencetakan kartu presensi fisik bagi seluruh siswa dan guru.

![Generate QR Code](/img/screenshots/generate-qr-1.9.10.png)

---

## Kemampuan Generator

SIKU menggunakan pustaka **Endroid QR Code** untuk menghasilkan grafis barcode dua dimensi yang tajam dan mudah dibaca oleh sensor kamera maupun scanner optik:

- **Kode Unik Kriptografis**: Setiap QR Code memuat string unik acak yang terasosiasi ke NIS siswa atau NUPTK guru, mencegah pemalsuan kode absensi.
- **Generate Massal (Bulk Generate)**: Tombol **GENERATE ALL** membuat berkas gambar QR Code seluruh siswa atau guru dalam hitungan detik.
- **Generate per Rombel / Kelas**: Pembuatan QR khusus siswa di rombel kelas terpilih.

---

## Cetak Kartu Presensi Siap Print (Print-Ready)

SIKU menyediakan fitur cetak kartu terintegrasi:

1. **Layout Grid 4-Kolom Siap Cetak**:
   - Menu cetak kartu otomatis merapikan kartu ke dalam tata letak kisi 4 kolom dengan garis batas potong rapi, siap dicetak langsung di kertas A4 atau kertas foto melalui dialog cetak browser (`Ctrl + P`).
2. **Cetak Kartu Satuan (Single Print)**:
   - Jika ada kartu siswa yang hilang atau rusak, kartu dapat dicetak ulang secara individual tanpa harus mencetak satu kelas penuh.
3. **Unduh Arsip ZIP**:
   - Tersedia tombol **DOWNLOAD ALL** atau **DOWNLOAD PER KELAS** untuk mengunduh seluruh file gambar QR Code dalam arsip terkompresi ZIP.
