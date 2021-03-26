import { example } from './data.js';

import data from './data/rickandmorty/rickandmorty.js';
let Data = data.results;


//***************************************** BOTON DE BUSQUEDA*****************************************

const Busqueda = document.getElementById("input-buscador");
const Boton = document.getElementById("Buscar");

Boton.addEventListener("click",BuscandoDEntroDeData);
   

function BuscandoDEntroDeData(){
    const Resultado = Busqueda.value;
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

// let BotonOrganizarAz = document.getElementById("personajesAZ");
//     BotonOrganizarAz.addEventListener("click", az)

//     function az(){
        
//     }
 
    const nombrePersonajes=Data.sort((personajes1,personajes2)=>{
        return (personajes1.name<personajes2.name)? -1 :1
     })
    // console.log(nombrePersonajes) 
 

 // **************Genero del personajes ****************

 for (let i=0;i < Data.length;i++){
     let categoriaGenero = Data[i].gender;


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


let nuevaTarjeta = document.createElement("div");
       nuevaTarjeta.classList.add('tarjeta')
       document.body.appendChild(nuevaTarjeta);
    function clonar() {
        var c = document.getElementById("contenedorTarjetas");
        var clon = c.cloneNode("contenedorTarjetas");
        clon.style.display= "inline-flex";
        clon.style.margin= "30px"
        document.body.appendChild(clon);
    
      }

       

let nombrePersonajedata="";
let nombrePersonaje=document.getElementById("nombrePersonaje");

for(let i=0;i < Data.length; i++){
   let Nombres=Data[i].name;
//    console.log(Nombres)
   nombrePersonajedata = Nombres;
  
}

// console.log(nombrePersonajedata);
nombrePersonaje.innerHTML=nombrePersonajedata;


    


// **************Creacion de tarjetas opcion 2****************

// for (let i=0;i < Data.length;i++){
//           let categoriaNombre = Data[i].name;
     
   
// }

// console.log(categoriaNombre)
     

// tarjeta = document.createElement("div")
// document.getElementById("nombrePersonaje").innerHTML = categoriaNombre;


