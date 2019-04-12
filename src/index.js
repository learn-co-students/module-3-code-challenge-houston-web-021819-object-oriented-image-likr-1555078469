document.addEventListener('DOMContentLoaded', () => {
  
  Image.GetImage()
  
  Comment.saveOldComment();
  
  commentForm.addEventListener('submit', function(event){
    event.preventDefault();
    Comment.saveNewComment();
  })
})
