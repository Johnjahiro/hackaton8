Algoritmo tela
	Definir cantidadTela Como Entero
	Definir pulgadas Como Real
		
	Escribir "Cuantos metros de tela requiere? "
	Leer cantidadTela	
	
	convertirMetros(cantidadTela)
	
FinAlgoritmo

Funcion convertirMetros(cantidadTela)
	pulgadas = cantidadTela * 39.3701;
	
	Imprimir "Su cantidad de tela en pulgadas es: ", pulgadas
FinFuncion
