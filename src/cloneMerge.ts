import { Source } from './main.model';

export const source : Source = {
    nombre: "Carmen",
    apellido: "Sanchez",
    edad: 34,
}

export const clone = ( object : Source ) : Source => {
    return { ... object }
};


    


