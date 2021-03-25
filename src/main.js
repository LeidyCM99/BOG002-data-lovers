import { example } from './data.js';

import data from './data/rickandmorty/rickandmorty.js';
let Data = data.results;


//***************************************** Boton de busqueda*****************************************

const Busqueda = document.getElementById("input-buscador");
const Boton = document.getElementById("Buscar");

Boton.addEventListener("click",BuscandoDEntroDeData)
   

function BuscandoDEntroDeData(){
const Resultado = Busqueda.value;
//     for(let TodaLaData of Data){
//         let SacarData = TodaLaData.name;

//         if (SacarLaData.indexOf(Resultado)!==-1){
//          console.log(SacarData)
//         }}}
            
           

//  for(let datos of Data ){
//         let nombre = datos.name;
//         if (nombre.indexOf(Resultado)!==-1){
            
//         }
//     }

    console.log(Resultado)}

// *****************************************Lista de links*****************************************

let Episodios = document.getElementById("Episodios");
Episodios.addEventListener("click",
function(){
         let Data = data.results;
    for (let i=0;i < Data.length;i++){
        let episode = Data[i].episode;
        let ArrEpisodios = [episode];
        let ArrNuevo = []
    
        ArrEpisodios.forEach (el => {
             if (!(el in Data)) {// comprobamos si el valor existe en el objeto
                Data[el] = true; // si no existe creamos ese valor y lo añadimos al array final, y si sí existe no lo añadimos
                ArrNuevo.push(el);
  }
})
// document.getElementById("ParrafoDePrueba").innerHTML +=  ArrNuevo;
// console.log(ArrEpisodios) 
console.log(ArrNuevo.toString()) 
    
}})


//******************** */ RESULTADOS DE DATA SEGUN NOMBRE, GENERO, ETC ************************************
//  

//  let Data = data.results;
 const nombrePersonajes=Data.sort((personajes1,personajes2)=>{
 return (personajes1.name<personajes2.name)? -1 :1//
 })
//console.log(nombrePersonajes) a-z

 const status=Data.filter(status=> {
     return status!=="Dead"
 })
// console.log(status)
 
let NombreDePersonajes = document.getElementById("ListaPersonajes");
NombreDePersonajes.addEventListener("click",
function(){
 for (let i=0;i < Data.length;i++){
     let categoriaNombre = Data[i].name;

     console.log(categoriaNombre)}

    })



//  for (let i=0;i < Data.length;i++){
     //let categoriaGenero = Informacion[i].gender;


    //console.log(categoriaGenero);
    // }

 for (let i=0;i < Data.length;i++){
    let categoriaEspecie = Data[i].species;
    //console.log(categoriaEspecie);
    }
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
 

