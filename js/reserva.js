let Reserva = function(horario, cantidadPersonas, precioPersona, codigoDescuento)
{
    this.horario = horario;
    this.cantidadPersonas = cantidadPersonas;
    this.precioPersona = precioPersona;
    this.codigoDescuento = codigoDescuento;
}

//El precio base de una reserva es igual a la cantidad de personas por el precio por persona.
Reserva.prototype.calcularPrecioBase = function(){
    let precioBase = this.cantidadPersonas * this.precioPersona;
    return precioBase;

}

//precio final = precio base + adicionales - descuentos
Reserva.prototype.precioTotal = function(){    
    let precioBase = this.calcularPrecioBase();
    let descuentos = this.descuentoTotal();
    let adicionales = this.adicionalTotal();
    
    return precioBase + adicionales - descuentos;
};

//FUNCION GENERALES
Reserva.prototype.descuentoTotal = function(){
    let descuentos = this.descuentoCodigo() + this.descuentoPersonas();
    return descuentos;
}

Reserva.prototype.adicionalTotal = function(){
    let adicionales =  this.adicionalHorario() + this.adicionalFinde();
    return adicionales; 
}

Reserva.prototype.descuentoPersonas = function(){
    let precioBase = this.calcularPrecioBase();
    let descuento;

    descuento = this.cantidadPersonas >= 4 && this.cantidadPersonas <= 6 ? precioBase * 0.05
        : this.cantidadPersonas >=7 && this.cantidadPersonas <=8 ? precioBase * 0.1
        : this.cantidadPersonas > 8 ? precioBase * 0.15
        : 0;
    
    return descuento;
};

Reserva.prototype.descuentoCodigo = function(){
    let precioBase = this.calcularPrecioBase();
    let descuento;
    
    descuento = this.codigoDescuento != undefined ?
            this.codigoDescuento === "DES15" ? precioBase * 0.15
            : this.codigoDescuento === "DES200" ? 200
            : this.codigoDescuento === "DES1" ? this.precioPersona
            : 0 
        :0;
    
    return descuento;
};

Reserva.prototype.adicionalHorario = function(){
    let hora = this.horario.getHours();
    let precioBase = this.calcularPrecioBase();
    let adicional;

    adicional = hora == 13 || hora == 14 || hora == 20 || hora == 21 ? precioBase * 0.05 : 0;

    return adicional;
};

Reserva.prototype.adicionalFinde = function(){
    let dia = this.horario.getDay();
    let precioBase = this.calcularPrecioBase();
    let adicional;

    adicional = dia == 0 || dia == 5 || dia == 6 ? precioBase * 0.1 : 0;

    return adicional;
    
};
