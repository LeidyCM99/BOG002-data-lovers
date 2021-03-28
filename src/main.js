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
})}})
  

// *****************************************CREACION DE TARJETAS*****************************************



    function clonar(Nombre_Tarjeta, Origen, Genero, Imagen, Episodios) {
        var c = document.getElementById("contenedorTarjetas");
        var clon = c.cloneNode("contenedorTarjetas");
        clon.style.display= "inline-flex";
        clon.style.margin= "30px"        
        let nombrePersonaje=document.getElementById("nombrePersonaje");
        nombrePersonaje.innerHTML = Nombre_Tarjeta
            
        let lugar_personaje=document.getElementById("lugarDeOrigen");
        lugar_personaje.innerHTML = "Lugar De Origen: "+Origen
                       
        let cantidad_episodios=document.getElementById("cantidadDeDeEpisodios");
        cantidad_episodios.innerHTML = "Cantidad de episodios: "+Episodios

        let genero_tarjeta=document.getElementById("genero");
        genero_tarjeta.innerHTML = "Genero: "+Genero

        document.getElementById("imgPersonaje").src = Imagen

        document.body.appendChild(clon);
    
      }


let nombrePersonajedata="";
let nombrePersonaje=document.getElementById("contenedorTarjetas");

for(let i=0;i < Data.length; i++){
   let Nombres=Data[i].name;
   let Origen=Data[i].origin.name;
   let Genero=Data[i].gender;
   let Episodios=Data[i].episode.length;
   let imagen=Data[i].image;
   nombrePersonajedata = Nombres;
   clonar(Nombres, Origen, Genero, imagen, Episodios) 
  
}

nombrePersonaje.innerHTML=nombrePersonajedata;



