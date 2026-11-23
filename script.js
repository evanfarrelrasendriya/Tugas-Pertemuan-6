// 1. Deklarasi array daftarBuku menggunakan const
const daftarBuku = [
  { judul: "Dasar Pemrograman Web", harga: 85000, stok: 12 }, 
  { judul: "Algoritma dan Logika", harga: 95000, stok: 0 },    
  { judul: "Basis Data untuk Pemula", harga: 120000, stok: 5 }, 
  { judul: "Jaringan Komputer", harga: 110000, stok: 8 }     
]; 

// 4. Fungsi hitungTotalAset(buku) untuk menghitung total nilai seluruh stok
function hitungTotalAset(buku) { // Mendefinisikan fungsi bernama hitungTotalAset dengan parameter buku (array)
  let total = 0; // Membuat variabel penampung nilai total aset awal bernilai 0
  for (let i = 0; i < buku.length; i++) { // Perulangan dari indeks 0 sampai panjang array buku - 1
    total += buku[i].harga * buku[i].stok; // Mengalikan harga dan stok buku ke-i, lalu menambahkannya ke total
  } // Menutup blok perulangan for
  return total; // Mengembalikan hasil akhir total nilai aset ke pemanggil fungsi
} 

let jumlahBukuHabis = 0; // Membuat variabel penghitung jumlah judul buku dengan stok 0, diawali dari 0

// 2 & 3. Perulangan forEach + percabangan if...else untuk mencetak status stok
daftarBuku.forEach((item, index) => { // Menjalankan fungsi callback untuk tiap elemen (item) dan posisinya (index) di array
  let status = ""; // Menyiapkan variabel string kosong untuk menyimpan keterangan status stok

  if (item.stok > 0) { // Mengecek apakah stok buku saat ini lebih dari 0
    status = "(Tersedia)"; // Jika benar (stok > 0), beri status "(Tersedia)"
  } else { // Jika kondisi if tidak terpenuhi (artinya stok <= 0, yaitu 0)
    status = "(Habis)"; // Beri status "(Habis)"
    jumlahBukuHabis++; // 5. Hitung judul buku yang stoknya habis (menambah nilai jumlahBukuHabis sebanyak 1)
  } // Menutup blok percabangan if...else

  console.log(`${index + 1}. ${item.judul} - Rp${item.harga} - Stok: ${item.stok} ${status}`); // Mencetak nomor urut (index + 1), judul, harga, stok, dan status ke console
}); 

// Cetak total nilai aset dan jumlah buku habis ke console
const totalAset = hitungTotalAset(daftarBuku); // Memanggil hitungTotalAset dengan argumen daftarBuku dan menyimpan hasilnya ke totalAset
console.log(`Total nilai aset: Rp${totalAset}`); // Mencetak total nilai aset ke console
console.log(`Jumlah buku habis: ${jumlahBukuHabis}`); // Mencetak total jumlah buku yang stoknya habis ke console