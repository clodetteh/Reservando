var expect = chai.expect;

describe("Tests reserva de horarios", function(){
    var restaurant;
    var horariosRestaurante;

    beforeEach(function (){
        restaurant = listado.restaurantes[0];
        horariosRestaurante = restaurant.horarios;
    });

    it("si el horario esta disponible se elimina del arreglo", function(){
        var horarioReserva = horariosRestaurante[0];
        restaurant.reservarHorario(horarioReserva);

        expect(horariosRestaurante).that.does.not.include(horarioReserva)    
    });

   it("si el horario no existe el arreglo se mantiene igual", function(){
        var nuevoHorario = "20:00";
        console.log(horariosRestaurante);
        var horariosOriginales = ["15:30", "18:00"];
        restaurant.reservarHorario(nuevoHorario);

        expect(horariosRestaurante).to.eql(horariosOriginales);
    });

});
