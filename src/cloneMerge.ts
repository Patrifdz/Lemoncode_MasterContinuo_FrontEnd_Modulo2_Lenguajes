import * as model  from './main.model';

export const source : model.Source = {
    nombre: "Carmen",
    apellido: "Sanchez",
    edad: 34,
}

// ** FUNCTION CLONE -> 
export const clone =<T> ( object : T  )  : T => { 
    return { ... object }
    };


// ** FUNCTION MERGE -> 
export const a : model.A= { 
    name: "Maria", 
    surname: "Ibañez", 
    country: "SPA" 
};

export const b : model.B = { 
    name: "Luisa", 
    age: 31, 
    married: true 
};

export const merge = ( object1 : model.A, object2 : model.B) : object => {
     const ab = {...object2, ...object1}
     return ab;
}
    


