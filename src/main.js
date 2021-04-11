//import { filtroEspecies } from './data.js';


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
        document.getElementById("tarjeta").style.display="none"
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
                  document.getElementById("tarjeta").style.display="none"
                }
          }
  
// *****************************************CREACION DE TARJETAS*****************************************


window.onload = function RecorriendoData() {
  for(let i=0;i < Data.length; i++){////esta función recorre la data
     const Nombres   = Data[i].name;//accede a los datos  clasificados en el array en este caso name y los guarda en la nueva variable
     const Estado   = Data[i].status;
     const Origen    = Data[i].origin.name;
     const Genero    = Data[i].gender;
     const Episodios = Data[i].episode.length;
     const imagen    = Data[i].image;
     const especies  = Data[i].species;
     clonar(Nombres,Estado, Origen, Genero, imagen, Episodios, especies) //ejecutamos la funcion clonar con los datos del parametro
     document.getElementById("tarjeta").style.display="none"

}}
document.getElementById("tarjeta").style.display="none"

 

function clonar(Nombres,Estado, Origen, Genero, Imagen, Episodios, especies) {//Creamos esta función declarando los parametros a usar

  var contenedor = document.getElementById("tarjeta");//reservamos un id en html
  var clon       = contenedor.cloneNode(true);//a contenedor le aplicamos el metodo cloneNode para clonar

  clon.style.display          = "inline-block";//aplicamos un estilo display y una margen para los nuevos div´s
  clon.style.margin           = "1em"        
  
  let nombrePersonaje          =document.getElementById("nombrePersonaje");//reservamos un id en html
  nombrePersonaje.innerHTML    = Nombres//imprimimos el dato requerido
  
  let estado_personaje          =document.getElementById("estado");
  estado_personaje.innerHTML    = "Estado: "+ Estado

  let lugar_personaje          =document.getElementById("lugarDeOrigen");
  lugar_personaje.innerHTML    = "Lugar De Origen: "+ Origen
                   
  let cantidad_episodios       =document.getElementById("cantidadDeDeEpisodios");
  cantidad_episodios.innerHTML = "Cantidad de episodios: "+ Episodios
  
  let genero_tarjeta           =document.getElementById("genero");
  genero_tarjeta.innerHTML     = "Genero: "+ Genero

  let especie_tarjeta           =document.getElementById("especie");
  especie_tarjeta .innerHTML     = "Especie: "+ especies;

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
    document.getElementById("tarjeta").style.display="none"
   let organizaAz = Data.sort((personajes1,personajes2)=>{
    
    return (personajes1.name < personajes2.name)? -1 :1
    
   } )
   
   let contenedorDeTarjetas=document.getElementById("contenedorTarjetas");
   contenedorDeTarjetas.innerHTML=""
   for(let i=0;i < organizaAz.length; i++){
   clonando(organizaAz[i].name,organizaAz[i].status, organizaAz[i].origin.name, organizaAz[i].gender, organizaAz[i].image,organizaAz[i].episode.length, organizaAz[i].species) 
  
  }
  
   //let Tarjeta = document.querySelectorAll( '.contenedorTarjetas .tarjeta')
  let contenedor = document.getElementById("tarjeta");
  contenedorDeTarjetas.appendChild(contenedor)

   }

let BotonOrganizarZa = document.getElementById("personajesZA");
BotonOrganizarZa.addEventListener("click", za);


function za(){
let organizaZa = Data.sort((personajes1,personajes2)=>{
 return (personajes1.name > personajes2.name)? -1 :1
})

let contenedorDeTarjetas=document.getElementById("contenedorTarjetas");
contenedorDeTarjetas.innerHTML=""

for(let i=0;i < organizaZa.length; i++){
  
clonar(organizaZa[i].name, organizaZa[i].origin.name, organizaZa[i].gender, organizaZa[i].image,organizaZa[i].episode.length, ) //ejecutamos la funcion clonar con los datos del parametro
}
//let Tarjeta = document.querySelectorAll( '.contenedorTarjetas .tarjeta')
let contenedor = document.getElementById("tarjeta");
contenedorDeTarjetas.appendChild(contenedor)

}
 // *********************************Clonando especies *********************************
   function clonando(Nombres, Estado, Origen, Genero, imagen, Episodios, especies) {//Creamos esta función declarando los parametros a usar
  
      var contenedor = document.getElementById("tarjeta");//reservamos un id en html
      var clon       = contenedor.cloneNode(true);
      clon.style.display          = "inline-flex";
      clon.style.margin           = "1em"        
      
      let nombrePersonaje          =document.getElementById("nombrePersonaje");
      nombrePersonaje.innerHTML    = Nombres;
      
      let estado_personaje          =document.getElementById("estado");
      estado_personaje.innerHTML    = "Estado: "+ Estado;
    
      let lugar_personaje          =document.getElementById("lugarDeOrigen");
      lugar_personaje.innerHTML    = "Lugar De Origen: "+ Origen
                       
      let cantidad_episodios       =document.getElementById("cantidadDeDeEpisodios");
      cantidad_episodios.innerHTML = "Cantidad de episodios: "+ Episodios
      
      let genero_tarjeta           =document.getElementById("genero");
      genero_tarjeta.innerHTML     = "Genero: "+ Genero
    
      let especie_tarjeta           =document.getElementById("especie");
      especie_tarjeta .innerHTML     = "Especie: "+ especies;
    
    
      document.getElementById("imgPersonaje").src = imagen
     
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
  clonando(especies[i].name,especies[i].status, especies[i].origin.name, especies[i].gender, especies[i].image, especies[i].episode.length, especies[i].species) 
  
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
  
  let BotonDisease= document.getElementById("Disease");
  BotonDisease.addEventListener("click",Disease);
  const tarjetaDisease= document.getElementsByClassName("tarjeta");
    
  function Disease(){
    filtroEspecies("Disease")
    document.getElementById("contenedorTarjetas").style.display = "none";
   }
 
  let BotonParasite= document.getElementById("Parasite");
  BotonParasite.addEventListener("click",Parasite);
  const tarjetaParasite= document.getElementsByClassName("tarjeta");
    
  function Parasite(){
    filtroEspecies("Parasite")
    document.getElementById("contenedorTarjetas").style.display = "none";
   }
  
  // ***************************EL CANVAS ******************************

fetch("https://rickandmortyapi.com/api/episode")
.then(response => response.json() )
.then(data =>{
  console.log(data.results)
  let LosEpisodio= data.results.map(item => item.name)
  let epi = document.getElementById("fetch")
      epi.innerHTML = ` Nombre de los episodios: <br> <li>${LosEpisodio}</li> `


  // for (let i = 0; i < data.results.length; i++) {
  //   let p = data.results[i];
  //   console.log(p);
  //   let epi = document.getElementById("fetch")
  //   epi.innerHTML =  p
    
  //       }


  
  const canvas = document.getElementById("canvas");
  
  const LosEpisodios=data.results.map(item => item.name);
  const Personajes= data.results.map(item => item.characters.length)
  const MyChart= new Chart(canvas,{
    type: "bar",
    data: {
      labels: LosEpisodios,
      datasets:[
        {
          label:"Cantidad de Personajes",
          data:Personajes,
          backgroundColor:[
          "#00876c",
          "#6aaa96",
          "#aecdc2",
          "#f1f1f1",
          "#f0b8b8",
          "#e67f83",
          "#d43d51",
            "#2f4b7c",
            "#665191",
            "#a05195",
            "#003f5c",
            "#48E71C",
            "#ffa600",
            "#DE9E54",
            "#A36B22",
            "#d45087",
            "#f95d6a",
            "#ff7c43",
            "#FFD588",
            "#FB4F93", ],
         
            borderColor: ["#000000",
            ],
            borderWidth: .5,
        }]
      }})  

    })