
function valFormulario() {
    const input = document.getElementById("num").value;

    // Verificar que tenga exactamente 8 caracteres
    if (input.length !== 8) {
        alert("SE DEBEN INGRESAR SOLO 8 DIGITOS.");
        return false;
    }

    // Verificar que inicie con "2084" o "2484"
    if (!input.startsWith("2084") && !input.startsWith("2184")&& !input.startsWith("2284") && !input.startsWith("2384")&& !input.startsWith("2484")) {
        alert("Los primeros 4 dígitos deben ser '2084' a '2484'.");
        return false;
    }

    // Verificar que sean solo números
    if (!/^\d+$/.test(input)) {
        alert("Solo se permiten números.");
        return false;
    }

    alert("Formulario enviado correctamente");
    return true;
}

