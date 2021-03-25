import { example } from './data.js';

import data from './data/rickandmorty/rickandmorty.js';

const arrayPersonajes=data.results// en esta variable guardo la data ingresando a results donde esta el array
//console.log(arrayPersonajes)

let Busqueda = document.getElementById("input-buscador");

console.log(Busqueda.value)


// let nuevaTarjeta=document.createElement("div");
// nuevaTarjeta.classList.add('tarjeta')
// document.body.appendChild(nuevaTarjeta);
// }

let nombrePersonajedata="";
let nombrePersonaje=document.getElementById("nombrePersonaje");
for(let i=0;i < arrayPersonajes.length; i++){
   let nombresPersonajes=arrayPersonajes[i].name;
   nombrePersonajedata=nombrePersonajedata+nombresPersonajes+"\n";
}
//console.log(nombrePersonajedata);
//nombrePersonaje.innerHTML=nombrePersonajedata;
 
 
let imgPersonajeData="";
let fotoImg=document.getElementById("imgPersonaje");
  for(let i=0; i < arrayPersonajes.length; i++){
      let imgPersonajes=arrayPersonajes[i].image;
      imgPersonajeData=imgPersonajeData+imgPersonajes;
 }
 //console.log(imgPersonajeData);
 //fotoImg.innerHTML=imgPersonajeData;

 
 const nombrePersonajes=arrayPersonajes.sort((personajes1,personajes2)=>{// traemos todos los nombres de los personajes y se organizan con sort 
 return (personajes1.name<personajes2.name)? -1 :1 //operador ternario
 })
 //console.log(nombrePersonajes) // esta consola imprime los nombre organizados de la a-z



// function TarjetasVisibles(){
//     document.getElementById("contenedorTarjetas").style.display="block"
// }
 



 const status=arrayPersonajes.filter(status=> {// con filter traemos los datos especificos (aun no filtra correctamente)
     return status !="Dead"
 })
  //console.log(status)
 
// for (let i=0;i <nombrePersonajes.lenght;i++){
//      let contenedorPersonajes=document.getElementById("personajes");
//      let nuevoElemento=document.getElementById("div");
//      let nuevaImagen=document.getElementById("imgPersonaje");
//      let nuevoNombre=document.getElementById("nombrePersonaje").textContent="Nombre";

//      nuevoElemento.className="tarjeta";

//      nuevaImagen.src=personajes[i].image;
//      nuevoNombre.innerHTML=personajes[i].name;

//      nuevoElemento.appendChild(nuevaImagen); 
//      nuevoElemento.appendChild(nuevoNombre);
//      contenedorPersonajes.appendChild(nuevoElemento);

// }
 



 