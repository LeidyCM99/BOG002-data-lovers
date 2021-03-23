import { example } from './data.js';
// import data from './data/lol/lol.js';
// import data from './data/pokemon/pokemon.js';


// console.log(example, data);

import data from './data/rickandmorty/rickandmorty.js';

//  console.log(data.results);

 let Informacion = data.results;

 for (let i=0;i < Informacion.length;i++){
     let p = Informacion[i].name;
     console.log(p);
 }

//  let Personaje =  Informacion.filter(function(Genero) {
//     return Genero.gender == "male";
    





// for (var i = 0, max = dataresults.length; i < max; i += 1) {
 
//     dataresults.push(data[i].name);
 

//   console.log(dataresults)
 



 