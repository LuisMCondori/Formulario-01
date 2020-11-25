//VARIABLES
const nombre = document.querySelector('#name');
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const form = document.querySelector('#form')
const parrafo = document.querySelector('warnings')


form.addEventListener("submit", e=> {
    e.preventDefault();
    if(nombre.value.length > 0) {
        console.log('Hay valor')
    }
})
