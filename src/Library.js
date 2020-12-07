
function createLibrary(libraryName){
var library = {
  name: libraryName,
  books: []
};
return library;
  }
  function addBook(library, book){
    library.books.push(book)
  }
module.exports = {
  createLibrary,
  addBook,
  // checkoutBook
};
