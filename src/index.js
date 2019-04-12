document.addEventListener('DOMContentLoaded', () => {
  console.log('%c DOM Content Loaded and Parsed!', 'color: magenta')

  let imageId = 1 //Enter the id from the fetched image here  https://randopic.herokuapp.com/images/2440

  const imageURL = `https://randopic.herokuapp.com/images/2440`

  const commentsURL = `https://randopic.herokuapp.com/comments/`


  fetch(imageURL)
  .then(function(res){
    return res.json()
  })
  .then(function(result){
    let imagePost = new Image(result.url, result.name)
  })

  let commentForm = document.querySelector('#comment_form')
  let commentInput = document.querySelector('#comment_input')
  commentForm.addEventListener('submit', function(e){
    e.preventDefault()
    let newComment = new Comment(commentInput.value)
    commentInput.value = ""
  })


})
