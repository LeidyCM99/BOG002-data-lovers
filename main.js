
import data from './data/rickandmorty/rickandmorty.js';//importamos la data accediendo a su ubicación
const Data = data.results;//variable que guarda y accede al array [results]
import {organizaAz, organizaZa } from './data.js';
import prueba from './data.js';

// PRUEBAS PARA TESTING 





// ****************************************BOTON PARA SUBIR ********************************

document.getElementById("ImagenUp").addEventListener("click", prueba.subir);


//***************************************** BOTONES*****************************************

const Busqueda = document.getElementById("input-buscador");//guardamos el valor ingresado en el input 
const Boton = document.getElementById("Buscar");//enlazamos nuestro boton buscar
      Boton.addEventListener("click",Buscando);//le creamos un evento click para que ejecute la funcion dada

const BotonMujeres = document.getElementById("GeneroMujeres");//Botones que nos ejecutan la función cuando se de el evento click
      BotonMujeres.addEventListener("click", BuscandoFemale);

const BotonH = document.getElementById("GeneroHombres");
      BotonH.addEventListener("click", BuscandoMale);

// *****************************************FILTRO DE BUSQUEDA**********************************

function BuscandoDentroDeData(Buscando){//Creamos una función que filtrara la data sobre el parametro Buscando
    let Resultado = Buscando.toUpperCase();//Declaramos buscando en una variable y la condicionamos a ser MAYUSCULA
    const Tarjeta = document.getElementsByClassName("tarjeta");//Llamamos la clase que alojara lo filtrado
    
    for (let i=0;i < Data.length;i++){//Recorremos la data
      if(Tarjeta[i].textContent.toUpperCase().includes(Resultado)) {//si el contenido concide con el Resultado
        Tarjeta[i].style.display = "inline-flex";//la tarjeta se motrara
        document.getElementById("tarjeta").style.display="none"
      } else {
        Tarjeta[i].style.display = "none"; //si no conside la tarjeta no se motrara
        document.getElementById("tarjeta").style.display="none"

      }
    }
      contenedorDeTarjetas.removeChild(contenedorDeTarjetas.childNodes[0]);
}

function Buscando(){//creamos una función que re-usa a Buscando data
  BuscandoDentroDeData(Busqueda.value)     //esta buscara el valor que se ingre en el input busqueda
  const Tarjeta = document.getElementsByClassName("tarjeta");//se mostraran las que coincidan
}

function BuscandoFemale(){//creamos una función que re-usa a Buscando Female
 BuscandoDentroDeData("FEMALE")//aqui buscara sobre la data toda la coincidencia con Female
 const Tarjeta = document.getElementsByClassName("tarjeta");//se mostraran las que coincidan
}        

function BuscandoMale(){//creamos una función que re-usa a Buscando Male
  BuscandoDentroDeData(" MALE")//aqui buscara sobre la data toda la coincidencia con Male
  const Tarjeta = document.getElementsByClassName("tarjeta");//se mostraran las que coincidan
}
  
// *****************************************CREACION DE TARJETAS*****************************************


window.onload = function RecorriendoData() {// esta funcion se ejecuta en cada recarga de la pagina
  for(let i=0;i < Data.length; i++){//recorremos la data
     const Nombres   = Data[i].name;//accede a los datos especificos en el array en este caso name y los guarda en la nueva variable
     const Estado    = Data[i].status;
     const Origen    = Data[i].origin.name;
     const Genero    = Data[i].gender;
     const Episodios = Data[i].episode.length;
     const imagen    = Data[i].image;
     const especies  = Data[i].species;
     clonar(Nombres,Estado, Origen, Genero, imagen, Episodios, especies) //ejecutamos la funcion clonar con los datos del parametro
  }
 document.getElementById("tarjeta").style.display="none"
 
}

function clonar(Nombres,Estado, Origen, Genero, Imagen, Episodios, especies) {//Creamos esta función declarando los parametros a usar

  var contenedor = document.getElementById("tarjeta");//reservamos un id en html
  var clon       = contenedor.cloneNode(true);//a contenedor le aplicamos el metodo cloneNode para clonar

  clon.style.display          = "inline-block";//aplicamos un estilo display y una margen para los nuevos div´s
  clon.style.margin           = "1em"        
  
  let nombrePersonaje         =document.getElementById("nombrePersonaje");//reservamos un id en html
  nombrePersonaje.innerHTML   = Nombres//imprimimos el dato requerido
  
  let estado_personaje        =document.getElementById("estado");
  estado_personaje.innerHTML  = "Estado: "+ Estado

  let lugar_personaje         =document.getElementById("lugarDeOrigen");
  lugar_personaje.innerHTML   = "Lugar De Origen: "+ Origen
                   
  let cantidad_episodios      =document.getElementById("cantidadDeDeEpisodios");
  cantidad_episodios.innerHTML= "Cantidad de episodios: "+ Episodios
  
  let genero_tarjeta          =document.getElementById("genero");
  genero_tarjeta.innerHTML    = "Genero: "+ Genero

  let especie_tarjeta         =document.getElementById("especie");
  especie_tarjeta .innerHTML  = "Especie: "+ especies;

  document.getElementById("imgPersonaje").src = Imagen

  let contenedorDeTarjetas=document.getElementById("contenedorTarjetas");
  contenedorDeTarjetas.appendChild(clon);//crea un nuevo nodo con el formato que le dimos
  
}
  
// *********************************OCULTAR Y MOSTRAR SECCIONES *********************************


let Home=  document.getElementById("Home");
      Home.addEventListener("click",function (){
          document.getElementById("contenedorTarjetas").style.display = "block";
          document.getElementById("SomosQ").style.display = "none"; 
          document.getElementById("chart").style.display = "none";
          document.getElementById("canvas").style.display = "none";
          document.getElementById("filtroDeEspecies").style.display = "none";  
  
  })

let QuienesSomos=  document.getElementById("Somos");
    QuienesSomos.addEventListener("click",function (){
          document.getElementById("contenedorTarjetas").style.display = "none";
          document.getElementById("chart").style.display = "none"; 
          document.getElementById("SomosQ").style.display = "block";  
          document.getElementById("filtroDeEspecies").style.display = "none";  
  })

  
  let filtrandoEspecies=  document.getElementById("especies");
    filtrandoEspecies.addEventListener("click",function(){
      document.getElementById("ContenedorFiltrosEspecie").style.display = "block";  
        document.getElementById("filtroDeEspecies").style.display = "none";  
        document.getElementById("contenedorTarjetas").style.display = "none"; 
        document.getElementById("chart").style.display = "none"; 
        document.getElementById("SomosQ").style.display = "none"; 
 })

 let volverTodosLosPersonajes=  document.getElementById("volverPersonajes");
 volverTodosLosPersonajes.addEventListener("click",function(){
        document.getElementById("contenedorTarjetas").style.display = "block";
        document.getElementById("filtroDeEspecies").style.display = "none";  
        document.getElementById("chart").style.display = "none"; 
        document.getElementById("SomosQ").style.display = "none";
        
 })


    const BotonGraficos = document.getElementById("Graphics");
          BotonGraficos.addEventListener("click", function MostrarGrafico(){
    document.getElementById("chart").style.display = "flex"; 
    document.getElementById("canvas").style.display = "block";
    document.getElementById("SomosQ").style.display = "none"; 
    document.getElementById("contenedorTarjetas").style.display="none";
    document.getElementById("filtroDeEspecies").style.display = "none";  
  })
     
         
 
// *****************************************FILTROS POR CATEGORIAS Y BOTONES*****************************************
  
  //Boton organizacion A-Z

  let BotonOrganizarAz = document.getElementById("personajesAZ");
      BotonOrganizarAz.addEventListener("click", az);
  
 
  function az(){

   let contenedorDeTarjetas=document.getElementById("contenedorTarjetas");//llamamos al Id donde vamos a imprimir
       contenedorDeTarjetas.innerHTML=""// lo vaciamos
   let NombresAZ = organizaAz(Data)
       console.log(NombresAZ)
   for(let i=0;i < NombresAZ.length; i++){//recorremos la nueva data
   clonar(NombresAZ[i].name, NombresAZ[i].status, NombresAZ[i].origin.name, NombresAZ[i].gender, NombresAZ[i].image,NombresAZ[i].episode.length,NombresAZ[i].species) 
  //clonamos los datos a mostrar
  }
  contenedorDeTarjetas.removeChild(contenedorDeTarjetas.childNodes[0]);
}

let BotonOrganizarZa = document.getElementById("personajesZA");
BotonOrganizarZa.addEventListener("click", za);


function za(){

 let contenedorDeTarjetas=document.getElementById("contenedorTarjetas");
     contenedorDeTarjetas.innerHTML=""
let NombresZa = organizaZa(Data)
 for(let i=0;i < NombresZa .length; i++){
  
 clonar(NombresZa[i].name,NombresZa[i].status,NombresZa[i].origin.name, NombresZa[i].gender, NombresZa[i].image, NombresZa[i].episode.length, NombresZa[i].species) 
 }
 contenedorDeTarjetas.removeChild(contenedorDeTarjetas.childNodes[0]);

}
 // *********************************Clonando especies *********************************
  function clonando(Nombres, Estado, Origen, Genero, imagen, Episodios, especies) {//Creamos esta función declarando los parametros a usar
  
    var contenedor = document.getElementById("tarjeta");//reservamos un id en html
    var clon       = contenedor.cloneNode(true);
    clon.style.display          = "inline-flex";
    clon.style.margin           = "1em"        
      
    let nombrePersonaje         =document.getElementById("nombrePersonaje");
    nombrePersonaje.innerHTML   = Nombres;
      
    let estado_personaje        =document.getElementById("estado");
    estado_personaje.innerHTML  = "Estado: "+ Estado;
    
    let lugar_personaje         =document.getElementById("lugarDeOrigen");
    lugar_personaje.innerHTML   = "Lugar De Origen: "+ Origen
                       
    let cantidad_episodios      =document.getElementById("cantidadDeDeEpisodios");
    cantidad_episodios.innerHTML= "Cantidad de episodios: "+ Episodios
      
    let genero_tarjeta          =document.getElementById("genero");
    genero_tarjeta.innerHTML    = "Genero: "+ Genero
    
    let especie_tarjeta         =document.getElementById("especie");
    especie_tarjeta .innerHTML  = "Especie: "+ especies;
    
    
    document.getElementById("imgPersonaje").src = imagen
     
    let contenedorDeEspecies=document.getElementById("filtroDeEspecies");//llamamos el Id donde se imprimira
    contenedorDeEspecies.appendChild(clon);//crea un nuevo nodo con el formato que le dimos
            
  }
    
// *********************************Filtrando especies *********************************

function filtroEspecies(filtro)
{//Creamos una funcion con parametro filtro, asi la re-usaremos
  let especies= Data.filter(item=>{//Declaramos una varible para esta nueva data
    return item.species===filtro//retornara las especies que sean igual al parametro que demos
    })
  
let contenedorDeTarjetas=document.getElementById("filtroDeEspecies");// llamamos el Id donde se imprimira
contenedorDeTarjetas.innerHTML=""//Vaciamos el Id

for(let i=0;i < especies.length; i++){//Recorro nuestra nueva data especies
  clonando(especies[i].name,especies[i].status, especies[i].origin.name, especies[i].gender, especies[i].image, especies[i].episode.length, especies[i].species) 
  //clonamos los datos que buscamos 
}

contenedorDeTarjetas.removeChild(contenedorDeTarjetas.childNodes[0]); 

let botonVolverEspecies=document.createElement("button");
    botonVolverEspecies.innerHTML="VOLVER"
    botonVolverEspecies.setAttribute("type","button")
    botonVolverEspecies.setAttribute("class","volverEspecies")


    botonVolverEspecies.onclick =function especies(){
      document.getElementById("ContenedorFiltrosEspecie").style.display = "block";  
      document.getElementById("filtroDeEspecies").style.display = "none";  
    }
      

let filtroDeEspecies=document.getElementById("filtroDeEspecies")// let boton=document.createElement(document.getElementById("volverEspecies"))
    filtroDeEspecies.appendChild(botonVolverEspecies);

}


// *********************************Filtrando especies *********************************


let BotonHumans = document.getElementById("Humans");
BotonHumans.addEventListener("click",humans);
const Tarjeta = document.getElementsByClassName("tarjeta");

  function humans(){//esta función re-usa filtrar
   filtroEspecies("Human"),//compara especies con Human y muestra las conincidencias
  document.getElementById("contenedorTarjetas").style.display = "none";
  document.getElementById("ContenedorFiltrosEspecie").style.display = "none";  
  document.getElementById("filtroDeEspecies").style.display = "block";  

  }

let BotonAliens = document.getElementById("Alien");
BotonAliens.addEventListener("click",Aliens);
const tarjetaAliens= document.getElementsByClassName("tarjeta");

  function Aliens(){
   filtroEspecies("Alien")
   document.getElementById("contenedorTarjetas").style.display = "none";
   document.getElementById("ContenedorFiltrosEspecie").style.display = "none";  
   document.getElementById("filtroDeEspecies").style.display = "block";  
  }

let BotonRobots = document.getElementById("Robots");
BotonRobots.addEventListener("click",Robots);
const tarjetaRobots= document.getElementsByClassName("tarjeta");

 function Robots(){
   filtroEspecies("Robot")
   document.getElementById("contenedorTarjetas").style.display = "none";
   document.getElementById("ContenedorFiltrosEspecie").style.display = "none";  
   document.getElementById("filtroDeEspecies").style.display = "block";  
  }

let BotonHumanoid = document.getElementById("humanoid");
BotonHumanoid.addEventListener("click",humanoid);
const TarjetaHumanoid = document.getElementsByClassName("tarjeta");

 function  humanoid(){
   filtroEspecies("Humanoid")
   document.getElementById("contenedorTarjetas").style.display = "none";
   document.getElementById("ContenedorFiltrosEspecie").style.display = "none";  
   document.getElementById("filtroDeEspecies").style.display = "block";  
  }
    
let BotonUnknown = document.getElementById("unknown");
BotonUnknown.addEventListener("click",unknown);
const tarjetaUnknown= document.getElementsByClassName("tarjeta");

 function unknown(){
   filtroEspecies("unknown") 
   document.getElementById("contenedorTarjetas").style.display = "none"; 
   document.getElementById("ContenedorFiltrosEspecie").style.display = "none";  
   document.getElementById("filtroDeEspecies").style.display = "block";   
  }

let BotonPoopybutthole= document.getElementById("Poopybutthole");
BotonPoopybutthole.addEventListener("click",Poopybutthole);
const tarjetaPoopybutthole= document.getElementsByClassName("tarjeta");

  function Poopybutthole(){
   filtroEspecies("Poopybutthole")
   document.getElementById("contenedorTarjetas").style.display = "none";
   document.getElementById("ContenedorFiltrosEspecie").style.display = "none";  
   document.getElementById("filtroDeEspecies").style.display = "block";  
 }

 let BotonMytholog= document.getElementById("Mytholog");
 BotonMytholog.addEventListener("click",EspecieMytholog);
 const tarjetaMytholog= document.getElementsByClassName("tarjeta");

 function EspecieMytholog(){
   filtroEspecies("Mytholog")
   document.getElementById("contenedorTarjetas").style.display = "none";
   document.getElementById("ContenedorFiltrosEspecie").style.display = "none";  
   document.getElementById("filtroDeEspecies").style.display = "block";  
 }
  
 let BotonVampire= document.getElementById("Vampire");
 BotonVampire.addEventListener("click",Vampire);
 const tarjetaVampire= document.getElementsByClassName("tarjeta");
 
 function Vampire(){
   filtroEspecies("Vampire")
   document.getElementById("contenedorTarjetas").style.display = "none";
   document.getElementById("ContenedorFiltrosEspecie").style.display = "none";  
   document.getElementById("filtroDeEspecies").style.display = "block";  
  }

 let BotonCronenberg= document.getElementById("Cronenberg");
 BotonCronenberg.addEventListener("click",Cronenberg);
 const tarjetaCronenberg= document.getElementsByClassName("tarjeta");
   
 function Cronenberg(){
   filtroEspecies("Cronenberg")
   document.getElementById("contenedorTarjetas").style.display = "none";
   document.getElementById("ContenedorFiltrosEspecie").style.display = "none";  
   document.getElementById("filtroDeEspecies").style.display = "block";  
  }

 let BotonAnimal= document.getElementById("Animal");
 BotonAnimal.addEventListener("click",Animal);
 const tarjetaAnimal= document.getElementsByClassName("tarjeta");
   
 function Animal(){
   filtroEspecies("Animal")
   document.getElementById("contenedorTarjetas").style.display = "none";
   document.getElementById("ContenedorFiltrosEspecie").style.display = "none";  
   document.getElementById("filtroDeEspecies").style.display = "block";  
  }
  
  let BotonDisease= document.getElementById("Disease");
  BotonDisease.addEventListener("click",Disease);
  const tarjetaDisease= document.getElementsByClassName("tarjeta");
    
  function Disease(){
    filtroEspecies("Disease")
    document.getElementById("contenedorTarjetas").style.display = "none";
    document.getElementById("ContenedorFiltrosEspecie").style.display = "none";  
    document.getElementById("filtroDeEspecies").style.display = "block";  
 }
 
  let BotonParasite= document.getElementById("Parasite");
  BotonParasite.addEventListener("click",Parasite);
  const tarjetaParasite= document.getElementsByClassName("tarjeta");
    
  function Parasite(){
    filtroEspecies("Parasite")
    document.getElementById("contenedorTarjetas").style.display = "none";
    document.getElementById("ContenedorFiltrosEspecie").style.display = "none";  
    document.getElementById("filtroDeEspecies").style.display = "block";  
   
  }
  
  // ***************************CANVAS ******************************

fetch("https://rickandmortyapi.com/api/episode")//Fetch nos permite acceder a datos que nos proporciona http
      .then(response => response.json() )//llamamos el archivo Json
      .then(data =>{
  
  let LosEpisodio= data.results.map(item => item.name)//recorremos la data y declaramos una variable que guardara los nombres de episodios 
  // let epi = document.getElementById("fetch")//declaramos el Id donde imprimiremos
  //     createElement("button")// epi.innerHTML = ` Nombre de los episodios: <br> <li>${LosEpisodio}</li> `//Imprimimos los nombres de episodios



  const canvas      = document.getElementById("canvas");//declaramos el Id donde imprimiremos Canvas
  const LosEpisodios= data.results.map(item => item.name);// Recorremos la data, declaramos la variable que guarda el nombre del episodio 
  const Personajes  = data.results.map(item => item.characters.length)//Recorremos la data, declaramos la variable donde guarda la cantidad de personajes según el episodio
  const MyChart     = new Chart(canvas,{// Chart nos permite crear graficas
    
       type: "bar",//el tipo de grafica que usamos en este caso barras
       data: {
            labels: LosEpisodios,//Llamamos la data que vamos a graficar
            datasets:[
        {
             label:"Cantidad de Personajes",
             data:Personajes,
             backgroundColor:[ "#48E71C","#f1f1f1","#f0b8b8","#7EC96D","#BDD771","#FFCB55",
          "#e67f83", "#d43d51", "#665191","#a05195","#003f5c", "#ffa600", "#19B974","#DE9E54","#333f6c","#A36B22","#2f4b7c","#d45087","#FFD588","#FB4F93" ],
             borderColor: ["#f1f1f1",
            ],
             borderWidth: 1.5,

        }]
      }})  

    })