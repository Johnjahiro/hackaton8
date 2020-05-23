Algoritmo edadMenor
	Definir user1, user2, user3 Como Caracter
	Definir  edad1, edad2, edad3 Como Entero
	
	Escribir "Nombre de user-1"
	Leer  user1
	Escribir "Edad de user-1"
	Leer edad1
	Escribir "Nombre de user-1"
	Leer  user2
	Escribir "Edad de user-1"
	Leer edad2
	Escribir "Nombre de user-1"
	Leer  user3
	Escribir "Edad de user-1"
	Leer edad3
	
	si edad1 < edad2 y edad1 < edad3 Entonces
		Escribir  "La menor edad pertenece a ",user1, " con ", edad1
	sino si edad2< edad1 y edad2 < edad3 entonces
			Escribir  "La menor edad pertenece a ",user2, " con ", edad2	
		SiNo
			Escribir  "La menor edad pertenece a ",user3, " con ", edad3
		FinSi			
	FinSi
	
FinAlgoritmo
