

//2da-preentrega-Js

//Simulador de reservas 

let nombre = prompt ("Bienvenido a mi simulador de reservas, decime tu nombre:")

let saludoUser = "Hola"+ " " + nombre + "comencemos con la reserva :";

alert(saludoUser);

let calculo =  prompt ("¿Cuántas personas serían?")

if (calculo >=1 && calculo <5 ){
        alert("Perfecto," + nombre + "tenemos la mesa 15, para esa cantidad de personas.");
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

    alert("Vamos a proceder con la carta. Ahora indicaremos los platos que tenemos disponibles y tendras que escoger uno.");

    class Platos {
    constructor(titulo, precio){
        this.titulo = titulo,
        this.precio = precio
        }
    }   
    const producto1 = new Platos ("Bife de chorizo con guarnicion a eleccion.", 2500 );
    const producto2 = new Platos ("Milanesa con guarnicion a eleccion.", 2000);
    const producto3 = new Platos ("Pollo deshuesado con guarnicion a eleccion.", 1500);

    const carta = [producto1,producto2,producto3];
    carta.forEach ((menu) => {
        console.log(menu);
    })


    let menu =  Number (prompt("Elige un menu para que ya tengamos preparada tu comida. (1) Bife de chorizo, (2) Milanesa, (3) Pollo deshuesado."));
    switch (menu){
        case 1 : 
            alert("Elegiste Bife de chorizo con guarnicion. Para cuando llegues te esperaremos con la comida lista.");
            break;
        case 2 : 
            alert("Elegiste Milanesa con guarnicion. Te esperaremos con todos tus platos listos.");
            break;
        case 3 : 
            alert("Elegiste la opcion de Pollo deshuesado con guarnicion. Para cuando llegues tendras la comida lista.");
            break;        
    }   
    
    let finalizar = prompt("Para finalizar, necesitamos que nos confirmes la reserva:(si-1)(no-2)")

    if(finalizar ==1 ){
    alert(" ! CONFIRMAMOS TU RESERVA, GRACIAS ¡" );
    } else{
        alert("CANCELAMOS TU RESERVA :( ");
    } 

    function saludar (){
        alert("Muchas gracias"+ " " + nombre  +"por participar de mi simulador !")
    }
    saludar(nombre);
    
