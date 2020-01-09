var expect = chai.expect;
var restaurant;
var calificaciones;

describe("Tests reserva de horarios", function(){
    var horariosRestaurante;
    var horariosOriginales = ["13:00", "15:30", "18:00"];

    beforeEach(function (){
        restaurant = listado.restaurantes[0];
        horariosRestaurante = restaurant.horarios;
    });

    afterEach(function(){
        restaurant.horarios = ["13:00", "15:30", "18:00"];
    })

    it("si el horario esta disponible se elimina del arreglo", function(){
        var horarioReserva = horariosRestaurante[0];
        restaurant.reservarHorario(horarioReserva);

        expect(horariosRestaurante).that.does.not.include(horarioReserva)    
    });

   it("si el horario no existe el arreglo se mantiene igual", function(){
        var nuevoHorario = "20:00";
        restaurant.reservarHorario(nuevoHorario);

        expect(horariosRestaurante).to.eql(horariosOriginales);
    });

    it("si no se le pasa ningun parametro se mantiene igual el arreglo", function(){
        restaurant.reservarHorario();
        expect(horariosRestaurante).to.eql(horariosOriginales);
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
    });
    
    afterEach(function(){
        restaurant.calificaciones = [6, 7, 9, 10, 5];
    })   

    it("Agregar una calificacion correctamente", function(){
        var numeroCalificaciones = calificaciones.length;
        restaurant.calificar(3);
        var nuevoNumeroCalificaciones = calificaciones.length;
        var calificacionesEsperadas = numeroCalificaciones + 1;

        expect(nuevoNumeroCalificaciones).to.eql(calificacionesEsperadas);


    })
})
