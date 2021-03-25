import { example } from './data.js';

import data from './data/rickandmorty/rickandmorty.js';
let Data = data.results;


//***************************************** BOTON DE BUSQUEDA*****************************************

const Busqueda = document.getElementById("input-buscador");
const Boton = document.getElementById("Buscar");

Boton.addEventListener("click",BuscandoDEntroDeData);
   

function BuscandoDEntroDeData(){
const Resultado = Busqueda.value;
//     for(let TodaLaData of Data){
//         let SacarData = TodaLaData.name;

//     if (SacarLaData.indexOf(Resultado)!==-1){
//          console.log(SacarData)
//         }}}
            
           

//     for(let datos of Data ){
//         let nombre = datos.name;

//      if (nombre.indexOf(Resultado)!==-1){
            
//         }}

    console.log(Resultado)}

// *****************************************LISTA DE BOTONES LADO IZQUIERO*****************************************


// ****lista de epsodios *****
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

 // *****lista de nombres de personajes *******

 
 let NombreDePersonajes = document.getElementById("ListaPersonajes");
 NombreDePersonajes.addEventListener("click",
 function(){
  for (let i=0;i < Data.length;i++){
      let categoriaNombre = Data[i].name;
 
      console.log(categoriaNombre)}
 
     })


//******************** */ RESULTADOS DE DATA SEGUN ESTADO, GENERO, ETC ************************************



// ******Nombres de personajes organizados de A-Z*******

 const nombrePersonajes=Data.sort((personajes1,personajes2)=>{
    return (personajes1.name<personajes2.name)? -1 :1//
 })
//console.log(nombrePersonajes) a-z

 

 // **************Genero del personajes ****************

 for (let i=0;i < Data.length;i++){
     let categoriaGenero = Informacion[i].gender;


    //console.log(categoriaGenero);
    }

    // **************Especie del personajes ****************

 for (let i=0;i < Data.length;i++){
    let categoriaEspecie = Data[i].species;
    //console.log(categoriaEspecie);
    }



 
// **************Imagen de los personajes ****************
 
let imgPersonajeData="";
let fotoImg=document.getElementById("imgPersonaje");
  for(let i=0; i < Data.length; i++){
      let imgPersonajes=Data[i].image;
      imgPersonajeData=imgPersonajeData+imgPersonajes;
 }
 //console.log(imgPersonajeData);
 //fotoImg.innerHTML=imgPersonajeData;


 

// **************Estado del personajes ****************

 const status=Data.filter(status=> {// con filter traemos los datos especificos (aun no filtra correctamente)
     return status !="Dead"
 })
//   console.log(status)

// **************Creacion de tarjetas opcion 1 ****************
 
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
// **************Creacion de tarjetas opcion 2****************

// let nuevaTarjeta=document.createElement("div");
// nuevaTarjeta.classList.add('tarjeta')
// document.body.appendChild(nuevaTarjeta);
// }

// let nombrePersonajedata="";
// let nombrePersonaje=document.getElementById("nombrePersonaje");
// for(let i=0;i < Data.length; i++){
//    let nombresPersonajes=Data[i].name;
//    nombrePersonajedata=nombrePersonajedata+nombresPersonajes+"\n";
// }
//console.log(nombrePersonajedata);
//nombrePersonaje.innerHTML=nombrePersonajedata;

 

