const div = document.getElementById("key")


document.addEventListener('keydown', function (event) {
    if (event.key === "a") {
      pintar("pink")
    
    } else if (event.key === "s") {
      pintar("orange")

    } else if(event.key === "d"){
      pintar("cyan")

    } else if(event.key === "q") {
        crear("purple")
      
      } else if (event.key === "w") {
          crear("grey")

      } else if(event.key === "e"){
          crear("brown")

      }
    })


const pintar = (color) =>{
    div.style.backgroundColor = color
}





const crear = (color) =>{
   const contenedor = document.getElementById("cont")
   const nuevoElemento = document.createElement("div")
   nuevoElemento.style.backgroundColor = color
   nuevoElemento.style.width = "200px"
   nuevoElemento.style.height = "200px"
   nuevoElemento.style.border = "4px solid black"
   contenedor.appendChild(nuevoElemento)
   
}