const API_BASE = "https://www.thesportsdb.com/api/v1/json/123/";

async function buscarEquipo(nombre){

    try{

        const respuesta = await fetch(
            API_BASE + "searchteams.php?t=" + encodeURIComponent(nombre)
        );

        const datos = await respuesta.json();

        return datos;

    }catch(error){

        console.error(error);

        return null;

    }

}
