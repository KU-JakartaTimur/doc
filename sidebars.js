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
    {
      type: 'category',
      label: 'Admin Modules',
      items: [
        'admin/dashboard',
        'admin/data-pengguna',
        'admin/data-guru',
        'admin/data-siswa',
        'admin/data-orang-tua',
        'admin/data-petugas',
        'admin/data-ruangan',
        'admin/data-barang',
        'admin/data-perolehan',
        'admin/data-absen-guru',
        'admin/data-absen-siswa',
        'admin/jurusan',
        'admin/kelas',
        'admin/qr-generator',
        'admin/generate-laporan',
        'admin/settings',
        'admin/backup',
      ],
    },
    {
      type: 'category',
      label: 'Teacher Modules',
      items: [
        'teacher/dashboard',
        'teacher/qrcode',
        'teacher/reports',
      ],
    },
    {
      type: 'category',
      label: 'Parent Modules',
      items: [
        'parent/dashboard',
        'parent/reports',
      ],
    },
    {
      type: 'category',
      label: 'Public Scan',
      items: [
        'scan/index',
      ],
    },
  ],
};

export default sidebars;
