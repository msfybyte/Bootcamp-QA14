const readline = require('readline');
const hitung = require('./rumus2');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("=== KALKULATOR SEDERHANA ===");
console.log("Pilih Operator: +  -  *  /");

rl.question("Masukkan angka pertama: ", (a) => {
    rl.question("Masukkan operator: ", (op) => {
        rl.question("Masukkan angka kedua: ", (b) => {

            const angka1 = parseFloat(a);
            const angka2 = parseFloat(b);

            const hasil = hitung(angka1, angka2, op);

            console.log("Hasil:", hasil);

            rl.close();
        });
    });
});