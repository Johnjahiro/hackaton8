Algoritmo tela
	Definir horasDiarias, pagoxhora, neto Como Entero	
		
	Escribir "Cantidad de horas diarias trabajadas: "
	Leer horasDiarias	
	Escribir "Pago por hora: "
	Leer pagoxhora	
	
	sueldo(horasDiarias,pagoxhora)
	
FinAlgoritmo

Funcion sueldo(horasDiarias,pagoxhora)
	numDias = 5
	
	neto = horasDiarias * pagoxhora * numDias;
	
	Imprimir "Tu sueldo de lunes a viernes es: ", neto
FinFuncion
