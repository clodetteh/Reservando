//RESTAURANTE

function sumatoria(calificaciones){
    var resultadoSuma = 0;
    calificaciones.forEach(function(valor){
        resultadoSuma += valor
    });
    return resultadoSuma;
};

function promedio(calificaciones){
    var resultadoSuma = sumatoria(calificaciones);
    var promedio = resultadoSuma / calificaciones.length;
    return promedio;
};

//LISTADO
function nuevoListadoSinDuplicarse(listado){
    var nuevoListado = listado.filter(function(elem, index, self) {
        return index === self.indexOf(elem);
});
    return (nuevoListado);
};


