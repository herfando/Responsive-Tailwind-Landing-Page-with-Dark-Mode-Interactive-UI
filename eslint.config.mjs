// eslint.config.mjs
import { dirname } from 'path';
import { fileURLToPath } from 'url';

import { FlatCompat } from '@eslint/eslintrc';
import importPlugin from 'eslint-plugin-import';

// Mendapatkan __filename dan __dirname di ES Modules (untuk kompatibilitas)
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Inisialisasi FlatCompat untuk kompatibilitas dengan konfigurasi lama (jika diperlukan)
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Definisi konfigurasi ESLint
const eslintConfig = [
  // Menggunakan konfigurasi dasar yang direkomendasikan oleh ESLint
  // dan menonaktifkan aturan yang bentrok dengan Prettier
  ...compat.extends(
    'eslint:recommended', // Aturan dasar ESLint untuk JavaScript
    'prettier' // Menonaktifkan aturan yang bentrok dengan Prettier
  ),
  {
    // Menambahkan plugin import
    plugins: {
      import: importPlugin,
    },
    // Mendefinisikan aturan-aturan kustom
    rules: {
      // Aturan untuk mengurutkan import (jika kalian menggunakan modul JS)
      'import/order': [
        'error',
        {
          // Mengelompokkan import berdasarkan tipe
          groups: [
            'builtin', // Modul bawaan Node.js
            'external', // Modul dari node_modules
            'internal', // Modul internal proyek (jika ada alias khusus)
            ['parent', 'sibling'], // Modul relatif (e.g., '../', './')
            'index', // Import dari file index di folder yang sama
            'object', // Import object (jarang digunakan)
          ],
          // Menambahkan baris kosong antar grup
          'newlines-between': 'always',
          // Mengurutkan import secara alfabetis
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
      // Contoh aturan ESLint tambahan yang mungkin berguna:
      'no-unused-vars': 'warn', // Memberi peringatan untuk variabel yang tidak digunakan
      'no-console': 'warn', // Memberi peringatan untuk penggunaan console.log
    },
    // Mengabaikan file atau folder tertentu dari linting
    // Contoh: jika ada folder 'vendor' atau 'dist' yang berisi kode pihak ketiga
    ignores: ['node_modules/', 'dist/', 'src/output.css'],
  },
  // Jika kalian berencana menggunakan JavaScript modern (ES Modules) di browser,
  // atau ingin linting untuk skrip di HTML, kalian bisa menambahkan aturan di sini.
  // Contoh:
  // {
  //   files: ['**/*.js'], // Terapkan aturan ini ke semua file .js
  //   languageOptions: {
  //     ecmaVersion: 2020, // Mendukung fitur JavaScript terbaru
  //     sourceType: 'module', // Mengaktifkan dukungan ES Modules
  //     globals: {
  //       document: 'readonly', // Mendefinisikan 'document' sebagai global read-only
  //       window: 'readonly',   // Mendefinisikan 'window' sebagai global read-only
  //     },
  //   },
  //   rules: {
  //     // Aturan spesifik untuk JS di browser
  //   },
  // },
];

// Ekspor konfigurasi ESLint
export default eslintConfig;