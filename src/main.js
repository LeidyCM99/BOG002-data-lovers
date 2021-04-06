//import { filtroDimensiones } from './data.js';

import data from './data/rickandmorty/rickandmorty.js';//importamos la data accediendo a su ubicación
const Data = data.results;//variable que guarda y accede al array [results]



//***************************************** BOTON DE BUSQUEDA*****************************************



const Busqueda = document.getElementById("input-buscador");//guardamos el valor ingresado en el input 
const Boton = document.getElementById("Buscar");//enlazamos nuestro boton 
Boton.addEventListener("click",BuscandoDEntroDeData);//le creamos un evento click 
   

// *****************************************FILTRO DE BUSQUEDA*****************************************

function BuscandoDEntroDeData(){//ejecutamos la función Busqueda
    const Resultado = Busqueda.value.toUpperCase();//traemos el valor buscado
    const Tarjeta = document.getElementsByClassName("tarjeta");
    

    for (let i=0;i < Data.length;i++){
      if(Tarjeta[i].textContent.toUpperCase().includes(Resultado)) {
        Tarjeta[i].style.display = "block";
      } else {
        Tarjeta[i].style.display = "none"; }
      }}
  
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

  let contenedorDeTarjetas=document.getElementById("contenedorTarjetas")
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
   return (personajes1.name < personajes2.name)? -1 :1})
 
   for(let i=0;i < organizaAz.length; i++){
    const Nombres   =organizaAz[i].name;
    const Origen    =organizaAz[i].origin.name;
    const Genero    =organizaAz[i].gender;
    const Episodios =organizaAz[i].episode.length;
    const imagen    =organizaAz[i].image;

   clonar(Nombres, Origen, Genero, imagen, Episodios) //ejecutamos la funcion clonar con los datos del parametro
   console.log(Nombres) 
  }
   
  //  console.log(JSON.parse(StringJson));
  // document.getElementById("filtroAZ").innerHTML=JSON.stringify(organizaAz);
    document.getElementById("contenedorTarjetas").style.display = "block";
    document.getElementById("filtroAZ").style.display="none";
  //  document.getElementById("SomosQ").style.display = "none"; 
  }


// **********Filtro de genero/**********


  const generoData=[];
  
  for(let i=0;i < Data.length; i++){
  generoData.push(Data[i].gender);
   if (Data[i].gender=="Female") {
    
     console.log(generoData.indexOf("Female"))
    }
 
   }



let BotonMujeres = document.getElementById("GeneroMujeres");
BotonMujeres.addEventListener("click", filtergenderF)

function filtergenderF(){
   let genderF= Data.filter(genero=>{
  return genero.gender==="Female"
 })
  console.log(genderF)
}

let BotonHombres = document.getElementById("GeneroHombres");
BotonHombres.addEventListener("click", filtergenderM)
function filtergenderM(){
  let genderM=Data.filter(genero=>{
   return genero.gender==="Male"
   })
console.log(genderM)
}

let BotonGeneroDesc = document.getElementById("ListaPersonajes");
BotonGeneroDesc.addEventListener("click", filtergenderU)
 
function filtergenderU(){
let genderU=Data.filter(genero=>{
return genero.gender=== "unknown"

})

// console.log(genderU)
}


// let BotonListaDeNombres = document.getElementById("ListaPersonajes");
// BotonListaDeNombres.addEventListener("click", function(Nombres){
 

// for (let i = 0; i < Data.length; i++) {
//   let Nombres = Data[i].name;
 
// document.getElementById("ListaDeNombres").style.display = "block"
// document.getElementById("contenedorTarjetas").style.display = "none";
// document.getElementById("filtroAZ").style.display="none";
// document.getElementById("ListaDeNombres").innerHTML= Nombres ;
// } 
// }
// )
