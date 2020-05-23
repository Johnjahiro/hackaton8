/* EJERCICIO 1 */

/*let n1, n2, resultado

n1 = Number(prompt("Ingrese numero 1: "))
    n2 = Number(prompt("Ingrese numero 2: "))

function suma(n1, n2) {
    resultado = n1 + n2
    alert("La suma es: " + resultado)
}
    suma(n1,n2)*/

/* EJERCICIO 2 */

/*let nota1, nota2, nota3
nota1 = Number(prompt("Nota 1: "))
nota2 = Number(prompt("Nota 2: "))
nota3 = Number(prompt("Nota 3: "))

function promedio(nota1, nota2, nota3) {
    result = (nota1 + nota2 + nota3)/3
    
    alert("El promedio de las notas es: " + result)
}
    promedio(nota1, nota2, nota3)*/

/* EJERCICIO 3 */

/*let base, altura
base = Number(prompt("Base: "))
altura = Number(prompt("Altura: "))

function areaRectangulo(base, altura) {
    area = base*altura

    return alert("El area del rectangulo es: " + area)
}
    areaRectangulo(base, altura)*/

/* EJERCICIO 4 */

/*let base, altura
base = Number(prompt("Base: "))
altura = Number(prompt("Altura: "))

function areaTriangulo(base, altura) {
    area = (base*altura)/2

    return alert("El area del triangulo es: " + area)
}
    areaTriangulo(base,altura)*/

/* EJERCICIO 5 */

/*let radio
const PI = 3.1416
radio = Number(prompt("Radio del circulo: "))    

function areaCirculo(radio) {
    area = PI*(Math.pow(radio,2))

    return alert("El area del circulo es: " + area)
}
    areaCirculo(radio)*/

/* EJERCICIO 6 */

/*let horasDiarias, pagoxhora;
const numDias = 5;
let neto;
horasDiarias = Number(prompt("Cantidad de horas diarias trabajadas: "));
pagoxhora = Number(prompt("Pago por hora: "));

function sueldo(horasDiarias, pagoxhora) {
  neto = horasDiarias * pagoxhora * numDias;

  alert("Tu sueldo de lunes a viernes es: " + neto);
}
sueldo(horasDiarias,pagoxhora);*/

/* EJERCICIO 7 */

/*let cantidadTela, pulgadas;
// 1 metro <> 39.3701

cantidadTela = Number(prompt("Cuantos metros de tela requiere? "));

function convertirMetros(cantidadTela) {
  pulgadas = cantidadTela * 39.3701;

  alert("Su cantidad de tela en pulgadas es: " + pulgadas);
}
convertirMetros(cantidadTela);*/

/* EJERCICIO 8 */

/*let cantSoles, cantDolares
let dolar = 3.43

cantSoles = Number(prompt("Con cuantos nuevos soles (S./) cuenta? "))

function dolares(cantSoles) {
    
    cantDolares = cantSoles * dolar

    alert("En dolares ($) usted cuenta con: " + cantDolares)
}

    dolares(cantSoles)*/

/* EJERCICIO 9 */

/*let anioNacimiento, edad;
const anioActual = 2020;

anioNacimiento = Number(prompt("En qué año naciste? "));

edad = anioActual - anioNacimiento;

alert("El solicitante tiene " + edad + " años");*/

/* EJERCICIO 10 */

/*let user1, user2, user3, edad1, edad2, edad3;

user1 = prompt("Nombre de user-1");
edad1 = Number(prompt("Edad de user-1"));
user2 = prompt("Nombre de user-2");
edad2 = Number(prompt("Edad de user-2"));
user3 = prompt("Nombre de user-3");
edad3 = Number(prompt("Edad de user-3"));

if(edad1 < edad2 && edad1 < edad3 ){
    alert("La menor edad pertenece a " + user1 + " con " + edad1)
}else if(edad2 < edad1 && edad2 < edad3) {
    alert("La menor edad pertenece a " + user2 + " con " + edad2)
}else {
    alert("La menor edad pertenece a " + user3 + " con " + edad3)
}*/

/* EJERCICIO 11 */

/*let cantAnios;

cantAnios = Number(prompt("Cuanto años lleva trabajando?"));
    
  switch (cantAnios) {
    case 1:
      alert("A usted le corresponde un bono de $" + 100);
      break;
    case 2:
      alert("A usted le corresponde un bono de $" + 200);
      break;
    case 3:
      alert("A usted le corresponde un bono de $" + 300);
      break;
    case 4:
      alert("A usted le corresponde un bono de $" + 400);
      break;
    case 5:
      alert("A usted le corresponde un bono de $" + 500);
      break;
    default:
      alert("A usted le corresponde un bono de $" + 1000);
      break;
  }  */

/* EJERCICIO 12 */

/*let saldoInicial = 1500

  for(let i=1; i<=6; i++) {
    alert("Año #"+ i + " - Salario: " + Math.trunc(saldoInicial*100)/100)
    saldoInicial = saldoInicial * 1.1
  }*/


/* EJERCICIO 13 */

/*let numAlumnos, nota = 0, aprobados = 0, desaprobados = 0

    numAlumnos = Number(prompt("Cantidad de alumnos a evaluar: "))

    for (let i = 1; i <= numAlumnos; i++) {
        nota = Number(prompt("Ingrese nota del alumno #" + i))
        
        if(nota >= 11) {
            aprobados++
        }else {
            desaprobados++
        }
    }

    alert("La cantidad de alumnos aprobados es: " + aprobados)
    alert("La cantidad de alumnos desaprobados es: " + desaprobados)*/

/* EJERCICIO 14 */

/*let numFocos, colorFoco = "", numFocosVerdes = 0, numFocosblancos = 0, numFocosRojos = 0

    numFocos = Number(prompt("Cuantos focos hay?"))

    for(let i = 1; i <= numFocos; i++) {
        colorFoco = prompt("Ingrese el color del foco #: " + i)

        if(colorFoco == "verde") {
            numFocosVerdes++
        }else if(colorFoco == "blanco") {
            numFocosblancos++
        }else if(colorFoco == "rojo"){
            numFocosRojos++
        }
    }

    alert("Numero de focos verdes: " + numFocosVerdes)
    alert("Numero de focos blancos: " + numFocosblancos)
    alert("Numero de focos rojos: " + numFocosRojos)*/

/* EJERCICIO 15 */

/*let edad

edad = Number(prompt("Ingrese su edad: "))

        if(edad >= 18) {
            alert("Usted es aptop para votar")
        }else {
            alert("Usted no es aptop para votar")
        }
    
*/
