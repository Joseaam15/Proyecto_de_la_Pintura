var dimension1=prompt("Ingrese el ancho de la Primera pared");
var dimension2 = prompt("Ingrese el alto de la Primera pared");
var dimension3 = prompt("Ingrese la ancho de la Segunda pared");
var dimension4 = prompt("Ingrese la alto de la Segunda Pared");
var dimension5=prompt("Ingrese el Ancho de la Tercera pared");
var dimension6=prompt("Ingrese la altura de la Tercera Pared");
var dimension7=prompt("Ingrese el ancho de la cuarta pared");
var dimension8=prompt("Ingrese la altura de la cuarta pared");
var puerta= prompt("El area de trabajo cuenta con puerta?", "Si o No");
if (puerta==si){
    var puerta2=prompt("Ingrese el area de la puerta");
}if(puerta==no);{
    alert("Ingrese los Datos que faltan");
}

var ventana=prompt("Tiene ventanas el area de trabajo?", "si o no");
if(ventana==si){
    var ventana2=prompt("Ingrese el area de la ventana");
}if(ventana==no);{
    alert("Ingrese los datos faltantes");
}


var suma_areas1 = parseInt(dimension1) * parseInt(dimension2) - parseInt(puerta2)-parseInt(ventana2);
var suma_areas2 = parseInt(dimension3) * parseInt(dimension4) - parseInt(puerta2) - parseInt(ventana2);
var suma_areas3 = parseInt(dimension5) * parseInt(dimension6) - parseInt(puerta2) - parseInt(ventana2);
var suma_areas4 = parseInt(dimension7) * parseInt(dimension8) - parseInt(puerta2) - parseInt(ventana2);


/*var areas=parseInt(suma_areas1)-parseInt(ventana2)-parseInt(puerta2);
var areas2 = parseInt(suma_areas2) - parseInt(ventana2) - parseInt(puerta2);
var areas3 = parseInt(suma_areas3) - parseInt(ventana2) - parseInt(puerta2);
var areas4 = parseInt(suma_areas4) - parseInt(ventana2) - parseInt(puerta2);* */

var sumaTotal=parseInt(suma_areas1)+parseInt(suma_areas2)+parseInt(suma_areas3)+parseInt(suma_areas4);
Document.write("El area a pintar es de " + sumaTotal);

if(sumaTotal=>13){
    alert("Necesita un litro de Pintura de aceite");
}if(sumaTotal0=>10){
    alert("Ncesesita un litro de pintura  Agua");
}if(sumaTotal=>12){
    alert("Necesita un litro de pintura oleo");
}

var PinturaTipo=prompt("Escoja una de las  tres opciones oleo,agua,aceite", "1 es oleo, 2 es agua, 3 es aceite");
switch (sumaTotal1) {
    case 1:
        var sumaTotal1=parseInt(sumaTotal1)/parseInt(12)
        document.write("Son de pintura" + sumaTotal1);
        break;
case 2:
        var sumaTotal1=parseInt(sumaTotal1)/parseInt(10);
        document.write("Son de pintura" + sumaTotal1);
case 3:
var sumaTotal1=parseInt(sumaTotal1)/parseInt(13);
        document.write("Son de pintura" + sumaTotal1);

    default:
        break;
}

var tipos=("cuantos galones desea")
switch (sumaTotal1) {
    case 1:
        var sumaTotal1=parseInt(sumaTotal1)/parseInt(12)
        document.write("Son de pintura" + sumaTotal1);
        break;
case 2:
        var sumaTotal1=parseInt(sumaTotal1)/parseInt(10);
        document.write("Son de pintura" + sumaTotal1);
case 3:
var sumaTotal1=parseInt(sumaTotal1)/parseInt(13);
        document.write("Son de pintura" + sumaTotal1);

    default:
        break;
}
