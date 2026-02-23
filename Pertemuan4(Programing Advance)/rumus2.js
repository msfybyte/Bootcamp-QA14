function hitung(angka1, angka2, operator) {
    let hasil;

    switch (operator) {
        case '+':
            hasil = angka1 + angka2;
            break;

        case '-':
            hasil = angka1 - angka2;
            break;

        case '*':
            hasil = angka1 * angka2;
            break;

        case '/':
            if (angka2 === 0) {
                return "Error: Tidak bisa dibagi dengan nol!";
            }
            hasil = angka1 / angka2;
            break;

        default:
            return "Operator tidak valid!";
    }

    return hasil;
}

module.exports = hitung;