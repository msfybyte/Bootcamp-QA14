const readline = require("readline");

// Input dari user
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan tinggi segitiga: ", function (input) {

    const tinggi = parseInt(input);

    console.log("\n=== SEGITIGA SIKU KIRI ===");
    for (let i = 1; i <= tinggi; i++) {
        console.log("*".repeat(i));
    }

    console.log("\n=== SEGITIGA SIKU KIRI TERBALIK ===");
    for (let i = tinggi; i >= 1; i--) {
        console.log("*".repeat(i));
    }

    console.log("\n=== SEGITIGA SIKU KANAN ===");
    for (let i = 1; i <= tinggi; i++) {
        console.log(" ".repeat(tinggi - i) + "*".repeat(i));
    }

    console.log("\n=== SEGITIGA SIKU KANAN TERBALIK ===");
    for (let i = tinggi; i >= 1; i--) {
        console.log(" ".repeat(tinggi - i) + "*".repeat(i));
    }

    console.log("\n=== SEGITIGA PIRAMIDA ===");
    for (let i = 1; i <= tinggi; i++) {
        console.log(" ".repeat(tinggi - i) + "*".repeat(i * 2 - 1));
    }

    console.log("\n=== SEGITIGA PIRAMIDA TERBALIK ===");
    for (let i = tinggi; i >= 1; i--) {
        console.log(" ".repeat(tinggi - i) + "*".repeat(i * 2 - 1));
    }

    rl.close();
});
