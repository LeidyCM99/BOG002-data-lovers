import { example } from './data.js';

import data from './data/rickandmorty/rickandmorty.js';
let Data = data.results;


//***************************************** Boton de busqueda*****************************************

const Busqueda = document.getElementById("input-buscador");
const Boton = document.getElementById("Buscar");

Boton.addEventListener("click",BuscandoDEntroDeData)
   

function BuscandoDEntroDeData(){
const Resultado = Busqueda.value;
//     for(let TodaLaData of Data){
//         let SacarData = TodaLaData.name;

//         if (SacarLaData.indexOf(Resultado)!==-1){
//          console.log(SacarData)
//         }}}
            
           

//  for(let datos of Data ){
//         let nombre = datos.name;
//         if (nombre.indexOf(Resultado)!==-1){
            
//         }
//     }

    console.log(Resultado)}

// *****************************************Lista de links*****************************************

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
})
// document.getElementById("ParrafoDePrueba").innerHTML +=  ArrNuevo;
// console.log(ArrEpisodios) 
console.log(ArrNuevo.toString()) 
    
}})


//******************** */ RESULTADOS DE DATA SEGUN NOMBRE, GENERO, ETC ************************************
//  

//  let Data = data.results;
 const nombrePersonajes=Data.sort((personajes1,personajes2)=>{
 return (personajes1.name<personajes2.name)? -1 :1//
 })
//console.log(nombrePersonajes) a-z

 const status=Data.filter(status=> {
     return status!=="Dead"
 })
// console.log(status)
 
let NombreDePersonajes = document.getElementById("ListaPersonajes");
NombreDePersonajes.addEventListener("click",
function(){
 for (let i=0;i < Data.length;i++){
     let categoriaNombre = Data[i].name;

     console.log(categoriaNombre)}

    })



//  for (let i=0;i < Data.length;i++){
     //let categoriaGenero = Informacion[i].gender;


    //console.log(categoriaGenero);
    // }

 for (let i=0;i < Data.length;i++){
    let categoriaEspecie = Data[i].species;
    //console.log(categoriaEspecie);
    }


//  let Personaje =  Informacion.filter(function(Genero) {
//     return Genero.gender == "male";
    


 

