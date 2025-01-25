const div1 = document.getElementById("divUno")
const div2 = document.getElementById("divDos")
const div3 = document.getElementById("divTres")
const div4 = document.getElementById("divCuatro")



div1.addEventListener("click", () =>{
    pintarNegro(div1, "black")
})

div2.addEventListener("click", () =>{
    pintarNegro(div2, "black")
})

div3.addEventListener("click", () =>{
    pintarNegro(div3, "black")
})

div4.addEventListener("click", () =>{
    pintarNegro(div4, "black")
})


const pintarNegro = (elemento, color) =>{
    elemento.style.backgroundColor = color
  }

pintarNegro()  




