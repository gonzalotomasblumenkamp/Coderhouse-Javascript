alert("bienvenido:las yerbas que tenemos en stock son: canarias- mañanita- serena- playadito");
const preguntaMate = prompt("que yerba desea comprar?");
const formaDePago = parseInt(prompt("indique forma de pago: 1-efectivo / 2-tarjeta de credito"));
const suma =  (productoPrecio,recargoTarjeta) => productoPrecio + recargoTarjeta;
let productoPrecio = 900;
let recargoTarjeta = 300;
let PrecioRecargo = suma(productoPrecio,recargoTarjeta);
if (formaDePago == 1){
    alert("el nombre del producto es " + preguntaMate + " el precio en efectivo es " + productoPrecio );
}
else if (formaDePago == 2){
    alert("el nombre del producto es " + preguntaMate + " el precio con tarjeta es " + PrecioRecargo );
}
else {
    alert(" opcion no disponible ")
}









    
     