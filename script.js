/**

const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.getElementsByClassName('parrafito');
const pid = document.getElementById('pid');
const input = document.querySelector('input');



console.log(input.value);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input
});

h1.innerHTML = 'Parrafito <br> Feo';
h1.innerText = 'Parrafito <br> Feo';
console.log(h1.getAttribute('class')); //se va a imprimir el atributo del h1.

h1.setAttribute('class', 'rojo'); //aqui ahora cambiamos el valor de la clase en html "verde" a "rojo".

h1.classList.add('rojo'); // esta es exclusiva para las clases, de esta forma agrega al "verde" tmb el "rojo", quedaria asi: class="verde rojo".

h1.classList.remove('verde'); //asi eliminara el verde y dejara el rojo.

h1.classList.toggle('algo'); //este hace poner sacar poner sacar cada ve que ejecutemos esta funcion, va a intercambiar.

h1.classList.contains('verde'); //devuelve true o false, en caso de que le preguntemos si tiene la clase que pasamos como parametro.

input.value = '456'; //asignamos por defecto un value, o lo que quisieramos, placeholder, etc.

document.createEvent('img'); //esto creara un elemento nuevo. despues de esto debemos colocarlo dentro de nuestro html ya creado.

const img = document.createElement('img');
img.setAttribute('src', 'https://static.platzi.com/media/logotipo-platzi.png');//aqui le asignamos los atributos.

pid.appendChild(''); //borramos el contenido que teniamos en el lugar donde vamos a colocar nuestra img.
pid.appendChild(img); // insertamos la img en un contenedor.


 */



// 12/27 Eventos en JavaScript: interactuando con usuarios.

// Con el evento onclick.
const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

btn.addEventListener('click', btnOnClick); //llamamos la funcion pero sin los parentesis.

function btnOnClick() {
    const sumaInputs = parseInt(input1.value) + parseInt(input2.value);
    pResult.innerText = 'Resultado: ' + sumaInputs;
}




// 13/27 addEventListener.

//si tuviesemos un formulario y no queremos q recargue la pagina luego de presionar el ultimo boton del formulario, hariamos lo siguiente.
/** 
const form = document.querySelector('#form');

form.addEventListener('submit', sumarInputsValues); //llamamos la funcion pero sin los parentesis.

function sumarInputsValues(event) {
    console.log({event});
    event.preventDefault();
    const sumaInputs = parseInt(input1.value) + parseInt(input2.value);
    pResult.innerText = 'Resultado: ' + sumaInputs;
}

*/

