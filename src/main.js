import { example } from './data.js';

import data from './data/rickandmorty/rickandmorty.js';//importamos la data accediendo a su ubicación
const Data = data.results;//variable que guarda y accede al array [results]




//***************************************** BOTON DE BUSQUEDA*****************************************

const Busqueda = document.getElementById("input-buscador");//guardamos el valor ingresado en el input 
const Boton = document.getElementById("Buscar");//enlazamos nuestro boton 
Boton.addEventListener("click",BuscandoDEntroDeData);//le creamos un evento click 
   



function BuscandoDEntroDeData(){//ejecutamos la función Busqueda
    const Resultado = Busqueda.value.toUpperCase();//traemos el valor buscado
    const Tarjeta = document.getElementsByClassName("tarjeta");

    for (let i=0;i < Data.length;i++){
      if(Tarjeta[i].textContent.toUpperCase().includes(Resultado)) {
        Tarjeta[i].style.display = "block";
       
        
      } else {
        Tarjeta[i].style.display = "none";
      }}
      Tarjeta[i].style.display="inline-flex"
  }



// *****************************************CREACION DE TARJETAS*****************************************

let nombrePersonajedata="";
let nombrePersonaje=document.getElementById("contenedorTarjetas");

for(let i=0;i < Data.length; i++){////esta función recorre la data
   let Nombres=Data[i].name;//accede a los datos  clasificados en el array en este caso name y los guarda en la nueva variable
   let Origen=Data[i].origin.name;
   let Genero=Data[i].gender;
   let Episodios=Data[i].episode.length;
   let imagen=Data[i].image;
   clonar(Nombres, Origen, Genero, imagen, Episodios) //ejecutamos la funcion clonar con los datos del parametro
  //  BuscandoDEntroDeData()
}

nombrePersonaje.innerHTML=nombrePersonajedata;


function clonar(Nombres, Origen, Genero, Imagen, Episodios) {//Creamos esta función declarando los parametros a usar
  var contenedor = document.getElementById("contenedorTarjetas");//reservamos un id en html
  var clon = contenedor.cloneNode("contenedorTarjetas");//a contenedor le aplicamos el metodo cloneNode para clonar
  clon.style.display= "inline-flex";//aplicamos un estilo display y una margen para los nuevos div´s
  clon.style.margin= "30px"        
  
  let nombrePersonaje=document.getElementById("nombrePersonaje");//reservamos un id en html
  nombrePersonaje.innerHTML = Nombres//imprimimos el dato requerido
            
  let lugar_personaje=document.getElementById("lugarDeOrigen");
  lugar_personaje.innerHTML = "Lugar De Origen: "+Origen
                   
  let cantidad_episodios=document.getElementById("cantidadDeDeEpisodios");
  cantidad_episodios.innerHTML = "Cantidad de episodios: "+Episodios
  
  let genero_tarjeta=document.getElementById("genero");
  genero_tarjeta.innerHTML = "Genero: "+Genero

  document.getElementById("imgPersonaje").src = Imagen

  document.body.appendChild(clon);//crea un nuevo nodo con el formato que le dimos
    
  }

// OCULTAR Y MOSTRAR SECCIONES ***********


let QuienesSomos=  document.getElementById("Somos");
    QuienesSomos.addEventListener("click",function (){
          document.getElementById("tarjeta").style.display = "none";
          document.getElementById("SomosQ").style.display = "block"; 
          document.getElementById("aside").style.display = "none"; 
          document.querySelector(".banner").style.display = "none";
  })

  let Home=  document.getElementById("Home");
    Home.addEventListener("click",function (){
          document.getElementById("tarjeta").style.display = "block";
          document.getElementById("SomosQ").style.display = "none"; 
          document.getElementById("aside").style.display = "block"; 
          document.querySelector(".banner").style.display = "block";
  })