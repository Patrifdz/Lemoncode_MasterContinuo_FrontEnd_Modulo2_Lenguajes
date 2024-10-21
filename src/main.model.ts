export interface Source  {
    nombre: string,
    apellido: string,
    edad: number
}

export interface Target {
    nombre: string,
    ciudad: string,
    teléfono: number
}

export interface A  { 
    name: string, 
    surname: string, 
    country: string 
};

export interface B  { 
    name: string, 
    age: number, 
    married: boolean 
};

export * from './main.model';