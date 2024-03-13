let imagenFondo, rect1, segundoTexto, capaAzul, textoCorto1Div, imagen1, imagen2, imagen3,canteras1;
let dosImagenes, canterasTexto1p, canterasTexto2p, canterasTextoH1, contenedor, textoCorto3Div, textoCorto2Div, formularioInterior;
let arrayOpacity, arrayRetratos;
document.addEventListener("DOMContentLoaded", () => {
    imagenFondo = get("back-image");   segundoTexto = get("segundo-texto");  capaAzul = get("capa-azul");  textoCorto1Div = get("texto-corto1-div");
    imagen1 = get("imagen1");  imagen2 = get("imagen2");
    imagen3 = get("imagen3");  canteras1 = get("canteras1");
    dosImagenes = get("dos-imagenes"); canterasTexto1p = get("canteras-texto-1p");
    canterasTexto2p = get("canteras-texto-2p"); canterasTextoH1 = get("canteras-texto-h1");
    textoCorto3Div = get("texto-corto3-div"); textoCorto2Div = get("texto-corto2-div");
    contenedor = get("contenedor"); arrayRetratos = document.getElementsByClassName("retrato");
    formularioInterior = get("formulario-interior");
    arrayOpacity = [imagen1, imagen2, imagen3, dosImagenes, canterasTexto1p, textoCorto1Div, canterasTexto1p, canterasTexto2p, 
        canterasTextoH1, contenedor.children[0], contenedor.children[1], contenedor.children[2], contenedor.children[3], 
        contenedor.children[4], textoCorto3Div, formularioInterior];
    setOpacity(arrayOpacity);
    setOpacity(arrayRetratos);
    mover(textoCorto1Div, "y", -200);   mover(imagen1, "x", -100); mover(imagen2, "y", 100);   mover(imagen3, "x", 100);
    mover(canterasTexto1p, "y", 200); mover(canterasTexto2p, "y", 200); mover(canterasTextoH1, "y", 200); mover(dosImagenes, "x", -100);
    mover(contenedor.children[0], "y", -250);  mover(contenedor.children[1], "y", -200); mover(arrayRetratos[0], "x", -200); mover(arrayRetratos[1], "x", -200);
    mover(arrayRetratos[2], "x", 200); mover(arrayRetratos[3], "x", 200); mover(arrayRetratos[4], "x", -200); mover(arrayRetratos[5], "x", -200);
    mover(arrayRetratos[6], "x", 200); mover(arrayRetratos[7], "x", 200);  mover(textoCorto3Div, "y", 200); mover(textoCorto2Div, "y", 200);
    for (let i = 2; i < contenedor.children.length; i++) {
        mover(contenedor.children[i], "y", 200);
    }
})

document.addEventListener("scroll", () => {
    if(canteras1.offsetHeight>=window.innerHeight){
        rect1 = segundoTexto.getBoundingClientRect();
        if (rect1.top < window.innerHeight) {
            imagenFondo.src = "img/Gran_Canaria.jpg";
            capaAzul.style.backgroundColor = "rgba(20, 20, 20, 0.700)";
        }
        else {
            imagenFondo.src = "img/mar_fondo.jpg";
            capaAzul.style.backgroundColor = "rgba(29, 95, 126, 0.700)";
        }
    }
    animar(textoCorto1Div, 300);  animar(imagen1, 200); animar(imagen2, 100);   animar(imagen3, 200);
    animar(dosImagenes, 300);  animar(canterasTexto1p, 100); animar(canterasTexto2p, 100);  animar(canterasTextoH1, 0);
    animar(contenedor.children[0], 400); animar(contenedor.children[1], 400); animar(textoCorto2Div, 0);
    animar(textoCorto3Div, 0);    animar(formularioInterior, 300);
    for (let i = 2; i < contenedor.children.length; i++) {
        animar(contenedor.children[i], 100);
    }
    for (let i = 0; i < arrayRetratos.length; i++) {
        animar(arrayRetratos[i], 200);
    }
  
})

function mover(elemento, direccion, distancia) {
    if (direccion === "y")
        elemento.style.transform = `translateY(${distancia}px)`;
    else
        elemento.style.transform = `translateX(${distancia}px)`;
}

function comprobarTop(elemento, distancia) {
    return elemento.getBoundingClientRect().top < window.innerHeight - distancia;
}

function get(id) {
    return document.getElementById(id);
}

function setOpacity(array) {
    for (let i = 0; i < array.length; i++) {
        array[i].style.opacity = 0;
    }
}

function animar(elemento, distancia) {
    if (comprobarTop(elemento, distancia)) {
        elemento.style.opacity = 1;
        elemento.style.transform = "translateX(0px) translateY(0px)";
    }
}