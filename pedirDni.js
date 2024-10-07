function obtenerLetraDNI(dni) {
    switch (dni % 23) {
        case 0: return 'T';
        case 1: return 'R';
        case 2: return 'W';
        case 3: return 'A';
        case 4: return 'G';
        case 5: return 'M';
        case 6: return 'Y';
        case 7: return 'F';
        case 8: return 'P';
        case 9: return 'D';
        case 10: return 'X';
        case 11: return 'B';
        case 12: return 'N';
        case 13: return 'J';
        case 14: return 'Z';
        case 15: return 'S';
        case 16: return 'Q';
        case 17: return 'V';
        case 18: return 'H';
        case 19: return 'L';
        case 20: return 'C';
        case 21: return 'K';
        case 22: return 'E';
        default: return ''; // No debería llegar aquí
    }
}

function verificarDNI() {
    // Pedimos al usuario que introduzca su DNI
    let input = prompt("Introduce tu DNI (número seguido de letra, por ejemplo: 12345678Z):");

    if (!input || input.length !== 9) {
        alert("Formato incorrecto. Asegúrate de que el DNI tenga 8 números y una letra.");
        return;
    }

    // Separar número y letra
    const numeroDNI = input.slice(0, 8);
    const letraDNI = input.charAt(8).toUpperCase();

    // Verificamos si el número es válido
    if (isNaN(numeroDNI) || numeroDNI.length !== 8) {
        alert("El número del DNI debe ser un número de 8 dígitos.");
        return;
    }

    // Calcular la letra correcta
    const letraCorrecta = obtenerLetraDNI(parseInt(numeroDNI, 10));

    // Comparar la letra introducida con la letra correcta
    if (letraDNI === letraCorrecta) {
        alert("La letra es correcta.");
    } else {
        alert(`La letra es incorrecta. La letra correcta para el DNI ${numeroDNI} es ${letraCorrecta}.`);
    }
}

// Ejecutar la función al cargar la página
window.onload = verificarDNI;