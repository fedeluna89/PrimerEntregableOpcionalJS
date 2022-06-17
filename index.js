let nombre = prompt("igresa tu nombre");
let apellido = prompt("ingresa tu apellido");
let edad = parseInt(prompt("ingresa tu edad"));

console.log(nombre);
console.log(apellido);
console.log(edad);

if(edad <= 17){
    alert("no poedes ingresar");
}else{
    alert("bienvenido/a");
}
