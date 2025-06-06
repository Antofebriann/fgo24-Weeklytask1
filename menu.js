const menu = [
    { kategori: 'makanan', nama: 'Nasi Goreng', harga: 15000 },
    { kategori: 'makanan', nama: 'Mie Ayam', harga: 12000 },
    { kategori: 'minuman', nama: 'Es Teh', harga: 5000 },
    { kategori: 'minuman', nama: 'Kopi Hitam', harga: 8000 },
    { kategori: 'snack', nama: 'Kentang Goreng', harga: 10000 },
    { kategori: 'snack', nama: 'Risoles', harga: 7000 },
    { kategori: 'dessert', nama: 'Puding Cokelat', harga: 9000 },
    { kategori: 'dessert', nama: 'Es Krim', harga: 11000 },
  ];
  
  let keranjang = [];
  
  let state = 'menuUtama';
  let kategoriDipilih = '';
  let daftarMenuAktif = [];
  let itemDipilih = null;
  
  console.log("=== Selamat Datang di Warung Mina ===");
  tampilkanMenuUtama();
  
  process.stdin.setEncoding('utf-8');
  process.stdin.on('data', (input) => {
    const jawaban = input.trim().toLowerCase();
  
    if (jawaban === 'selesai') return checkout();
    if (jawaban === 'kembali') return tampilkanMenuUtama();
  
    switch (state) {
      case 'menuUtama':
        if (jawaban === '1') {
          state = 'kategori';
          tampilkanKategori();
        } else if (jawaban === '2') {
          tampilkanKeranjang();
        } else if (jawaban === '3') {
          checkout();
        } else {
          console.log("Masukkan tidak valid. Pilih 1, 2, atau 3.");
        }
        break;
  
      case 'kategori':
        switch (jawaban) {
          case '0':
            tampilkanMenuUtama();
            break;
          case '1':
            pilihKategori('makanan');
            break;
          case '2':
            pilihKategori('minuman');
            break;
          case '3':
            pilihKategori('snack');
            break;
          case '4':
            pilihKategori('dessert');
            break;
          default:
            console.log("Pilih angka 0-4.");
        }
        break;
  
      case 'pilihMenu':
        const nomor = parseInt(jawaban);
        if (isNaN(nomor) || nomor < 1 || nomor > daftarMenuAktif.length) {
          console.log("Nomor tidak valid.");
          return;
        }
        itemDipilih = daftarMenuAktif[nomor - 1];
        console.log(`\nYakin pilih ${itemDipilih.nama}? Harga: Rp${itemDipilih.harga}`);
        console.log("Ketik 'ya' untuk konfirmasi, 'tidak' untuk batal, atau 'kembali'.");
        state = 'konfirmasiPesanan';
        break;
  
      case 'konfirmasiPesanan':
        if (jawaban === 'ya') {
          keranjang.push({ ...itemDipilih });
          console.log(`${itemDipilih.nama} ditambahkan ke keranjang.\n`);
          tampilkanMenuUtama();
        } else if (jawaban === 'tidak') {
          console.log(" Batal pilih.\n");
          tampilkanMenuUtama();
        } else {
          console.log("Masukkan tidak valid. Ketik 'ya', 'tidak', atau 'kembali'.");
        }
        break;
    }
  });
  
  function tampilkanMenuUtama() {
    state = 'menuUtama';
    console.log("\n=== Menu Utama ===");
    console.log("1. Pilih Menu");
    console.log("2. Lihat Keranjang");
    console.log("3. Checkout");
    console.log("Ketik 'selesai' untuk keluar.\n");
  }
  
  function tampilkanKategori() {
    console.log("\n=== Pilih Kategori ===");
    console.log("0. Kembali ke Menu Utama");
    console.log("1. Makanan");
    console.log("2. Minuman");
    console.log("3. Snack");
    console.log("4. Dessert");
  }
  
  function pilihKategori(kat) {
    kategoriDipilih = kat;
    daftarMenuAktif = menu.filter(m => m.kategori === kategoriDipilih);
    if (daftarMenuAktif.length === 0) {
      console.log("Belum ada menu dalam kategori ini.");
      tampilkanMenuUtama();
      return;
    }
    console.log(`\n=== Menu ${kategoriDipilih.toUpperCase()} ===`);
    daftarMenuAktif.forEach((item, i) => {
      console.log(`${i + 1}. ${item.nama} - Rp${item.harga}`);
    });
    console.log("Pilih nomor menu atau ketik 'kembali'.");
    state = 'pilihMenu';
  }
  
  function tampilkanKeranjang() {
    console.log("\n=== Isi Keranjang ===");
    if (keranjang.length === 0) {
      console.log("Keranjang masih kosong.");
    } else {
      let total = 0;
      keranjang.forEach((item, i) => {
        console.log(`${i + 1}. ${item.nama} - Rp${item.harga}`);
        total += item.harga;
      });
      console.log(`Total sementara: Rp${total}`);
    }
    console.log("\nKetik 'kembali' untuk ke menu utama.");
    state = 'menuUtama';
  }
  
  function checkout() {
    console.log("\n=== Checkout ===");
    if (keranjang.length === 0) {
      console.log("Keranjang kosong. Tidak ada yang dipesan.");
    } else {
      let total = 0;
      keranjang.forEach((item, i) => {
        console.log(`${i + 1}. ${item.nama} - Rp${item.harga}`);
        total += item.harga;
      });
      console.log(`\nTotal yang harus dibayar: Rp${total}`);
      console.log("Terima kasih telah memesan!");
    }
    process.exit();
  }
  