---
sidebar_position: 5
---

# Konfigurasi Web Server (Nginx)

Untuk lingkungan produksi (*production environment*), SIKU sangat disarankan dijalankan menggunakan server web **Nginx** bersama **PHP-FPM**. Nginx memberikan kinerja tinggi, proteksi berkas unggahan, serta pengiriman berkas Service Worker PWA yang tepat.

---

## Konfigurasi Virtual Host Nginx

Berikut adalah konfigurasi lengkap blok server Nginx yang direkomendasikan untuk SIKU:

```nginx
server {
    listen 80;
    server_name siku.sekolah.sch.id;
    root /var/www/siku/public;
    index index.php index.html;

    # 1. Aturan Khusus Service Worker & Manifest PWA (Wajib diletakkan sebelum Static Files)
    location ~* ^/(sw\.js|manifest\.json|offline\.html)$ {
        expires off;
        add_header Cache-Control "no-cache, must-revalidate, max-age=0" always;
        add_header Service-Worker-Allowed "/" always;
        try_files $uri =404;
    }

    # 2. Akses Direktori Upload (writable/uploads)
    location ^~ /uploads/ {
        alias /var/www/siku/writable/uploads/;
        access_log off;
        expires 30d;
        try_files $uri $uri/ =404;

        # Proteksi: Cegah eksekusi script PHP dalam folder upload
        location ~ \.php$ {
            deny all;
        }
    }

    # 3. Routing Utama CodeIgniter 4
    location / {
        try_files $uri $uri/ /index.php$is_args$args;
    }

    # 4. Penanganan Skrip PHP FastCGI (PHP-FPM)
    location ~ \.php$ {
        fastcgi_pass unix:/run/php/php8.2-fpm.sock;
        fastcgi_index index.php;
        include fastcgi_params;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        fastcgi_split_path_info ^(.+\.php)(/.+)$;
        fastcgi_param PATH_INFO $fastcgi_path_info;
    }

    # 5. Static Files (Optimasi Cache Browser untuk Aset Web)
    location ~* \.(jpg|jpeg|gif|png|css|js|ico|woff|woff2|ttf|svg)$ {
        access_log off;
        expires 30d;
        add_header Cache-Control "public, no-transform";
        try_files $uri =404;
    }

    # 6. Proteksi Berkas Tersembunyi & Sensitif (.env, .git, dll)
    location ~ /\.(ht|env|git) {
        deny all;
    }
}
```

---

## Poin-Poin Penting Konfigurasi

1. **Service Worker Header**:
   Header `Service-Worker-Allowed "/"` dan `Cache-Control "no-cache"` wajib ada agar browser selalu memperbarui logika cache PWA dan mengizinkan service worker mengontrol seluruh path aplikasi.
2. **Proteksi Folder Upload**:
   Aturan `location ~ \.php$ { deny all; }` di dalam direktori upload mencegah risiko *Remote Code Execution (RCE)* seandainya pengguna mencoba mengunggah skrip berbahaya berkedok foto/lampiran izin.
3. **Pencegahan Akses Berkas Sensitif**:
   Blok `location ~ /\.(ht|env|git)` memastikan berkas konfigurasi `.env` dan repositori `.git` tidak dapat diunduh oleh publik.
