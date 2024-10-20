// 1. ARRAY OPERATIONS
export const head = (list: string[]): string => {
    const [firstElement] = list;
    return firstElement;
  };
  
  export const tail = (list: string[]): string[] => {
    const [, ...rest] = list;
    return rest;
  };
  
  export const init = (list: string[]): string[] => {
    return list.slice(0, -1);
  };
  
  export const last = (list: string[]): string[] => {
    return list.slice(list.length - 1);
  };