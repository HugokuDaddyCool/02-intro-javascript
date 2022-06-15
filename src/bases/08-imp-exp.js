//import { heroes } from './data/heroes';
//import { heroes } from "./data/heroes";

import heroes, {owners} from "../data/heroes";


console.log(owners);
console.log(heroes);

const getHeroeById = (id) => heroes.find((hero) => hero.id === id);

console.log(getHeroeById(2));

const getHeroesByOwner = (owner) => heroes.filter((hero) => hero.owner === owner);

console.log(getHeroesByOwner('Marvel'));

export {
    getHeroeById,
    getHeroesByOwner
}