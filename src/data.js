const prueba = {
subir
}

function subir(){
    let trayendoBoton = document.documentElement.scrollTop;
    if (trayendoBoton > 0) {
      window.scrollTo (0,0);
    } 
  };

export const organizaAz = (Data)=>Data.sort((personajes1,personajes2)=>{
   return (personajes1.name<personajes2.name)? -1 :1
   
//    clonar(Nombres, Origen, Genero, imagen, Episodios)
    
})



export const organizaZa = (Data)=>Data.sort((personajes1,personajes2)=>{
    return (personajes1.name>personajes2.name)? -1 :1
 //    clonar(Nombres, Origen, Genero, imagen, Episodios)
      
 })
 ;

export default prueba;