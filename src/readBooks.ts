import * as model  from './main.model';

export const books : model.Books [ ]= [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
  ];

export const isBookRead = ( bookList : model.Books[ ] , titleToSearch: string ) : boolean => { 
  let result = false;
         bookList.filter(book => {
                    if (book.title === titleToSearch && book.isRead) {
                     result = true;
                    } 
                });
                return result;
 }

//  export const isBookRead = ( bookList : model.Books[ ] , titleToSearch: string ) : boolean => { 
//   let result = false;
//   for(let i = 0; i<bookList.length; i++) {
//       if(bookList[i].title === titleToSearch && bookList[i].isRead) {
//         return result = true;
//       }
//   }
//          return result;
// }