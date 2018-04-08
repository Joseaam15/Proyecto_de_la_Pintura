var dimension1=prompt("Ingrese el ancho de la Primera pared");
var dimension2 = prompt("Ingrese el alto de la Primera pared");
var dimension3 = prompt("Ingrese la ancho de la Segunda pared");
var dimension4 = prompt("Ingrese la alto de la Segunda Pared");
var dimension5=prompt("Ingrese el Ancho de la Tercera pared");
var dimension6=prompt("Ingrese la altura de la Tercera Pared");
var dimension7=prompt("Ingrese el ancho de la cuarta pared");
var dimension8=prompt("Ingrese la altura de la cuarta pared");
var puerta= prompt("El area de trabajo cuenta con puerta?", "Si o No");
switch(puerta){
  case "si":
    var puerta1=prompt("ingrese el area de la puerta");
    break;
    
 case "no" :
    alert("continua con los demas requisitos");
break;
}


var ventana=prompt("El area de trabajo cuenta con ventana" , "si o no");

switch(ventana){
  case "si" :
    var ventana1=prompt("ingrese el area de la ventana");

    break;
    
    
  case "no" :
    alert("continue con los demas requisitos");
    break;
 }

document.write(puerta1);
document.write(ventana1);

var suma_areas1 = dimension1*dimension2;
console.log(suma_areas1);
var suma_areas2 = dimension3*dimension4;
console.log(suma_areas2);
var suma_areas3 = dimension5*dimension6;
console.log(suma_areas3);
var suma_areas4 = dimension7*dimension8;
console.log(suma_areas4);

var ventana2=prompt("Ingrese  el area de la puerta que se le genero" , "Que obtuvo en el resultado");
var puerta2=prompt("Ingrese el area de la ventana que se le genero", "Que obtuvo en el resultado");

var resta1=suma_areas1-ventana2;
console.log(resta1);
var resta2=suma_areas2-ventana2;
console.log(resta2);
var resta3=suma_areas3-ventana2;
console.log(resta3);
var resta4=suma_areas4-ventana2;
console.log(resta4);

var resta5=resta1-puerta2;
console.log(resta5);
var resta6=resta2-puerta2;
console.log(resta6);
var resta7=resta3-puerta2;
console.log(resta7);
var resta8=resta4-puerta2;
console.log(resta8);

var sumadetodo=parseInt(resta5)+parseInt(resta6)+parseInt(resta7)+parseInt(resta8);
document.write(sumadetodo);

if(sumadetodo=>13){
  alert("Puede optar por cualquiera de las pintura");
}if(sumadetodo<=12){
  alert("Puede optar por oleo o agua");
}if(sumadetodo<=10){
  alert("puede optar solamente por agua");
};

var PinturaTipo=prompt("Escoja una de las  tres opciones oleo,agua,aceite", "1 es oleo, 2 es agua, 3 es aceite", "1 o 2 o 3");
console.log("su pintura es" + PinturaTipo);

var pinturadivision=prompt("1 oleo o 2 agua o 3 aceite", "escoja 1 o 2 o 3");
if(pinturadivision==1){
  alert("El total de la pintura es" + sumadetodo/12);
  console.log("El total de la pintura es" + sumadetodo/12);
}if(pinturadivision==2){
  alert("El total de pintura es" + sumadetodo/10);
  console.log("El total de la pintura es" + sumadetodo/10);
}if(pinturadivision==3){
  alert("El total de pintura es" + sumadetodo/13);
  console.log("El total de la pintura es" + sumadetodo/13);
}

var galon=prompt("Ingrese por favor los litros que le salieron anteriormente en la division");
alert("Dependiendo del numero que ingreso preguntele al cliente si desea 1/2 galon o galon o cubeta");

alert("Recuerde que al escoger 1/2 galon equivale a: 1.89 litros, 1 galon equivale a  3.78 y una cubeta equivale a 18.92");

var galon1=prompt("Ingrese el equivalente de lo que escogio el cliente", "Ejemplo si escogio galon ingresar 18.92");

if(galon1==1.89){
  alert("Su precio sera de: 386 si escoje pintura de oleo o 150 si escoge agua y si escoge aceite sera de 240");
}if(galon1==3.78){
  alert("Su precio sera de: 663 si escoje pintura de oleo o 250 si escoge agua y si escoge aceite sera de 432");
}if(galon1==18.92){
  alert("Su precio sera de: 3103 si escoje pintura de oleo o 999 si escoge agua y si escoge aceite sera de 1821");
}

var ofertas=prompt("Ingrese cuantos pruductos se llevara", "Solo numeros");
if(ofertas==5){
  alert("Felicidades estimado cliente por comprar 5 de nuestros productos el quinto le saldra gratis");

}

alert("Si el cliente comprara cubeta ingresarlas");

var ofertas2=prompt("Ingrese cuantas cubetas comprara" , "Solo numeros");
if(ofertas2==2){
  alert("Felicidades Estimado cliente usted obtiene un 10% de descuento al comprar dos cubetas");
}if(ofertas2==0){
  alert("Favor continuar con el procedimiento");
}

alert("Si el cliente comprara galones Ingresalos");

var ofertas3=prompt("Favor de ingresar la cantidad de galones" , "Solo numeros");
if(ofertas3==3){
  alert("Felicidades Estimado cliente usted obtiene un 5% de descuento por comprar 3 galones");
}if(ofertas3==0){
  alert("Favor de Ingresar los datos de la factura en el siguiente programa");
}