//import { filtroDimensiones } from './data.js';

// import { Chart } from 'chart.js';
import data from './data/rickandmorty/rickandmorty.js';//importamos la data accediendo a su ubicación
const Data = data.results;//variable que guarda y accede al array [results]

console.log(data.species)

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
            const Tarjeta = document.querySelectorAll( '.contenedorTarjetas .tarjeta')
              
          
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


let Home=  document.getElementById("Home");
      Home.addEventListener("click",function (){
          document.getElementById("contenedorTarjetas").style.display = "block";
          document.getElementById("SomosQ").style.display = "none"; 
          document.getElementById("Chart").style.display = "none";
          document.getElementById("filtroDeEspecies").style.display = "none";  
  
  })

let QuienesSomos=  document.getElementById("Somos");
    QuienesSomos.addEventListener("click",function (){
          document.getElementById("contenedorTarjetas").style.display = "none";
          document.getElementById("Chart").style.display = "none"; 
          document.getElementById("SomosQ").style.display = "block";  
          document.getElementById("filtroDeEspecies").style.display = "none";  
  })

  
  let filtrandoEspecies=  document.getElementById("especies");
    filtrandoEspecies.addEventListener("click",function(){
        document.getElementById("contenedorTarjetas").style.display = "none";
        document.getElementById("filtroDeEspecies").style.display = "block";  
        document.getElementById("Chart").style.display = "none"; 
        document.getElementById("SomosQ").style.display = "none"; 
 })

//  let volverEspecies=  document.getElementById("volverEspecies");
//  volverEspecies.addEventListener("click",function(){
//         document.getElementById("contenedorTarjetas").style.display = "block";
//         document.getElementById("filtroDeEspecies").style.display = "none";  
//         document.getElementById("Chart").style.display = "none"; 
//         document.getElementById("SomosQ").style.display = "none";
        
//  })

 let volverTodosLosPersonajes=  document.getElementById("volverPersonajes");
 volverTodosLosPersonajes.addEventListener("click",function(){
        document.getElementById("contenedorTarjetas").style.display = "block";
        document.getElementById("filtroDeEspecies").style.display = "none";  
        document.getElementById("Chart").style.display = "none"; 
        document.getElementById("SomosQ").style.display = "none";
        
 })

    const BotonGraficos = document.getElementById("Graphics");
          BotonGraficos.addEventListener("click", function MostrarGrafico(){
    document.getElementById("Chart").style.display = "block";
    document.getElementById("SomosQ").style.display = "none"; 
    document.getElementById("contenedorTarjetas").style.display="none";
    document.getElementById("filtroDeEspecies").style.display = "none";  
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
   //let Tarjeta = document.querySelectorAll( '.contenedorTarjetas .tarjeta')
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
    
// *********************************Filtrando especies *********************************
function filtroEspecies(filtro){
  let especies= Data.filter(item=>{
    return item.species===filtro
    })
  
let contenedorDeTarjetas=document.getElementById("filtroDeEspecies");
contenedorDeTarjetas.innerHTML=""
for(let i=0;i < especies.length; i++){
    
clonando(especies[i].name,especies[i].origin.name, especies[i].gender,especies[i].image,especies[i].episode.length, ) //ejecutamos la funcion clonar con los datos del parametro
}
 
 let contenedor = document.getElementById("tarjeta");
 contenedorDeTarjetas.appendChild(contenedor)
    
}

// *********************************Filtrando especies *********************************


let BotonHumans = document.getElementById("Humans");
BotonHumans.addEventListener("click",humans);
const Tarjeta = document.getElementsByClassName("tarjeta");

  function humans(){
   filtroEspecies("Human"),
   document.getElementById("contenedorTarjetas").style.display = "none";
  }


let BotonAliens = document.getElementById("Alien");
BotonAliens.addEventListener("click",Aliens);
const tarjetaAliens= document.getElementsByClassName("tarjeta");

  function Aliens(){
   filtroEspecies("Alien")
   document.getElementById("contenedorTarjetas").style.display = "none";
  }

let BotonRobots = document.getElementById("Robots");
BotonRobots.addEventListener("click",Robots);
const tarjetaRobots= document.getElementsByClassName("tarjeta");

 function Robots(){
   filtroEspecies("Robot")
   document.getElementById("contenedorTarjetas").style.display = "none";
  }

let BotonHumanoid = document.getElementById("humanoid");
BotonHumanoid.addEventListener("click",humanoid);
const TarjetaHumanoid = document.getElementsByClassName("tarjeta");

 function  humanoid(){
   filtroEspecies("Humanoid")
   document.getElementById("contenedorTarjetas").style.display = "none";
  }
    
let BotonUnknown = document.getElementById("unknown");
BotonUnknown.addEventListener("click",unknown);
const tarjetaUnknown= document.getElementsByClassName("tarjeta");

 function unknown(){
   filtroEspecies("unknown") 
   document.getElementById("contenedorTarjetas").style.display = "none";  
  }

let BotonPoopybutthole= document.getElementById("Poopybutthole");
BotonPoopybutthole.addEventListener("click",Poopybutthole);
const tarjetaPoopybutthole= document.getElementsByClassName("tarjeta");

  function Poopybutthole(){
   filtroEspecies("Poopybutthole")
   document.getElementById("contenedorTarjetas").style.display = "none";
 }

 let BotonMytholog= document.getElementById("Mytholog");
 BotonMytholog.addEventListener("click",EspecieMytholog);
 const tarjetaMytholog= document.getElementsByClassName("tarjeta");

 function EspecieMytholog(){
   filtroEspecies("Mytholog")
   document.getElementById("contenedorTarjetas").style.display = "none";
 }
  
 let BotonVampire= document.getElementById("Vampire");
 BotonVampire.addEventListener("click",Vampire);
 const tarjetaVampire= document.getElementsByClassName("tarjeta");
 
 function Vampire(){
   filtroEspecies("Vampire")
   document.getElementById("contenedorTarjetas").style.display = "none";
  }

 let BotonCronenberg= document.getElementById("Cronenberg");
 BotonCronenberg.addEventListener("click",Cronenberg);
 const tarjetaCronenberg= document.getElementsByClassName("tarjeta");
   
 function Cronenberg(){
   filtroEspecies("Cronenberg")
   document.getElementById("contenedorTarjetas").style.display = "none";
  }

 let BotonAnimal= document.getElementById("Animal");
 BotonAnimal.addEventListener("click",Animal);
 const tarjetaAnimal= document.getElementsByClassName("tarjeta");
   
 function Animal(){
   filtroEspecies("Animal")
   document.getElementById("contenedorTarjetas").style.display = "none";
  }
  

  // ***************************EL CANVAS ******************************

  // for (let i=0;i < Data.length;i++){
  //   let categoriaEspecie = Data[i].species;
    //console.log(categoriaEspecie.length);
    
    //console.log(categoriaEspecie);
  
  
  
//     for (let i=0;i < Data.length;i++){
//       let Ch  = Data[i].name;
//       // console.log(Ch);
//       }
  
//   const canvas = document.getElementById("canvas");
  
//   const Especies= categoriaEspecie;
//   const Personajes= [1,2,3,2]
//   const MyChart= new Chart(canvas,{
//     type: "bar",
//     data: {
//       labels: Especies,
//       datasets:[
//         {
//           label:"Personajes",
//           data:Personajes,
//           BackgroundClor:["rgb(233, 150, 122)",
//             "rgb(148, 0, 211)",
//             " rgb(0, 206, 209)",
//             "rgb(255, 248, 220)"],
//             borderColor: ["rgb(233, 150, 122)",
//             "rgb(148, 0, 211)",
//             " rgb(0, 206, 209)",
//             "rgb(255, 248, 220)"],
//             borderWidth: 1.5,
//         }]
//       }})  
// }
