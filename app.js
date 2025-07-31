let numeroSecreto = 0; 
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10; //numero maximo del intervalo de numeros

function asignarTextoElemento(elemento, texto){
    let elemtoHTML = document.querySelector(elemento);
    elemtoHTML.innerHTML = texto;
    return;
}
function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    console.log(intentos);
    if (numeroUsuario === numeroSecreto) {
        asignarTextoElemento('p', `¡Felicidades! Has acertado el número secreto en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}.`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
        //El usuario no acertado el número secreto
        if (numeroUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor que ' + numeroUsuario);
        }else {
            asignarTextoElemento('p', 'El número secreto es mayor que ' + numeroUsuario);
        }
        intentos++;
        limpiaCaja();
    }
    return;
}

function limpiaCaja() {
    let valorCaja = document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGnerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGnerado);
    console.log(listaNumerosSorteados);
//si ya sorteamos todos lo numeros
    if (listaNumerosSorteados.length === numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
    } else {
    
        //si el numero generaod esta incluido en la lista  
        if (listaNumerosSorteados.includes(numeroGnerado)) {
            return generarNumeroSecreto(); //vuelve a llamar a la funcion
        } else {
            listaNumerosSorteados.push(numeroGnerado);
            return numeroGnerado;
        }
    }
}

function concdicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
function reiniciarJuego() {
    //Limpiar la caja
    limpiaCaja();
    //indicar mensaje de intervalo de numeros
    //generear el nuemero aleatorio
    //inicializar el contador de intentos
    concdicionesIniciales();
    //desabiliitar el boton nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

concdicionesIniciales();