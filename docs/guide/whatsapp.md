---
sidebar_position: 3
---

# Notifikasi WhatsApp Gateway

SIKU dilengkapi modul pengiriman notifikasi instan WhatsApp kepada orang tua/wali murid atau guru sesaat setelah presensi terekam secara sukses di gerbang sekolah.

![Pratinjau Notifikasi WhatsApp](/img/screenshots/notif-wa.png)

---

## Perbandingan 5 Provider WhatsApp

SIKU mendukung 5 provider gateway WhatsApp terpopuler, baik layanan SaaS terkelola maupun gateway *self-hosted* gratis:

| Provider | Tipe Layanan | Perlu Server Mandiri | Header Autentikasi | Port Standar |
| :--- | :--- | :---: | :--- | :---: |
| **[Fonnte](https://fonnte.com/)** | Cloud Hosted (Berbayar) | Tidak | `Authorization: <token>` | — |
| **[OpenWA](https://github.com/rmyndharis/OpenWA)** | Self-hosted (Node.js) | Ya | `X-API-Key: <token>` | `2785` |
| **[ApiMe](https://github.com/open-apime/apime)** | Self-hosted (Go/WhatsMeow) | Ya | `Authorization: Bearer <token>` | `8080` |
| **[Evolution API](https://github.com/evolution-foundation/evolution-api)** | Self-hosted (Node.js/Baileys) | Ya | `apikey: <token>` | `8080` |
| **[wuzapi](https://github.com/asternic/wuzapi)** | Self-hosted (Go/WhatsMeow) | Ya | `Token: <token>` | `8080` |

---

## Konfigurasi Berkas `.env`

### 1. Mengaktifkan Fitur Notifikasi

Pastikan opsi notifikasi WhatsApp diaktifkan pada `.env`:

```env
WA_NOTIFICATION=true
WHATSAPP_TIMEOUT=10
```

:::tip Pengaturan Timeout
Tetapkan `WHATSAPP_TIMEOUT` yang wajar (standar 10 detik) agar alur scanner di gerbang tidak mengalami penundaan (*blocking*) jika gateway WhatsApp sedang lambat atau offline.
:::

---

### 2. Mode Provider WhatsApp

#### Opsi A: Mode Rotasi Acak (`Auto`) — *Sangat Direkomendasikan*

Mode `Auto` secara otomatis mengacak dan merotasi pengiriman pesan antar gateway yang tokennya terisi. Hal ini sangat efektif untuk membagi beban pesan (*load balancing*) dan mencegah pemblokiran nomor (*banned*):

```env
WHATSAPP_PROVIDER=Auto

# Masukkan token/kunci dari provider yang aktif:
WHATSAPP_TOKEN_Wuzapi=token_wuzapi_anda
WHATSAPP_TOKEN_ApiMe=token_apime_anda
WHATSAPP_TOKEN_Fonnte=token_fonnte_anda
WHATSAPP_TOKEN_OpenWA=token_openwa_anda
WHATSAPP_TOKEN_EvolutionAPI=token_evolution_anda
```

#### Opsi B: Menggunakan Satu Provider Spesifik

**1. Fonnte (Cloud Hosted):**
```env
WHATSAPP_PROVIDER=Fonnte
WHATSAPP_TOKEN=token_fonnte_anda
```

**2. OpenWA (Self-hosted):**
```env
WHATSAPP_PROVIDER=OpenWA
WHATSAPP_TOKEN=api_key_openwa
WHATSAPP_URL=https://wa.sekolah.sch.id:2785
WHATSAPP_SESSION=nama_sesi
```

**3. ApiMe (Self-hosted):**
```env
WHATSAPP_PROVIDER=ApiMe
WHATSAPP_TOKEN=token_instance_apime
WHATSAPP_URL=https://wa.sekolah.sch.id:8080
WHATSAPP_INSTANCE=uuid_instance
```

**4. Evolution API (Self-hosted):**
```env
WHATSAPP_PROVIDER=EvolutionAPI
WHATSAPP_TOKEN=api_key_evolution
WHATSAPP_URL=https://evolution.sekolah.sch.id
WHATSAPP_INSTANCE=nama_instance
```

**5. wuzapi (Self-hosted):**
```env
WHATSAPP_PROVIDER=Wuzapi
WHATSAPP_TOKEN=token_user_wuzapi
WHATSAPP_URL=https://wuzapi.sekolah.sch.id
```

---

## Normalisasi Nomor & Pencatatan Log

- **Normalisasi Nomor Telepon Otomatis**: Sistem secara cerdas mengubah awalan lokal (`0812...` atau `+62812...`) menjadi format internasional (`62812...`) sebelum diproses oleh gateway.
- **Log Error Pengiriman**: Jika gateway gagal mengirim pesan (misalnya nomor tidak terdaftar atau koneksi putus), sistem tidak akan menghentikan proses presensi. Detail error tercatat dengan aman pada berkas `writable/logs/log-*.log`.
