// Funciones en JS
const saludar = (nombre) => `Hola ${nombre}`;

console.log(saludar('hugo'));

const getUser = () => ({
        uid:'abc123',
        username:'daddyCool'
    });

console.log(getUser());

// Tarea

const getUsuarioActivo = (nombre) => ({
    uid: 'ABC567',
    username: nombre
});

const usuarioActivo = getUsuarioActivo('Victor');
console.log(usuarioActivo);