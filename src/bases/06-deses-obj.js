// Desestructuracion de objetos
// Asignacion desestructurante

const persona = {
    nombre: 'Victor',
    edad: 45,
    clave: 'DaddyCool',
    rango: 'Soldado'
};

const {nombre, edad, clave} = persona;

console.log(nombre);
console.log(edad);
console.log(clave);


const usaContext = ({clave, nombre, edad, rango = 'Capitan'}) => {
    console.log(nombre, edad, rango);
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 11.11,
            lng: 22.22
        }
    }
}

const {nombreClave, anios, latlng:{lat, lng}} = usaContext(persona);


console.log(nombreClave, anios);
console.log(lat, lng);