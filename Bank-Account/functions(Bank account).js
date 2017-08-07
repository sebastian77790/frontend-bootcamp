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
	console.info("Tienes: $" + balance);
}

function retirarDinero(dinero){
	// Solo puede retirar dinero si es menor que el balance
	if(balance > 0){
		balance -= dinero;
		console.log("Has retirado: $" + dinero + ", tu balance es: $" + balance);
	}
}

function transferir(balance, dinero, balance2) { 
	// transferir balance a otro balance2   
    if(balance > 0){
		balance2 = balance2 + dinero;
		balance -= dinero;
		console.log("Valor transferido: $" + dinero);
		console.log("Tu balance actual es: $" + balance);
	}
}

function imprimirBalance2(balance2) {
	// Imprimir el balance2
	console.info("El valor de balance2 es: $" + balance2);
}

function retirarTodoMiDinero(balance) {
		// Retirar de 100 en 100
		while(balance > 0){
			balance -= 100;
			console.log("Has retirado: $100, tu balance es:$" + balance);
		}	
 }


 
