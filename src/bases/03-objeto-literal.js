const persona = {
    nombre: 'Victor',
    apellido: 'Cortes',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 3230,
        lat: 14.332,
        lon: 23.333
    }
};

//console.table(persona);

const persona2 = {...persona};
persona2.nombre = 'Peter';

console.log(persona);
console.log(persona2);