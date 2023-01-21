/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

console.log('Happy hacking :)')

const url = "https://platzi-avo.vercel.app/api/avo";
const appNode = document.querySelector('#app')

window.fetch(url)
.then((response) => response.json())
.then((respuestaJson) => {
    respuestaJson.data.forEach(item => { 
        //Crear Imagen
        const img = document.createElement('img');
        img.setAttribute('src', `https://platzi-avo.vercel.app${item.image}`)
        
        //Crear Titulo
        const titulo = document.createElement('h2');
        titulo.innerText = item.name
        titulo.className = "text-xl";
        
        //Crear Precio
        const price = document.createElement('p');
        price.innerText = `$ ${item.price}`
        

        const container = document.createElement('div');
        container.className = "w-80"

        container.append(img, titulo, price)
        appNode.appendChild(container);

    })}
)
    