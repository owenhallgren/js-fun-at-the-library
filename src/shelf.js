function shelfBook(book, shelf){
if(shelf.length < 3){
shelf.unshift(book)}
}
function unshelfBook(title, shelf){
  for (var i=0; i<shelf.length;i++){
    if(title == shelf[i].title){
      shelf.splice(i, 1)
      return
    }
  }
}
function listTitles(shelf){
  var titles = ``
  for (var i=0; i<shelf.length;i++){
    if (i==0) {titles += shelf[i].title
    }else{
      titles += `, ` + shelf[i].title
    }
  }
  return titles
}
function searchShelf(shelf, titleSearched){
  for(var i=0;i<shelf.length;i++){
    if(titleSearched == shelf[i].title){
      return true
    }else{
      return false
    }
  }
}
module.exports = {
 shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
