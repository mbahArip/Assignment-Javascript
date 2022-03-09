var a = 5;
let b = 'kampus merdeka';
const nama = 'Budi';
let terdaftar = false;
let lengkap_arr = [a, b, nama, terdaftar];

/* Soal B
 * Ubah kode sehingga dapat menampilkan baris 22 dalam console.
 */
terdaftar = true;

function perkenalan() {
	let asal = 'Indonesia';
	return console.log('perkenalan nama saya ' + nama + ' nomor urut ' + a + ' sekarang sedang mengikuti ' + b + ' berasal dari ' + asal);
}

// Baris 21 - 23
if (terdaftar === true) {
	console.log(nama + ' terdaftar sebagai kegiatan kampus merdeka');
}

/* Soal A
 * Ambil index ke 2 dalam array di baris 5, dan tampilkan dalam console
 */
console.log('Array = ' + lengkap_arr[2]);

a = b;
// Baris 26 - Error karena const tidak dapat diubah
// nama = b;

// Baris 28 - Error karena asal berada di scope function perkenalan
// console.log('asal diakses = ' + asal);
console.log('a adalah = ' + a);
console.log('b adalah = ' + b);

/* Soal C
 * Lakukan pemanggilan untuk function perkenalan
 */
perkenalan();

/* Soal D
 * Ubah kode sehinggal menampilkan output:
 *
 * Budi terdaftar sebagai kegiatan kampus merdeka
 * Array = Budi
 * a adalah = kampus merdeka
 * b adalah = kampus merdeka
 * perkenalan nama saya Budi nomor urut 5 sekarang sedang mengikuti kampus merdeka berasal dari Indonesia
 */
