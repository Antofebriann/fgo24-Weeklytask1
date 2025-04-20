```mermaid
flowchart TD
    A((Mulai Program)) --> B[/Menu Utama<br>1. Pilih Menu<br>2. Lihat Keranjang<br>3. Checkout<br>Ketik 'selesai' untuk keluar/]

    %% --- Pilih Menu Jalur ---
    B --> |1| C{Pilih Kategori<br>0. Kembali<br>1. Makanan<br>2. Minuman<br>3. Snack<br>4. Dessert}
    C --> |0| B
    C --> |1-4| D[Tampilkan Daftar Menu Sesuai Kategori]
    D --> E[Pilih Nomor Menu<br>atau 'kembali']
    E --> |nomor valid| F[Konfirmasi: Yakin pilih item?<br>Harga Rp...<br>'ya' / 'tidak' / 'kembali']
    E --> |kembali| C
    F --> |ya| G[Tambahkan ke Keranjang] --> B
    F --> |tidak| B
    F --> |kembali| C

    %% --- Lihat Keranjang Jalur ---
    B --> |2| X[Lihat Isi Keranjang<br>Ketik 'kembali' untuk ke menu utama]
    X --> B

    %% --- Checkout Jalur ---
    B --> |3| Y[/Checkout dan Tampilkan Ringkasan Pesanan/] --> Z(((Selesai)))
    
    %% --- Keluar Langsung ---
    B --> |selesai| Z
