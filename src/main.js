import { example } from './data.js';

import data from './data/rickandmorty/rickandmorty.js';//importamos la data accediendo a su ubicación
const Data = data.results;//variable que guarda y accede al array [results]


//***************************************** BOTON DE BUSQUEDA*****************************************

const Busqueda = document.getElementById("input-buscador");//guardamos el valor ingresado en el imput 
const Boton = document.getElementById("Buscar");//enlazamos nuestro boton 

Boton.addEventListener("click",BuscandoDEntroDeData);//le creamos un evento click 
   

function BuscandoDEntroDeData(){//ejecutamos la función Busqueda
    const Resultado = Busqueda.value;//traemos el valor buscado

    console.log(Resultado)}

// *****************************************LISTA DE BOTONES LADO IZQUIERO*****************************************


// ****lista de episodios *****
let Episodios = document.getElementById("Episodios");//reservamos un id en html
Episodios.addEventListener("click",//creamos un evento click
function(){
    for (let i=0;i < Data.length;i++){//esta función recorre los objetos del array
         let episode = Data[i].episode;//ingresa a los datos especificos de episode
         let ArrEpisodios = [episode];//guardamos este nuevo array con solo los espisodios
         let ArrNuevo = []//creamos esta variable para almacenar el array final    
        ArrEpisodios.forEach (episodiosRepetidos => {//este metodo llama la función sobre cada dato del array
             if (!(episodiosRepetidos in Data)) {// condicionamos si el objeto es diferente o ya existe en el array
                Data[episodiosRepetidos] = true; // si es diferente lo añadimos al array final, y si ya existe no lo añadimos
                ArrNuevo.push(episodiosRepetidos);//presenta el array con los nuevos valores 
          console.log(ArrNuevo)
           
  }
})}})

// *****************************************CREACION DE TARJETAS*****************************************
let nombrePersonajedata="";
let nombrePersonaje=document.getElementById("contenedorTarjetas");

for(let i=0;i < Data.length; i++){////esta función recorre los objetos del array
   let Nombres=Data[i].name;//accede a los datos  clasificados en el array en este caso name y los guarda en la nueva variable
   let Origen=Data[i].origin.name;
   let Genero=Data[i].gender;
   let Episodios=Data[i].episode.length;
   let imagen=Data[i].image;
   //nombrePersonajedata = Nombres;
   clonar(Nombres, Origen, Genero, imagen, Episodios) //ejecutamos la funcion clonar con los datos del parametro
  
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





