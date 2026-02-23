function hitung(a, b, pilihan) {
    let hasil;

    switch (pilihan) {
        case "1":
            hasil = a + b;
            break;

        case "2":
            hasil = a - b;
            break;

        case "3":
            hasil = a * b;
            break;

        case "4":
            if (b === 0) {
                return "Error: Tidak bisa dibagi dengan nol!";
            }
            hasil = a / b;
            break;

        default:
            return "Menu tidak valid!";
    }

    return hasil;
}

module.exports = hitung;
