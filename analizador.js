
function probabilidadImplicita(cuota){
    return (100 / cuota).toFixed(2);
}

function analizarCuotas(cuotas){

    let resultados = [];

    cuotas.forEach(c => {

        resultados.push({
            mercado: c.mercado,
            cuota: c.cuota,
            probabilidad: probabilidadImplicita(c.cuota)
        });

    });

    resultados.sort((a,b)=>b.probabilidad-a.probabilidad);

    return resultados;

}
