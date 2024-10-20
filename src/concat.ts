// 2. FUNCTION CONCAT
export const array1 = ["primero", "segundo", "tercero"];
export const array2 = ["cuarto", "quinto", "sexto"];

export const concat = (...varios : string []) : string [] => {
 const concatArray = [ ];
 concatArray.push(...varios);
 return concatArray;
}


