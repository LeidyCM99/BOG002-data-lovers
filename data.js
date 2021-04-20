
export const subir=()=> {
let trayendoBoton = document.documentElement.scrollTop;
if (trayendoBoton > 0) {
  window.scrollTo (0,0);
} }


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

// export const cantidad =(Data) => {

// 	Data.map(item => item.name);
// 	let PersonajesTotales = cantidad.length;

// 	const CantidadMuertes = Data.filter(function(element){
// 		return element.status === "Dead";
//   });

//   let MuertesTotales = CantidadMuertes.length
//   console.log(PersonajesTotales)
// }
