var edad = 24;
function calcular(edad){	
	if(edad < 18 ){
			return console.log("Es menor de edad!");
       }else if (edad >= 18 && edad < 60){
			return console.log("Es mayor de edad!");
       }else{
		return console.log("Esta en la tercera edad!");
	}
}


var balance = 1000;
var balance2 = 0;

function imprimirBalance(balance){
	// Imprimir balance
	console.info("Tienes: $" + window.balance);
}

function retirarDinero(dinero){
	// Solo puede retirar dinero si es menor que el balance
	if(balance > 0){
		window.balance -= dinero;
		console.log("Has retirado: $" + dinero + ", tu balance es: $" + window.balance);
	}
}

function transferir(balance, dinero, balance2) { 
	// transferir balance a otro balance2   
    if(window.balance > 0){
		window.balance2 = window.balance2 + dinero;
		window.balance -= dinero;
		console.log("Valor transferido: $" + dinero);
		console.log("Tu balance actual es: $" + window.balance);
	}
}

function imprimirBalance2(balance2) {
	// Imprimir el balance2
	console.info("El valor de balance2 es: $" + window.balance2);
}

function retirarTodoMiDinero(balance) {
		// Retirar de 100 en 100
		while(window.balance > 0){
			window.balance -= 100;
			console.log("Has retirado: $100, tu balance es:$" + window.balance);
		}	
 }


 
