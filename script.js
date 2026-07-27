
// Sección activa
function mostrar(id){

const secciones=document.querySelectorAll("main section");

secciones.forEach(seccion=>{
    seccion.style.display="none";
});

document.getElementById(id).style.display="block";

}

// Buscar partido (por ahora es una versión inicial)
function buscarPartido(){

const partido=document.getElementById("buscarPartido").value.trim();

const resultado=document.getElementById("resultadoBusqueda");

if(partido===""){
    resultado.innerHTML="<p>⚠ Escribe un partido.</p>";
    return;
}

resultado.innerHTML=`
<h3>🔎 Buscando...</h3>

<p><b>Partido:</b> ${partido}</p>

<p>En la siguiente versión BetVision AI consultará TheSportsDB automáticamente.</p>
`;

}
