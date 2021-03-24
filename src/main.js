import { example } from './data.js';

// console.log(example, data);

import data from './data/rickandmorty/rickandmorty.js';

//  console.log(data.results);

 const Informacion = data.results;
 const nombrePersonajes=Informacion.sort((personajes1,personajes2)=>{
 return (personajes1.name<personajes2.name)? -1 :1//
 })
//console.log(nombrePersonajes) a-z

 const status=Informacion.filter(status=> {
     return status!=="Dead"
 })
// console.log(status)
 
 for (let i=0;i < Informacion.length;i++){
     let categoriaNombre = Informacion[i].name;
     console.log(categoriaNombre);
 }

 for (let i=0;i < Informacion.length;i++){
     //let categoriaGenero = Informacion[i].gender;


    //console.log(categoriaGenero);
    }

 for (let i=0;i < Informacion.length;i++){
    let categoriaEspecie = Informacion[i].species;
    //console.log(categoriaEspecie);
    }


//  let Personaje =  Informacion.filter(function(Genero) {
//     return Genero.gender == "male";
    





// for (var i = 0, max = dataresults.length; i < max; i += 1) {
 
//     dataresults.push(data[i].name);
 

//   console.log(dataresults)
 



 