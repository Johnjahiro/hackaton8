Algoritmo promedio
	Definir nota1,nota2,nota3 Como Entero
	Definir result Como Real
	
	Escribir "Nota 1: "
	Leer nota1
	Escribir "Nota 2: "
	Leer nota2
	Escribir "Nota 3: "
	Leer nota3
	
	prom(nota1, nota2, nota3)
	
FinAlgoritmo

Funcion prom(nota1, nota2, nota3)
	
	result = (nota1 + nota2 + nota3)/3
	
	Imprimir "El promedio de las notas es: ", result
FinFuncion
