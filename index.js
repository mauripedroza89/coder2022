
let hours = [
    a = Number(prompt("Ingrese horas de estudio de semana 1")),
    b = Number(prompt("Ingrese horas de estudio de semana 2")),
    c = Number(prompt("Ingrese horas de estudio de semana 3")),
    d = Number(prompt("Ingrese horas de estudio de semana 4")),
    e = Number(prompt("Ingrese horas de estudio de semana 5")),
]

//Iteramos sobre las horas ingresadas
let sum = 0;
for (let i= 0; i < hours.length; i++){ 
    sum += parseInt(hours[i]);
    
}

//Si las horas semanales son menores a 30, se deben estudiar mas horas, 
// y si son mayores, nos arroja la cantida de horas estudiadas
while (sum != "ESC"){
    
    if (sum > 30){
        alert(`Felicidades!
Usted ha estudiado un total de ${sum} en este curso.`)
       
        break;
    }else{
        alert("Debe estudiar mas de 30 horas");
        break;
    }

   
}









