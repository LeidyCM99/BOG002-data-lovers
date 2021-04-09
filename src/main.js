//import { filtroDimensiones } from './data.js';

// import { Chart } from 'chart.js';
import data from './data/rickandmorty/rickandmorty.js';//importamos la data accediendo a su ubicación
const Data = data.results;//variable que guarda y accede al array [results]



//***************************************** BOTONES*****************************************

const Busqueda = document.getElementById("input-buscador");//guardamos el valor ingresado en el input 
const Boton = document.getElementById("Buscar");//enlazamos nuestro boton 
      Boton.addEventListener("click",BuscandoDEntroDeData);//le creamos un evento click para que ejecute la funcion dada

const BotonMujeres = document.getElementById("GeneroMujeres");
      BotonMujeres.addEventListener("click", BuscandoFemale);

const BotonH = document.getElementById("GeneroHombres");
      BotonH.addEventListener("click", BuscandoMale);

  
      

// *****************************************FILTRO DE BUSQUEDA*****************************************


function BuscandoDEntroDeData(){//ejecutamos la función Busqueda
    const Resultado = Busqueda.value.toUpperCase();//traemos el valor buscado
    const Tarjeta = document.getElementsByClassName("tarjeta");
    
    for (let i=0;i < Data.length;i++){
      if(Tarjeta[i].textContent.toUpperCase().includes(Resultado)) {
        Tarjeta[i].style.display = "inline-flex";
      } else {
        Tarjeta[i].style.display = "none"; 
      }
      }}

     

function BuscandoFemale(){
      const Result = "FEMALE";
      const Tarjeta = document.getElementsByClassName("tarjeta");
        
    
        for (let i=0;i < Data.length;i++){
          if(Tarjeta[i].textContent.toUpperCase().includes(Result)) {
            Tarjeta[i].style.display = "inline-flex";
          } else {
            Tarjeta[i].style.display = "none"; }
          }}


          
function BuscandoMale(){
  
            const BuscarLaPalabra = " MALE";
            const Tarjeta = document.getElementsByClassName("tarjeta");
              
          
              for (let i=0;i < Data.length;i++){
                if(Tarjeta[i].textContent.toUpperCase().includes(BuscarLaPalabra)) {
                  Tarjeta[i].style.display = "inline-flex";
                } else {
                  Tarjeta[i].style.display = "none"; }
                }
          }
  
// *****************************************CREACION DE TARJETAS*****************************************


window.onload = function RecorriendoData() {
  for(let i=0;i < Data.length; i++){////esta función recorre la data
     const Nombres   = Data[i].name;//accede a los datos  clasificados en el array en este caso name y los guarda en la nueva variable
     const Origen    = Data[i].origin.name;
     const Genero    = Data[i].gender;
     const Episodios = Data[i].episode.length;
     const imagen    = Data[i].image;
     const especies  = Data[i].species;
     clonar(Nombres, Origen, Genero, imagen, Episodios) //ejecutamos la funcion clonar con los datos del parametro
 
console.log(especies)  
}}
document.getElementById("tarjeta").style.display="none"

 

function clonar(Nombres, Origen, Genero, Imagen, Episodios) {//Creamos esta función declarando los parametros a usar
//  console.log(Nombres,Origen, Genero, Imagen, Episodios)
  var contenedor = document.getElementById("tarjeta");//reservamos un id en html
  var clon       = contenedor.cloneNode(true);//a contenedor le aplicamos el metodo cloneNode para clonar

  clon.style.display          = "inline-flex";//aplicamos un estilo display y una margen para los nuevos div´s
  clon.style.margin           = "1em"        
  
  let nombrePersonaje          =document.getElementById("nombrePersonaje");//reservamos un id en html
  nombrePersonaje.innerHTML    = Nombres//imprimimos el dato requerido
            
  let lugar_personaje          =document.getElementById("lugarDeOrigen");
  lugar_personaje.innerHTML    = "Lugar De Origen: "+ Origen
                   
  let cantidad_episodios       =document.getElementById("cantidadDeDeEpisodios");
  cantidad_episodios.innerHTML = "Cantidad de episodios: "+ Episodios
  
  let genero_tarjeta           =document.getElementById("genero");
  genero_tarjeta.innerHTML     = "Genero: "+ Genero

  document.getElementById("imgPersonaje").src = Imagen


  let contenedorDeTarjetas=document.getElementById("contenedorTarjetas");
  contenedorDeTarjetas.appendChild(clon);//crea un nuevo nodo con el formato que le dimos
  }
  
// *********************************OCULTAR Y MOSTRAR SECCIONES *********************************


let QuienesSomos=  document.getElementById("Somos");
    QuienesSomos.addEventListener("click",function (){
          document.getElementById("contenedorTarjetas").style.display = "none";
          document.getElementById("Chart").style.display = "none"; 
          document.getElementById("SomosQ").style.display = "block";  
          document.getElementById("filtroDeEspecies").style.display = "none";  
  })

  let Home=  document.getElementById("Home");
      Home.addEventListener("click",function (){
          document.getElementById("contenedorTarjetas").style.display = "block";
          document.getElementById("SomosQ").style.display = "none"; 
          document.getElementById("Chart").style.display = "none";
          document.getElementById("filtroDeEspecies").style.display = "none";  
        
         
  })
    const BotonGraficos = document.getElementById("Graphics");
          BotonGraficos.addEventListener("click", function MostrarGrafico(){
    document.getElementById("Chart").style.display = "block";
    document.getElementById("SomosQ").style.display = "none"; 
    document.getElementById("contenedorTarjetas").style.display="none";
    document.getElementById("filtroDeEspecies").style.display = "none";  
          })
     
         
 


let filtrandoEspecies=  document.getElementById("especies");
    filtrandoEspecies.addEventListener("click",function(){
        document.getElementById("filtroDeEspecies").style.display = "block"; 
        document.getElementById("Chart").style.display = "none";
        document.getElementById("SomosQ").style.display = "none";  
        document.getElementById("contenedorTarjetas").style.display = "none";

 })
 

  // *****************************************FILTROS POR CATEGORIAS Y BOTONES*****************************************
  
  //Boton organizacion A-Z

  let BotonOrganizarAz = document.getElementById("personajesAZ");
      BotonOrganizarAz.addEventListener("click", az);
  
 
  function az(){
   let organizaAz = Data.sort((personajes1,personajes2)=>{
    return (personajes1.name < personajes2.name)? -1 :1
   })
   let contenedorDeTarjetas=document.getElementById("contenedorTarjetas");
   contenedorDeTarjetas.innerHTML=""
   for(let i=0;i < organizaAz.length; i++){
     
   clonar(organizaAz[i].name, organizaAz[i].origin.name, organizaAz[i].gender, organizaAz[i].image,organizaAz[i].episode.length, ) //ejecutamos la funcion clonar con los datos del parametro
  }
  
  let contenedor = document.getElementById("tarjeta");
  contenedorDeTarjetas.appendChild(contenedor)
  
   }
 // *********************************Clonando especies *********************************
   function clonando(Nombres, Origen, Genero, Imagen, Episodios) {//Creamos esta función declarando los parametros a usar
  
      var contenedor = document.getElementById("tarjeta");//reservamos un id en html
      var clon       = contenedor.cloneNode(true);//a contenedor le aplicamos el metodo cloneNode para clonar
    
      clon.style.display          = "inline-flex";//aplicamos un estilo display y una margen para los nuevos div´s
      clon.style.margin           = "1em"        
      
      let nombrePersonaje          =document.getElementById("nombrePersonaje");//reservamos un id en html
      nombrePersonaje.innerHTML    = Nombres//imprimimos el dato requerido
                
      let lugar_personaje          =document.getElementById("lugarDeOrigen");
      lugar_personaje.innerHTML    = "Lugar De Origen: "+ Origen
                       
      let cantidad_episodios       =document.getElementById("cantidadDeDeEpisodios");
      cantidad_episodios.innerHTML = "Cantidad de episodios: "+ Episodios
      
      let genero_tarjeta           =document.getElementById("genero");
      genero_tarjeta.innerHTML     = "Genero: "+ Genero
    
      document.getElementById("imgPersonaje").src = Imagen
    
      let contenedorDeEspecies=document.getElementById("filtroDeEspecies");
      contenedorDeEspecies.appendChild(clon);//crea un nuevo nodo con el formato que le dimos
      
      }
    
//****Filtrando especies*****//

  const BotonHumans = document.getElementById("Humans");
        BotonHumans.addEventListener("click",especies);
  const Tarjeta = document.getElementsByClassName("tarjeta");

  function especies(){

   let humanos= Data.filter(item=>{
    return item.species==="Human"
   })
 
  
  let contenedorDeTarjetas=document.getElementById("filtroDeEspecies");
  contenedorDeTarjetas.innerHTML=""
  for(let i=0;i < humanos.length; i++){
     
     clonando(humanos[i].name, humanos[i].origin.name, humanos[i].gender, humanos[i].image,humanos[i].episode.length, ) //ejecutamos la funcion clonar con los datos del parametro
  }
  
  let contenedor = document.getElementById("tarjeta");
  contenedorDeTarjetas.appendChild(contenedor)
  console.log(humanos) 
}
  

let BotonAliens = document.getElementById("Alien");
    BotonAliens.addEventListener("click",Aliens);
const tarjetaAliens= document.getElementsByClassName("tarjeta");

function Aliens(){

let Aliens= Data.filter(item=>{
return item.species==="Alien"
})


let contenedorDeTarjetas=document.getElementById("filtroDeEspecies");
contenedorDeTarjetas.innerHTML=""
for(let i=0;i < Aliens.length; i++){

clonando(Aliens[i].name, Aliens[i].origin.name, Aliens[i].gender, Aliens[i].image,Aliens[i].episode.length, ) //ejecutamos la funcion clonar con los datos del parametro
}

let contenedor = document.getElementById("tarjeta");
contenedorDeTarjetas.appendChild(contenedor)

}


let BotonRobots = document.getElementById("Robots");
BotonRobots.addEventListener("click",Robots);
const tarjetaRobots= document.getElementsByClassName("tarjeta");

function Robots(){

  let robots= Data.filter(item=>{
  return item.species==="Robot"
  })
  
  
  let contenedorDeTarjetas=document.getElementById("filtroDeEspecies");
  contenedorDeTarjetas.innerHTML=""
  for(let i=0;i < robots.length; i++){
  
  clonando(robots[i].name, robots[i].origin.name, robots[i].gender, robots[i].image,robots[i].episode.length, ) //ejecutamos la funcion clonar con los datos del parametro
  }
  
  let contenedor = document.getElementById("tarjeta");
  contenedorDeTarjetas.appendChild(contenedor)
  
  }

  let BotonHumanoid = document.getElementById("humanoid");
      BotonHumanoid.addEventListener("click",humanoid);
  const TarjetaHumanoid = document.getElementsByClassName("tarjeta");

  function humanoid(){

   let humanoid= Data.filter(item=>{
    return item.species==="Humanoid"
   })
 
  
  let contenedorDeTarjetas=document.getElementById("filtroDeEspecies");
  contenedorDeTarjetas.innerHTML=""
  for(let i=0;i < humanoid.length; i++){
     
     clonando(humanoid[i].name, humanoid[i].origin.name, humanoid[i].gender, humanoid[i].image,humanoid[i].episode.length, ) //ejecutamos la funcion clonar con los datos del parametro
  }
  
  let contenedor = document.getElementById("tarjeta");
  contenedorDeTarjetas.appendChild(contenedor)
 
}
  
let BotonUnknown = document.getElementById("unknown");
BotonUnknown.addEventListener("click",unknown);
const tarjetaUnknown= document.getElementsByClassName("tarjeta");

function unknown(){

  let unknown= Data.filter(item=>{
  return item.species==="unknown"
  })
  
  
  let contenedorDeTarjetas=document.getElementById("filtroDeEspecies");
  contenedorDeTarjetas.innerHTML=""
  for(let i=0;i < unknown.length; i++){
  
  clonando(unknown[i].name,unknown[i].origin.name,unknown[i].gender,unknown[i].image,unknown[i].episode.length, ) //ejecutamos la funcion clonar con los datos del parametro
  }
  
  let contenedor = document.getElementById("tarjeta");
  contenedorDeTarjetas.appendChild(contenedor)
  
  }

let BotonPoopybutthole= document.getElementById("Poopybutthole");
BotonPoopybutthole.addEventListener("click",Poopybutthole);
const tarjetaPoopybutthole= document.getElementsByClassName("tarjeta");

function Poopybutthole(){


  let Poopybutthole= Data.filter(item=>{
  return item.species==="Poopybutthole"
  })
  
  
  let contenedorDeTarjetas=document.getElementById("filtroDeEspecies");
  contenedorDeTarjetas.innerHTML=""
  for(let i=0;i < Poopybutthole.length; i++){
  
  clonando(Poopybutthole[i].name,Poopybutthole[i].origin.name,Poopybutthole[i].gender,Poopybutthole[i].image,Poopybutthole[i].episode.length, ) //ejecutamos la funcion clonar con los datos del parametro
  }
  
  let contenedor = document.getElementById("tarjeta");
  contenedorDeTarjetas.appendChild(contenedor)
  
  }

