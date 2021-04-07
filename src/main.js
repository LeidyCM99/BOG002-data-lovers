//import { filtroDimensiones } from './data.js';

import data from './data/rickandmorty/rickandmorty.js';//importamos la data accediendo a su ubicación
const Data = data.results;//variable que guarda y accede al array [results]



//***************************************** BOTONES*****************************************



const Busqueda = document.getElementById("input-buscador");//guardamos el valor ingresado en el input 
const Boton = document.getElementById("Buscar");//enlazamos nuestro boton 
      Boton.addEventListener("click",BuscandoDEntroDeData);//le creamos un evento click 

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
        Tarjeta[i].style.display = "block";
      } else {
        Tarjeta[i].style.display = "none"; 
      }
      }}

    
     

function BuscandoFemale(){
      const Result = "FEMALE";
      const Tarjeta = document.getElementsByClassName("tarjeta");
        
    
        for (let i=0;i < Data.length;i++){
          if(Tarjeta[i].textContent.toUpperCase().includes(Result)) {
            Tarjeta[i].style.display = "block";
          } else {
            Tarjeta[i].style.display = "none"; }
          }}


          
function BuscandoMale(){
  
            const BuscarLaPalabra = " MALE";
            const Tarjeta = document.getElementsByClassName("tarjeta");
              
          
              for (let i=0;i < Data.length;i++){
                if(Tarjeta[i].textContent.toUpperCase().includes(BuscarLaPalabra)) {
                  Tarjeta[i].style.display = "block";
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
     clonar(Nombres, Origen, Genero, imagen, Episodios) //ejecutamos la funcion clonar con los datos del parametro
  }}


document.getElementById("tarjeta").style.display = "none";




function clonar(Nombres, Origen, Genero, Imagen, Episodios) {//Creamos esta función declarando los parametros a usar

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

// ***********OCULTAR Y MOSTRAR SECCIONES ***********


let QuienesSomos=  document.getElementById("Somos");
    QuienesSomos.addEventListener("click",function (){
          document.getElementById("contenedorTarjetas").style.display = "none";
          document.getElementById("SomosQ").style.display = "block";  
          document.getElementById("filtroAZ").style.display="none";    
  })

  let Home=  document.getElementById("Home");
      Home.addEventListener("click",function (){
          document.getElementById("contenedorTarjetas").style.display = "block";
          document.getElementById("SomosQ").style.display = "none"; 
          document.getElementById("filtroAZ").style.display="none";
         
  })

  // *****************************************FILTROS POR CATEGORIAS Y BOTONES*****************************************
  
  //Boton organizacion A-Z

  let BotonOrganizarAz = document.getElementById("personajesAZ");
  BotonOrganizarAz.addEventListener("click", az);
  
 
  function az(){
   let organizaAz = Data.sort((personajes1,personajes2)=>{
    return (personajes1.name < personajes2.name)? -1 :1
  })
  let nombres =[];
  let origen  =[];
  let genero  =[];
  let episodios=[];
  let imagen  =[];

   for(let i=0;i < organizaAz.length; i++){
     nombres.push(organizaAz[i].name) ;
      origen.push(organizaAz[i].origin.name);
      genero.push(organizaAz[i].gender);
   episodios.push(organizaAz[i].episode.length);
      imagen.push(organizaAz[i].image);
  }
   let contenedorDeTarjetas=document.getElementById("contenedorTarjetas");
   let contenedor = document.getElementById("tarjeta");
   contenedorDeTarjetas.appendChild(contenedor)
   clonar(nombres, origen, genero, imagen, episodios) //ejecutamos la funcion clonar con los datos del parametro
   console.log(nombres) 
   }
   
  //  console.log(JSON.parse(StringJson));
  // document.getElementById("filtroAZ").innerHTML=JSON.stringify(organizaAz);
    document.getElementById("contenedorTarjetas").style.display = "block";
    document.getElementById("filtroAZ").style.display="none";
  //  document.getElementById("SomosQ").style.display = "none"; 
  

