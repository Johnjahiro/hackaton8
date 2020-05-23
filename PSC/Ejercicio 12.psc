Algoritmo salary
	Definir i Como Entero;
    Definir salario Como Real;
    saldoInicial = 1500;
	
    Para i<-1 Hasta 6 Con Paso 1 Hacer
        Imprimir "Año #", i, " - Salario: ", trunc(saldoInicial*100)/100;
        saldoInicial = saldoInicial * 1.1;
    FinPara
	
FinAlgoritmo
