import { kalkulator } from './rumus.js';
import readline from 'readline';

// Membuat interface input terminal
const inputUser = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("=== KALKULATOR ===");
console.log("Operator tersedia: +  -  *  /");

// Input angka pertama
inputUser.question('Masukkan angka pertama: ', angka1 => {

    // Input angka kedua
    inputUser.question('Masukkan angka kedua: ', angka2 => {

        // Input operator
        inputUser.question('Masukkan operator (+, -, *, /): ', operator => {

            const num1 = parseFloat(angka1);
            const num2 = parseFloat(angka2);

            // VALIDASI ANGKA
            if (isNaN(num1) || isNaN(num2)) {
                console.log("Error: Input harus berupa angka!");
                inputUser.close();
                return;
            }

            const hasil = kalkulator(num1, num2, operator);

            console.log(`Hasil: ${hasil}`);

            inputUser.close();
        });

    });

});