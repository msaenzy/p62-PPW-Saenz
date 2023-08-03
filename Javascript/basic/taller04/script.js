let mi_carro = {
    marca: 'Mazda',
    modelo: 'El mas cool',
    anio: 2023,
    detalle_auto: function() {
    console.log ('Auto: ${this.marca)-${this.modelo}, Año: ${this.anio}.'  )
    }
}

//crear obj
function carro(marca, modelo, anio){
    this.marca = marca
    this.modelo= modelo
    this.anio=anio
    this.detalle_auto = function(){
        console.log ('Auto: ${this.marca)-${this.modelo}, Año: ${this.anio}.'  )
    }
}

let mi_auto = new carro('Ford', 'Focus', 2023)
mi_auto.detalle_auto()
