//Declaración de variables
var nombreUsuario = "Romina Bordenave";
var saldoCuenta = 3000;
var limiteExtraccion = 2000;


//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}

//Creo funciones

function sumarDinero (dinero) {
	saldoCuenta = saldoCuenta + dinero;
}

function restarDinero(dinero) {
	saldoCuenta = saldoCuenta - dinero;
}

//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
	var nuevoLimiteExtraccion = parseInt(prompt("Ingrese el nuevo límite de extracción"));

	limiteExtraccion = nuevoLimiteExtraccion;
	actualizarLimiteEnPantalla();
	alert("Modificaste el límite de extracción a $ " + limiteExtraccion);

}

function extraerDinero() {
	var dineroAExtraer = parseInt(prompt("Ingrese el dinero que desea extraer"));
	var saldoAnterior = saldoCuenta;

	if()

	restarDinero(dineroAExtraer);
	actualizarSaldoEnPantalla();
	alert("Has retirado: $ "+ dineroAExtraer + "\n Saldo anterior: $ "+ saldoAnterior + "\n Saldo actual: $ " + saldoCuenta);
}

function depositarDinero() {
	var dineroDepositado = parseInt(prompt("Ingrese el dinero que desea depositar"));
	var saldoAnterior = saldoCuenta;

	sumarDinero(dineroDepositado);
	actualizarSaldoEnPantalla();
	alert("Has depositado: $ "+ dineroDepositado + "\n Saldo anterior: $ "+ saldoAnterior + "\n Saldo actual: $ " + saldoCuenta);

}

function pagarServicio() {

}

function transferirDinero() {

}

function iniciarSesion() {

}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}