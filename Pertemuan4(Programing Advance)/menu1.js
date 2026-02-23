const readline = require('readline');
const hitung = require('./rumus1');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function tampilMenu() {
    console.log("\n=== KALKULATOR SEDERHANA ===");
    console.log("1. Penjumlahan (+)");
    console.log("2. Pengurangan (-)");
    console.log("3. Perkalian (*)");
    console.log("4. Pembagian (/)");
    console.log("0. Keluar");
}

function mulai() {
    tampilMenu();

    rl.question("Pilih menu: ", (menu) => {

        if (menu === "0") {
            console.log("Terima kasih 🙏");
            rl.close();
            return;
        }

        rl.question("Masukkan angka pertama: ", (a) => {
            rl.question("Masukkan angka kedua: ", (b) => {

                const angka1 = parseFloat(a);
                const angka2 = parseFloat(b);

                // VALIDASI INPUT
                if (isNaN(angka1) || isNaN(angka2)) {
                    console.log("Error: Input harus berupa angka!");
                    mulai();
                    return;
                }

                const hasil = hitung(angka1, angka2, menu);

                console.log("Hasil:", hasil);

                // LOOP LAGI
                mulai();
            });
        });
    });
}

// Jalankan program
mulai();
