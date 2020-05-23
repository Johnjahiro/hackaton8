Algoritmo jalados
	Definir numAlumnos, nota, aprobados, desaprobados Como Entero
	nota = 0
	aprobados = 0
	desaprobados = 0	
	
	Escribir "Cantidad de alumnos a evaluar: "
	Leer numAlumnos
	
	Para i <- 1 Hasta numAlumnos Con Paso 1 Hacer 
		Escribir "Ingrese nota del alumno #", i
		Leer nota
		
		si nota >= 11 Entonces
			aprobados = aprobados + 1
		SiNo
			desaprobados = desaprobados + 1
		FinSi
					
	FinPara
	
		Imprimir "La cantidad de alumnos aprobados es: ", aprobados
		Imprimir "La cantidad de alumnos desaprobados es: ", desaprobados
FinAlgoritmo
