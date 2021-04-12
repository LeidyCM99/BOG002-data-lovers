//import { filtroEspecies } from './data.js';


import data from './data/rickandmorty/rickandmorty.js';//importamos la data accediendo a su ubicación
const Data = data.results;//variable que guarda y accede al array [results]


//***************************************** BOTONES*****************************************

const Busqueda = document.getElementById("input-buscador");//guardamos el valor ingresado en el input 
const Boton = document.getElementById("Buscar");//enlazamos nuestro boton buscar
      Boton.addEventListener("click",Buscando);//le creamos un evento click para que ejecute la funcion dada

const BotonMujeres = document.getElementById("GeneroMujeres");//Botones que nos ejecutan la función cuando se de el evento click
      BotonMujeres.addEventListener("click", BuscandoFemale);

const BotonH = document.getElementById("GeneroHombres");
      BotonH.addEventListener("click", BuscandoMale);

// *****************************************FILTRO DE BUSQUEDA*****************************************

function BuscandoDEntroDeData(Buscando){//Creamos una función que filtrara la data sobre el parametro Buscando
    let Resultado = Buscando.toUpperCase();//Declaramos buscando en una variable y la condicionamos a ser MAYUSCULA
    const Tarjeta = document.getElementsByClassName("tarjeta");//Llamamos la clase que alojara lo filtrado
    
    for (let i=0;i < Data.length;i++){//Recorremos la data
      if(Tarjeta[i].textContent.toUpperCase().includes(Resultado)) {//si el contenido concide con el Resultado
        Tarjeta[i].style.display = "inline-flex";//la tarjeta se motrara
      } else {
        Tarjeta[i].style.display = "none"; //si no conside la tarjeta no se motrara
        document.getElementById("tarjeta").style.display="none"
      }
    }
      contenedorDeTarjetas.removeChild(contenedorDeTarjetas.childNodes[0]);
}

function Buscando(){//creamos una función que re-usa a Buscando data
  BuscandoDEntroDeData(Busqueda.value)     //esta buscara el valor que se ingre en el input busqueda
  const Tarjeta = document.getElementsByClassName("tarjeta");//se mostraran las que coincidan
}

function BuscandoFemale(){//creamos una función que re-usa a Buscando Female
 BuscandoDEntroDeData("FEMALE")//aqui buscara sobre la data toda la coincidencia con Female
 const Tarjeta = document.getElementsByClassName("tarjeta");//se mostraran las que coincidan
}        

function BuscandoMale(){//creamos una función que re-usa a Buscando Male
  BuscandoDEntroDeData(" MALE")//aqui buscara sobre la data toda la coincidencia con Male
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

   let organizaAz = Data.sort((personajes1,personajes2)=>{//declaramos una variable que organizara la data por el medio sort
    
    return (personajes1.name < personajes2.name)? -1 :1 //retornamos los argumentos y comparamos por un operador ternario
    
   } )
   
   let contenedorDeTarjetas=document.getElementById("contenedorTarjetas");//llamamos al Id donde vamos a imprimir
   contenedorDeTarjetas.innerHTML=""// lo vaciamos
   for(let i=0;i < organizaAz.length; i++){//recorremos la nueva data
   clonar(organizaAz[i].name,organizaAz[i].status, organizaAz[i].origin.name, organizaAz[i].gender, organizaAz[i].image,organizaAz[i].episode.length,organizaAz[i].species) 
  //clonamos los datos a mostrar
  }
  contenedorDeTarjetas.removeChild(contenedorDeTarjetas.childNodes[0]);
}

let BotonOrganizarZa = document.getElementById("personajesZA");
BotonOrganizarZa.addEventListener("click", za);


function za(){
let organizaZa = Data.sort((personajes1,personajes2)=>{//organizamos la data nuevamente con sort
 return (personajes1.name > personajes2.name)? -1 :1// la nueva comparación organizara de mayor a menor 
 })

 let contenedorDeTarjetas=document.getElementById("contenedorTarjetas");
 contenedorDeTarjetas.innerHTML=""

 for(let i=0;i < organizaZa.length; i++){
  
 clonar(organizaZa[i].name,organizaZa[i].status, organizaZa[i].origin.name, organizaZa[i].gender, organizaZa[i].image,organizaZa[i].episode.length,organizaZa[i].species) 
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

function filtroEspecies(filtro){//Creamos una funcion con parametro filtro, asi la re-usaremos
  let especies= Data.filter(item=>{//Declaramos una varible para esta nueva data
    return item.species===filtro//retornara las especies que sean igual al parametro que demos
    })
  
let contenedorDeTarjetas=document.getElementById("filtroDeEspecies");// llamamos el Id donde se imprimira
contenedorDeTarjetas.innerHTML=""//Vaciamos el Id
for(let i=0;i < especies.length; i++){//Recorro nuestra nueva data especies
  clonando(especies[i].name,especies[i].status, especies[i].origin.name, especies[i].gender, especies[i].image, especies[i].episode.length, especies[i].species) 
  //clonamos los datos que buscamos 
}

let contenedor = document.getElementById("tarjeta");
contenedorDeTarjetas.appendChild(contenedor)
contenedorDeTarjetas.removeChild(contenedorDeTarjetas.childNodes[0]);    
}

// *********************************Filtrando especies *********************************


let BotonHumans = document.getElementById("Humans");
BotonHumans.addEventListener("click",humans);
const Tarjeta = document.getElementsByClassName("tarjeta");

  function humans(){//esta función re-usa filtrar
   filtroEspecies("Human"),//compara especies con Human y muestra las conincidencias
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

fetch("https://rickandmortyapi.com/api/episode")//Fetch nos permite acceder a datos que nos proporciona http
.then(response => response.json() )//llamamos el archivo Json
.then(data =>{
  console.log(data.results)
  let LosEpisodio= data.results.map(item => item.name)//recorremos la data y declaramos una variable que guardara los nombres de episodios 
  let epi = document.getElementById("fetch")//declaramos el Id donde imprimiremos
      epi.innerHTML = ` Nombre de los episodios: <br> <li>${LosEpisodio}</li> `//Imprimimos los nombres de episodios

  const canvas = document.getElementById("canvas");//declaramos el Id donde imprimiremos Canvas
  
  const LosEpisodios=data.results.map(item => item.name);// Recorremos la data, declaramos la variable que guarda el nombre del episodio 
  const Personajes= data.results.map(item => item.characters.length)//Recorremos la data, declaramos la variable donde guarda la cantidad de personajes según el episodio
  const MyChart= new Chart(canvas,{// Chart nos permite crear graficas
    type: "bar",//el tipo de grafica que usamos en este caso barras
    data: {
      labels: LosEpisodios,//Llamamos la data que vamos a graficar
      datasets:[
        {
          label:"Cantidad de Personajes",
          data:Personajes,//Llamamos la data que vamos a graficar
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