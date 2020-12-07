class Librarian {
  constructor(name, library) {
    this.name = name;
    this.library = library;
    }
greetPatron(patronName, isMorning){
  if (isMorning){
    return `Good morning, ${patronName}!`;
  } else {
    return `Hello, ${patronName}!`;
  }
}
findBook(bookTitleToFind){
  for(var i = 0; i < this.library.books.length; i++){
    if (bookTitleToFind == this.library.books[i].title){
      return `Yes, we have ${bookTitleToFind}`
    }
  }
    return `Sorry, we do not have ${bookTitleToFind}`
  }
  calculateLateFee(numberOfDaysLate){
    var lateFee = numberOfDaysLate * .25
    return Math.ceil(lateFee)
  }
}



module.exports = Librarian;
