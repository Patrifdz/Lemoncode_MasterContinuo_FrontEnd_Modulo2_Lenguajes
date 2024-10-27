export interface Source  {
    nombre: string,
    apellido: string,
    edad: number
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

export interface Books {
    title: string;
    isRead: boolean;
  }

export * from './main.model';