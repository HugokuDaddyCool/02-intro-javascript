import { getHeroeById } from "./08-imp-exp";

// const promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const heroe = getHeroeById(2);
//         console.log(heroe);
//         //resolve(heroe);
//         reject('no se pudo encontrar el heroe');           
//     }, 2000);
// });

// promesa.then((heroe) => {
//     console.log('heroe', heroe);
// })
// .catch((err) => console.warn(err));

const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroeById(id);
            if (heroe) {
                resolve(heroe);
            } else {
                reject(`No se pudo encontrar heroe con id: ${id}`)
            }
        }, 2000);
    });
}

getHeroeByIdAsync(4)
.then(console.log)
.catch(console.warn);