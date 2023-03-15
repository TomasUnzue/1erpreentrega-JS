

//3er-preentrega-Js

//Simulador de reservas 

let reservas = [];

function obtenerTodasLasReservas() {
const reservasGuardadas = localStorage.getItem('reservas');
if (reservasGuardadas) {
    reservas = JSON.parse(reservasGuardadas);
}
}

obtenerTodasLasReservas();

function guardarReserva() {
const nombre = document.getElementById('nombre').value;
const cantidadPersonas = document.getElementById('cantidadPersonas').value;
const horario = document.getElementById('horario').value
const plato1 = document.getElementById('plato1').value;
const plato2 = document.getElementById('plato2').value;  
const plato3 = document.getElementById('plato3').value;    
const local = document.getElementById('local').value
const confirmar = document.getElementById('confirmar').value
const guardarReserva = document.getElementById('guardarReserva').value

const reserva = {
    nombre: nombre,
    cantidadPersonas: cantidadPersonas,
    horario: horario,
    platos: {
        plato1: plato1,
        plato2: plato2,
        plato3: plato3,
    },
    local : local,
    confirmar: confirmar,
    guardarReserva : guardarReserva,
    horario : horario,
    };

reservas.push(reserva);
localStorage.setItem('reservas', JSON.stringify(reserva));
}

const form = document.getElementById("cancelar")
form.addEventListener("submit", function(event){
    event.preventDefault();
    console.log(cancelar)
} 
)
