// 1. ARRAY OPERATIONS
// ** Function HEAD ->
export const head = (list: string[]): string => {
    const [firstElement] = list;
    return firstElement;
  };
  // ** Function TAIL ->
  export const tail = (list: string[]): string[] => {
    const [, ...rest] = list;
    return rest;
  };
  // ** Function INIT->
  export const init = (list: string[]): string[] => {
    return list.slice(0, -1);
  };
  // ** Function LAST ->
  export const last = (list: string[]): string[] => {
    return list.slice(list.length - 1);
  };