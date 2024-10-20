import * as arrayOperations from './arrayOperations';

const list1: string[] = ["element1", "element2", "element3", "element4"];
const list2: string[] = [
  "element1",
  "element2",
  "element3",
  "element4",
  "element5",
];
// ** Function HEAD ->
console.log(arrayOperations.head(list1));

// ** Function TAIL ->
console.log(arrayOperations.tail(list1));

// ** Function INIT->
console.log(arrayOperations.init(list1));

// ** Function LAST ->
console.log(arrayOperations.last(list1));
console.log(arrayOperations.last(list2));
