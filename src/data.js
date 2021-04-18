
export const subir=()=> {
let trayendoBoton = document.documentElement.scrollTop;
if (trayendoBoton > 0) {
  window.scrollTo (0,0);
} }

// export const filtroEspecies=(filtro)=>{//Creamos una funcion con parametro filtro, asi la re-usaremos
//   let especies= Data.filter(item=>{//Declaramos una varible para esta nueva data
//     return item.species===filtro//retornara las especies que sean igual al parametro que demos
//     })
//     console.log(especies)
// }

export const organizaAz = (Data)=>Data.sort((personajes1,personajes2)=>{
   return (personajes1.name<personajes2.name)? -1 :1
})



export const organizaZa = (Data)=>Data.sort((personajes1,personajes2)=>{
    return (personajes1.name>personajes2.name)? -1 :1
})


export const statusDePersonajes = (data) => {
	let alive = 0;
	let dead = 0;
	let unknown = 0;

	data.forEach((character) => {
		switch (character.status) {
		  case 'Alive':
		    alive += 1;
		    break;
		  case 'Dead':
		    dead += 1;
		    break;
		  case 'unknown':
		  	unknown += 1;
		}
	});
	return [ alive, dead, unknown ]
}

