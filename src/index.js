document.addEventListener('DOMContentLoaded', () => {
  
  Image.GetImage()
  
  Comment.saveOldComment();

  Like.GetLikes();

  commentForm.addEventListener('submit', function(event){
    event.preventDefault();
    Comment.saveNewComment();
  })
})
