//declarando variables
const botonIngresar = document.getElementById("botonIngresar");
const nombre = document.getElementById("nombre");

const paginaUno = document.getElementById("pag-uno");
const paginaDos = document.getElementById("pag-dos");
const saludo = document.getElementById("saludo");

const botonMarvel = document.getElementById("botonMarvel");
const preguntaMarvelUno = document.getElementById("preguntaMarvelUno");
const correctoMarvelUno = document.getElementById("correctoMarvelUno");
const incorrectoMarvelUno = document.getElementById("incorrectoMarvelUno");
const preguntaMarvelDos = document.getElementById("preguntaMarvelDos");
const correctoMarvelDos = document.getElementById("correctoMarvelDos");
const incorrectoMarvelDos = document.getElementById("incorrectoMarvelDos");
const preguntaMarvelTres = document.getElementById("preguntaMarvelTres");
const correctoMarvelTres = document.getElementById("correctoMarvelTres");
const incorrectoMarvelTres = document.getElementById("incorrectoMarvelTres");
const sumaPuntosMarvel = document.getElementById("sumaPuntosMarvel");
const resultadoMarvel = document.getElementById ("resultadoMarvel")
let totalMarvel= 0;

const botonDc = document.getElementById ("botonDc");
const preguntaUnoDc = document.getElementById("preguntaUnoDc");
const correctoDcUno = document.getElementById("correctoDcUno");
const incorrectoDcUno = document.getElementById("incorrectoDcUno");
const preguntaDosDc = document.getElementById("preguntaDosDc");
const correctoDcDos = document.getElementById("correctoDcDos");
const incorrectoDcDos = document.getElementById("incorrectoDcDos");
const preguntaTresDc = document.getElementById("preguntaTresDc");
const correctoDcTres = document.getElementById("correctoDcTres");
const incorrectoDcTres = document.getElementById("incorrectoDcTres");
const sumaPuntosDc = document.getElementById("sumaPuntosDc");
const resultadoDc = document.getElementById("resultadoDc");
const resultadoTotalDc= document.getElementById("resultadoTotalDc");
let totalDc= 0;

const volverAlInicioMarvel=document.getElementById("volverAlInicioMarvel");
const volverAlInicioDc=document.getElementById("volverAlInicioDc")

paginaDos.style.display = "none"

preguntaMarvelUno.style.display ="none"
preguntaMarvelDos.style.display="none"
preguntaMarvelTres.style.display="none"
resultadoMarvel.style.display="none"
preguntaUnoDc.style.display="none"
preguntaDosDc.style.display="none"
preguntaTresDc.style.display="none"
resultadoDc.style.display="none"

//Eventos

botonIngresar.addEventListener("click",()=>{
let nombreJugador = nombre.value;
paginaUno.style.display = "none"
paginaDos.style.display = "block"
saludo.innerHTML="Hola, "+nombreJugador+"";
});

botonMarvel.addEventListener("click",()=>{
  paginaDos.style.display="none"
  preguntaMarvelUno.style.display="block"

});

correctoMarvelUno.addEventListener("click",()=>{
  totalMarvel++
  console.log(totalMarvel)
  preguntaMarvelUno.style.display="none"
  preguntaMarvelDos.style.display="block"

});

incorrectoMarvelUno.addEventListener("click",()=>{
  console.log(totalMarvel)
  preguntaMarvelUno.style.display="none"
  preguntaMarvelDos.style.display="block"

  });

correctoMarvelDos.addEventListener("click",()=>{
  totalMarvel++
  console.log(totalMarvel)
  preguntaMarvelDos.style.display="none"
  preguntaMarvelTres.style.display="block"

});

incorrectoMarvelDos.addEventListener("click",()=>{
  preguntaMarvelDos.style.display="none"
  preguntaMarvelTres.style.display="block"

});

correctoMarvelTres.addEventListener("click",()=>{
  totalMarvel++
  console.log(totalMarvel);      
  preguntaMarvelTres.style.display="none"
  resultadoMarvel.style.display="block"
  resultadoMarvelFinal.innerHTML="Tu puntaje es "+totalMarvel+"";
  
  
  let message
if (totalMarvel == 3) {
  message = "¡Excelente! Has demostrado ser el mejor fan del comic";
  0
  } else if (totalMarvel == 2) {
    message = "¡Eres un super fan de este universo!";
  } else if (totalMarvel == 1) {
    message="Vas por buen camino a ser un buen fanático del comic";
  } else{
    message = "Uy, deberías averiguar un poco más sobre este universo, ¡sigue intentando!";
    
    }
    const mensajeUno = document.getElementById("mensaje-uno")
mensajeUno.innerHTML = message;
console.log(message);
totalMarvel=0
});


incorrectoMarvelTres.addEventListener("click",()=>{
  preguntaMarvelTres.style.display="none"
  resultadoMarvel.style.display="block"
  resultadoMarvelFinal.innerHTML="Tu puntaje es "+totalMarvel+"";
 
  
  let message
if (totalMarvel == 3) {
  message = "¡Excelente! Has demostrado ser el mejor fan del comic";
  } else if (totalMarvel == 2) {
    message = "¡Eres un super fan de este universo!";
  } else if (totalMarvel == 1) {
    message="Vas por buen camino a ser un buen fanático del comic";
  } else{
    message = "Uy, deberías averiguar un poco más sobre este universo, ¡sigue intentando!";
    
    }
    const mensajeUno = document.getElementById("mensaje-uno")
mensajeUno.innerHTML = message;
console.log(message);
totalMarvel=0
});

volverAlInicioMarvel.addEventListener("click",()=>{
  resultadoMarvel.style.display="none" 
  paginaDos.style.display ="block"
  saludo.innerHTML="Hola,"+nombreJugador+""; 
});

//Segundo Evento

botonDc.addEventListener("click",()=>{
  resultadoMarvel.style.display="none"
  paginaDos.style.display="none"
  preguntaUnoDc.style.display="block"

});

correctoDcUno.addEventListener("click",()=>{
  totalDc++
  console.log(totalDc)
  preguntaUnoDc.style.display="none"
  preguntaDosDc.style.display="block"

});

incorrectoDcUno.addEventListener("click",()=>{
  console.log(totalDc)
  preguntaUnoDc.style.display="none"
  preguntaDosDc.style.display="block"

  });

correctoDcDos.addEventListener("click",()=>{
  totalDc++
  console.log(totalDc)
  preguntaDosDc.style.display="none"
  preguntaTresDc.style.display="block"

});


incorrectoDcDos.addEventListener("click",()=>{
  preguntaDosDc.style.display="none"
  preguntaTresDc.style.display="block"

});

correctoDcTres.addEventListener("click",()=>{
  totalDc++
  console.log(totalDc)
  preguntaTresDc.style.display="none"
  resultadoDc.style.display="block"
  resultadoTotalDc.innerHTML="Tu resultado es "+totalDc+"";
  
  let message
if (totalDc == 3) {
  message = "¡Excelente! Has demostrado ser el mejor fan del comic";
  } else if (totalDc == 2) {
    message = "¡Eres un super fan de este universo!";
  } else if (totalDc == 1) {
    message="Vas por buen camino a ser un buen fanático del comic";
  } else{
    message = "Uy, deberías averiguar un poco más sobre este universo, ¡sigue intentando!";
    
    }
    const mensajeDos = document.getElementById("mensaje-dos")
mensajeDos.innerHTML = message;
console.log(message);
totalDc=0
});

incorrectoDcTres.addEventListener("click",()=>{
  preguntaTresDc.style.display="none"
  resultadoDc.style.display="block"
  resultadoTotalDc.innerHTML="Tu resultado es " +totalDc+ "";
    let message
if (totalDc == 3) {
  message = "¡Excelente! Has demostrado ser el mejor fan del comic";
  } else if (totalDc == 2) {
    message = "¡Eres un super fan de este universo!";
  } else if (totalDc == 1) {
    message="Vas por buen camino a ser un buen fanático del comic";
  } else{
    message = "Uy, deberías averiguar un poco más sobre este universo, ¡sigue intentando!";
    
    }
    const mensajeDos = document.getElementById("mensaje-dos")
mensajeDos.innerHTML = message;
console.log(message); 
totalDc=0
});
 
volverAlInicioDc.addEventListener("click",()=>{
  resultadoDc.style.display="none" 
  paginaDos.style.display ="block"
  saludo.innerHTML="Hola,"+nombreJugador+""; 
});
 
 
