// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    'intro',
    'tata-cara-penggunaan',
    {
      type: 'category',
      label: 'Panduan Teknis & Instalasi',
      items: [
        'guide/installation',
        'guide/pwa',
        'guide/whatsapp',
        'guide/tts-face',
        'guide/server-nginx',
        'guide/cli-commands',
      ],
    },
    {
      type: 'category',
      label: 'Presensi & Portal Publik',
      items: [
        'scan/index',
        'portal/perizinan',
        'portal/cek-kehadiran',
      ],
    },
    {
      type: 'category',
      label: 'Modul Superadmin & Admin',
      items: [
        'admin/dashboard',
        'admin/data-siswa',
        'admin/data-guru',
        'admin/kelas',
        'admin/jurusan',
        'admin/data-orang-tua',
        'admin/data-alumni',
        'admin/data-petugas',
        'admin/data-pengguna',
        'admin/data-absen-siswa',
        'admin/data-absen-guru',
        'admin/perizinan',
        'admin/holiday',
        'admin/camera-capture',
        'admin/qr-generator',
        'admin/generate-laporan',
        'admin/audit-log',
        'admin/settings',
        'admin/backup',
        'admin/data-barang',
        'admin/data-ruangan',
        'admin/data-perolehan',
      ],
    },
    {
      type: 'category',
      label: 'Modul Guru & Wali Kelas',
      items: [
        'teacher/dashboard',
        'teacher/attendance',
        'teacher/perizinan',
        'teacher/qrcode',
        'teacher/reports',
      ],
    },
    {
      type: 'category',
      label: 'Modul Orang Tua / Wali',
      items: [
        'parent/dashboard',
        'parent/reports',
      ],
    },
    {
      type: 'category',
      label: 'Modul Alumni',
      items: [
        'alumni/dashboard',
      ],
    },
    {
      type: 'category',
      label: 'Modul Kepala Sekolah',
      items: [
        'kepsek/dashboard',
      ],
    },
  ],
};

export default sidebars;
