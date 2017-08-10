const calculadora = {
  valorBase: 0,
  sumar function (a,b){
  return a + b;
  };
  restar function (a,b){
  return a-b;
  };
}

console.log(calculadora.sumar(1,2));

function padre(){
  var x = 0;
  function hijo(){
    console.log(x);
  }
}
