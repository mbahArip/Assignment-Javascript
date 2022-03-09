/* Soal 2A
 * Soal: Kenapa baris 21, 22, dan 23 tidak dapat tampil?
 * Jawaban: Baris 21,22,23 tidak dapat tampil dikarenakan value variable terdaftar adalah false.
 */

/* Soal 2B
 * Soal: Kenapa deklarasi pada baris 26 menyebabkan Error?
 * Jawaban: Deklarasi pada baris 26 menyebabkan Error karena const nama tidak dapat diubah.
 */

/* Soal 2C
 * Soal: Dengan melakukan komen pada baris 26, apakah baris 28 dapat dieksekusi?
 * Jawaban: Tidak, karena variable asal di baris 28, di deklarasikan di dalam scope function perkenalan.
 */

// Soal 3 - Lakukan destructuring array berikut, sehingga Budi tersimpan pada variable a, Sita tersimpan pada variable b, dan Ayu tersimpan pada variable c.
const foo = ['Budi', 'Sita', 'Ayu'];
let [a, b, c] = foo;
console.log('Hasil nomor 3: ', a, b, c); // Budi Sita Ayu

// Soal 4 - Ubah tanda (-) menjadi (/), sehingga output menjadi ["10/17","05/19","20/19"]
let bdays = ['10-17', '05-19', '20-19'];
bdays = bdays.map((bday) => bday.replace('-', '/'));
console.log('Hasil nomor 4: ', bdays); // ["10/17","05/19","20/19"]

// Soal 5 - Kalikan setiap value dalam array dengan 2, sehingga output menjadi [2, 4, 6, 8, 10, 12]
let value = [1, 2, 3, 4, 5, 6];
value = value.map((val) => (val *= 2));
console.log('Hasil nomor 5: ', value); // [2, 4, 6, 8, 10, 12]

// Soal 6 - Bulatkan setiap value dalam array, sehingga output menjadi [2, 3, 5, 12]
let arr = [1.5, 2.56, 5.1, 12.33];
arr = arr.map((val) => Math.round(val));
console.log('Hasil nomor 6: ', arr); // [2, 3, 5, 12]
