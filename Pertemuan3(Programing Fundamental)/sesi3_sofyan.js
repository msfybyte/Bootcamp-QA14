const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin, // Mengambil input
    output: process.stdout  // Menampilkan output
});

rl.question("Masukkan tinggi segitiga: ", (tinggi) => {  // Awal pengambilan inputan
    console.log("\nSegitiga Naik:");
    for (let i = 1; i <= tinggi; i++) { // i untuk pengaturan baris
        let baris = " ";
        for (let j = 1; j <= i; j++) {  // j untuk pengaturan isi baris
            baris += "*";  // += Penambahan String
        }
        console.log(baris);  //Cetak output dari pemanggilan baris
    }

    console.log("\nSegitiga Terbalik:");
    for (let i = tinggi; i >= 1; i--) {
        let baris = " ";
        for (let j = 1; j <= i; j++) {
            baris += "*";
        }
        console.log(baris);
    }

console.log("\nPiramida:");
    for (let i = 1; i <= tinggi; i++) {
        let spasi = " ".repeat(tinggi - i);  // Repeat adalah pemanggilan pengulangan
        let bintang = "*".repeat(2 * i -1 );
        console.log(spasi + bintang );  // Cetak output dari pemanggilan spasi dan bintang
    }
    
    console.log("\nPiramid Terbalik:");
    for (let i = tinggi; i >= 1; i--) {
    let spasi = " ".repeat(tinggi - i);
    let bintang = "*".repeat(2 * i - 1);
    console.log(spasi + bintang);
    }

    rl.close();  // Mengakhiri inputan atau menghentikan program
});
