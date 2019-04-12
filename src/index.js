document.addEventListener('DOMContentLoaded', () => {
  console.log('%c DOM Content Loaded and Parsed!', 'color: magenta')

  let imageId = 2440

  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`

  const commentsURL = `https://randopic.herokuapp.com/comments/`

  //load the image and contents the first time
  Image.retrieveImage(imageURL)

  //set up the event listener for new comment
  let commentForm = document.querySelector('#comment_form')
  let commentInput = document.querySelector('#comment_input')
  commentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    (commentInput.value != "") ? Comment.commentSave(commentsURL, commentInput.value) : null
    commentInput.value = ""
  })

})