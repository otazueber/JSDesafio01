let user = "Eber";
let pass = "1234";

function loguear() {
    let loguado = false;
    let salir = false;
    while ((!loguado) & (!salir)) {
        let aux;
        aux = prompt("Ingrese el nombre de usuario");
        if (aux === user) {
            aux = prompt("Ingrese la contraseña");
            if (aux === pass) {
                loguado = true;
            }
            else if (aux === null) {
                salir = true;
            }
            else {
                alert("Contraseña incorrecta");
            }
        }
        else if (aux === null) {
            salir = true;
        }
        else {
            alert("No existe el usuario: " + aux);
        }
    }
    return loguado;
}

function pedirCantidad() {
    let aux = parseFloat(prompt("Ingrese la cantidad en kilos"));
    if (aux == NaN) {
        aux = 0;
    }
    return aux;
}

if (loguear()) {
    let seguirComprado = true;
    let vacio = 0;
    let entrania = 0;
    let tapaDeAsado = 0;
    let matambre = 0;
    let auxProducto = "";
    let auxCantidad = 0;
    let tieneProductos = false;
    let total = 0;

    while (seguirComprado) {
        auxProducto = prompt("Elija un producto: \n1 - Vacío ($ 1.550,00)\n2 - Entraña ($ 2.190,00)\n3 - Tapa de asado ($1.150,00)\n4 - Matambre ($1.290,00)\n5 - Finalizar");
        if ((auxProducto == "1") || (auxProducto == "2") || (auxProducto == "3") || (auxProducto == "4")) {
            auxCantidad = pedirCantidad();
            if (auxCantidad > 0) {
                switch (auxProducto) {
                    case "1":
                        vacio = vacio + auxCantidad;
                        total = total + auxCantidad * 1550;
                        break;
                    case "2":
                        entrania = entrania + auxCantidad;
                        total = total + auxCantidad * 2190;
                        break;
                    case "3":
                        tapaDeAsado = tapaDeAsado + auxCantidad;
                        total = total + auxCantidad * 1150;
                        break;
                    case "4":
                        matambre = matambre + auxCantidad;
                        total = total + auxCantidad * 1290;
                        break;
                }
                tieneProductos = tieneProductos || ((auxCantidad > 0));
            }
        } else if (auxProducto == "5") {
            seguirComprado = false;
        }
    }
    if (tieneProductos)
    {
        alert("Gracias por su pedido, el total a abonar es: " + total);
    }

}