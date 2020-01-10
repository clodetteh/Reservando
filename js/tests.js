var expect = chai.expect;
var restaurant;
var calificaciones;
var numeroCalificaciones;
var horariosOriginales = ["13:00", "15:30", "18:00"];

describe("Tests reserva de horarios", function(){

    beforeEach(function (){
        restaurant = listado.restaurantes[0];
    });

    afterEach(function(){
        restaurant.horarios = ["13:00", "15:30", "18:00"];
    })

    it("si el horario esta disponible se elimina del arreglo", function(){
        var horarioReserva = restaurant.horarios[0];
        restaurant.reservarHorario(horarioReserva);

        expect(restaurant.horarios).that.does.not.include(horarioReserva)    
    });

   it("si el horario no existe el arreglo se mantiene igual", function(){
        var nuevoHorario = "20:00";
        
        restaurant.reservarHorario(nuevoHorario);;

        expect(restaurant.horarios).to.eql(horariosOriginales);
    });

    it("si no se le pasa ningun parametro se mantiene igual el arreglo", function(){
        restaurant.reservarHorario();
        expect(restaurant.horarios).to.eql(horariosOriginales);
    })

});

describe("Tests obtener puntuacion", function(){
    beforeEach(function(){
        restaurant = listado.restaurantes[0];
        calificaciones = restaurant.calificaciones;
    });

    afterEach(function(){
        restaurant.calificaciones = [6, 7, 9, 10, 5];
    });

    it("La puntuacion - El promedio - se calcula correctamente", function(){
      var promedioEsperado = 0;
      calificaciones.forEach(function(valor){
        promedioEsperado += valor;

      })
      promedioEsperado = promedioEsperado / calificaciones.length
      
      var promedioTestear = restaurant.obtenerPuntuacion();
      expect(promedioEsperado).to.equal(promedioTestear);
    })

    it("Si el restaurante no tiene calificaciones el puntaje es 0", function(){
        restaurant.calificaciones = [];
        var promedioTestear = restaurant.obtenerPuntuacion();

        expect(promedioTestear).to.equal(0);

    })
});

describe("Tests calificar restaurante", function(){
    beforeEach(function(){
        restaurant = listado.restaurantes[0];
        calificaciones = restaurant.calificaciones;
        numeroCalificaciones = calificaciones.length;
    });
    
    afterEach(function(){
        restaurant.calificaciones = [6, 7, 9, 10, 5];
    })   

    it("Agregar una calificacion correctamente", function(){
        restaurant.calificar(3);
        var nuevoNumeroCalificaciones = calificaciones.length;
        var calificacionesEsperadas = numeroCalificaciones + 1;

        expect(nuevoNumeroCalificaciones).to.eql(calificacionesEsperadas);
    })

    it("Agregar calificacion negativa", function(){
        restaurant.calificar(-3);
        var nuevoNumeroCalificaciones = calificaciones.length;

        expect(nuevoNumeroCalificaciones).to.eql(numeroCalificaciones);
    });

    it("Agregar un string como parametro", function(){
        restaurant.calificar("Hola");
        var nuevoNumeroCalificaciones = calificaciones.length;

        expect(nuevoNumeroCalificaciones).to.eql(numeroCalificaciones);
    });
});

describe("Tests funcion buscar restaurantes en el listado", function(){
    beforeEach(function(){
        restaurant = listado.restaurantes[0];
    });

    it("Buscar restaurante con id existente", function(){
        var resultadoBusqueda = listado.buscarRestaurante(1);

        expect(restaurant).to.eql(resultadoBusqueda);

    });

    it("Buscar un id que no existe", function(){
        var mensajeEsperado = "No se ha encontrado ningún restaurant";
        var resultadoBusqueda = listado.buscarRestaurante(100);

        expect(resultadoBusqueda).to.equal(mensajeEsperado);
    });

    it("Poner un string como parametro", function(){
        var mensajeEsperado = "No se ha encontrado ningún restaurant";
        var resultadoBusqueda = listado.buscarRestaurante("Hola");

        expect(resultadoBusqueda).to.equal(mensajeEsperado);
    });
});

describe("Tests funcion obtener restaurantes", function(){
    beforeEach(function(){
        restaurant = listado.restaurantes[0];
    });

    it("Obtener restaurante con Rubro, Ciudad y horario valido", function(){
        var resultadoObtenido = listado.obtenerRestaurantes("Asiática", "Nueva York", "13:00");

        expect(restaurant).to.eql(resultadoObtenido[0]);
    });

    it("Obtener array vacio cuando uno de los parametros no existe", function(){
        var resultadoEsperado = [];
        var resultadoObtenido = listado.obtenerRestaurantes("Comida Callejera", "Nueva York", "13:00");

        expect(resultadoEsperado).to.eql(resultadoObtenido);
    });

    it("Obtener un array vacio cuando solo se pasa un parametro", function(){
        var resultadoEsperado = [];
        var resultadoObtenido = listado.obtenerRestaurantes(10);

        expect(resultadoEsperado).to.eql(resultadoObtenido);
    });


});
