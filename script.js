
// Sección activa
function mostrar(id){

const secciones=document.querySelectorAll("main section");

secciones.forEach(seccion=>{
    seccion.style.display="none";
});

document.getElementById(id).style.display="block";

}

// Buscar partido (por ahora es una versión inicial)
function async function buscarPartido(){

const nombre = document.getElementById("buscarPartido").value.trim();

const resultado = document.getElementById("resultadoBusqueda");

if(nombre===""){
    resultado.innerHTML="<p>Escribe un equipo.</p>";
    return;
}

resultado.innerHTML="<p>🔎 Buscando...</p>";

const datos = await buscarEquipo(nombre);

if(!datos || !datos.teams){

    resultado.innerHTML="<p>❌ Equipo no encontrado.</p>";

    return;

}

const equipo = datos.teams[0];

resultado.innerHTML=`

<h2>${equipo.strTeam}</h2>

<img src="${equipo.strBadge}" width="120">

<p><b>Liga:</b> ${equipo.strLeague}</p>

<p><b>País:</b> ${equipo.strCountry}</p>

<p><b>Estadio:</b> ${equipo.strStadium}</p>

<p><b>Fundado:</b> ${equipo.intFormedYear}</p>

`;

}

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
