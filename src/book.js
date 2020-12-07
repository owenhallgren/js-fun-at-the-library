function createTitle(title) {
return `The ${title}`
}
function buildMainCharacter(name, age, pronouns){
   var mainCharacter = {
  name: name,
  age: age,
  pronouns: pronouns
  }
return mainCharacter
}
function saveReview(review, reviews){
  var foundReview = false
  for (var i = 0; i < reviews.length; i++){
    if (reviews[i] == review){
      foundReview = true;
    }
  }

  if (foundReview == false){
    reviews.push(review)
  }
}
function calculatePageCount(bookTitle){
  return bookTitle.length * 20
}
function writeBook(bookTitle, bookCharacter, genre){
  var book = {
    title : bookTitle,
    mainCharacter : bookCharacter,
    pageCount : calculatePageCount(bookTitle),
    genre : genre
  }
return book

}
function editBook(book){
  book.pageCount = book.pageCount * .75
}
module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
