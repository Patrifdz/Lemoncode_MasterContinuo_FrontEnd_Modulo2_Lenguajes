import * as arrayOperations from './arrayOperations';
import { array1, array2, concat } from './concat';
import { source, clone, merge, a, b } from './cloneMerge';

export const list1: string[] = ["element1", "element2", "element3", "element4"];
export const list2: string[] = [
  "element1",
  "element2",
  "element3",
  "element4",
  "element5",
];
// ** Function HEAD ->
console.log( "Function HEAD -> " + arrayOperations.head( list1));

// ** Function TAIL ->
console.log("Function TAIL -> " + arrayOperations.tail(list1));

// ** Function INIT->
console.log("Function INIT -> " + arrayOperations.init(list1));

// ** Function LAST ->
console.log("Function LAST with list1 -> " + arrayOperations.last(list1));
console.log("Function LAST with list2 -> " + arrayOperations.last(list2));

// ** Function CONCAT ->
console.log("Function CONCAT -> " + concat(...array1, ...array2));

// ** Function CLONE ->
console.log("Function CLONE -> " + clone(source));

// ** Function MERGE ->
console.log("Function MERGE -> " +merge( a, b ));