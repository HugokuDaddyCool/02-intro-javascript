const personajes = ['Goku', 'Vegeta', 'Trunks']

const [,,p3] = personajes;

console.log(p3);

const retornaArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

// Tarea

const usaState = (valor) => {
    return [valor, () => { console.log('hola mundo')}];
}

const [nombre, setNombre] = usaState('Goku');
console.log(nombre);

setNombre();

