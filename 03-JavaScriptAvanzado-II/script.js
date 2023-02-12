
let persona = {
    nombre: "Alex",
    apellido: "Diaz",
}

let logNombre = function(){
    console.log(this.nombre)
}
logNombre.bind(persona)()

let logNombrePersona = logNombre.bind(persona)
logNombrePersona()


let edad = function(edad){
    console.log(this.nombre + " tiene " + edad + " años")
}

edad.call(persona, 23)

let pais = function (pais, ciudad){
    console.log(this.nombre + " vive en " + pais + ", en la ciudad de "+ ciudad)
}
pais.apply(persona,["Colombia", "Cali"])