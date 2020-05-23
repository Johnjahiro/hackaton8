Algoritmo focos
	Definir numfocos, numFocosVerdes, numFocosBlancos, numFocosRojos Como Entero
	numFocosVerdes = 0
	numFocosBlancos = 0
	numFocosRojos = 0
	colorFoco = ""
	
	Escribir "Cuantos focos hay?"
	Leer numFocos
	
	Para i <- 1 Hasta numFocos Con Paso 1 Hacer 
		Escribir "Ingrese el color del foco #", i
		Leer colorFoco
		
		si colorFoco == "verde" Entonces
			numFocosVerdes = numFocosVerdes + 1
		sino si colorFoco == "blanco" Entonces
				numFocosBlancos = numFocosBlancos + 1
			SiNo
				numFocosRojos = numFocosRojos + 1
			FinSi
			
		FinSi
	FinPara
	Imprimir "Numero de focos verdes: ", numFocosVerdes
	Imprimir "Numero de focos blancos: ", numFocosBlancos
	Imprimir "Numero de focos rojos: ", numFocosRojos
FinAlgoritmo
