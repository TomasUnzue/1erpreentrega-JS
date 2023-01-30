

//1er-preentrega-Js

//practicando : Simulador de reservas con if else 

let nombre = prompt ("Bienvenido a mi simulador de reservas, decime tu nombre:")

let saludoUser = "Hola"+ " " + nombre + "comencemos con la reserva :";

alert(saludoUser);

let calculo =  prompt ("¿Cuántas personas serían?")

if (calculo >=1 && calculo <5 ){
    alert("Perfecto,"+ nombre + "tenemos la mesa 15, para esa cantidad de personas.");
}else if (calculo >= 5 && calculo <=10 ){
    alert("Perfecto" + " " + nombre + "tenemos la mesa 18." );
}else if (calculo >10){
    alert("Ok," + nombre + "te podemos ofrecer la mesa 10, para esa cantidad de gente.");
}


let hora = prompt( nombre + " " + "Indica un horario para la reserva : ")

if (hora >=8 && hora <10){
    alert ("para ese horario tenemos disponible, el dia lunes ");
}else if(hora >=10 && hora <=12 ){
    alert("para ese horario tenemos disponible el dia miercoles");
}else{
    alert("No estamos abiertos al medio dia, disculpe las molestias.");
}

let localDondeIr = Number (prompt("Ingrese a que local quiere asistir. (Olivos (1), Munro(2), Carapachay(3))"))

    switch (localDondeIr){
        case 1 :
            alert("elegiste la opcion de Olivos.");
            break;
        case 2 :
            alert(" elegiste la opcion de Munro. ");
            break
        case 3 :
            alert (" elegiste la opcion de Carapachay.");
            break;      
    }

    let finalizar = prompt("Para finalizar, necesitamos que nos confirmes si queres reservar : (si-1)(no-2)")

    if(finalizar ==1 ){
    alert(nombre+""+ " !Confirmamos tu reserva, gracias¡" );
    } else{
        alert("Cancelamos tu reserva :( ");
    } 

    function saludar (){
        alert("Muchas gracias"+ " " + nombre  +"por participar de este simulador !")
    }
    saludar();
    
