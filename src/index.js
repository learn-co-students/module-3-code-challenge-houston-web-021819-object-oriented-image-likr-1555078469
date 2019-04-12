document.addEventListener('DOMContentLoaded', () => {
  console.log('%c DOM Content Loaded and Parsed!', 'color: magenta')

  let imageId = 2432 //Enter the id from the fetched image here

  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`

  const commentsURL = `https://randopic.herokuapp.com/comments/`

  fetch("https://randopic.herokuapp.com/images/2432")
  .then(function(response){
    return response.json()
  })
  .then(function(images){
    console.log(images)
    images.comments.forEach(function(image){
      new Image(image)
    })
  })

  fetch("https://randopic.herokuapp.com/images/2432")
  .then(function(response){
    return response.json()
  })
  .then(function(commentsData){
    console.log(commentsData.comments)
    commentsData.comments.forEach(function(comment){
      console.log(comment.content)
      new Comment(comment)
    })
  })

  const form = document.querySelector("#comment_form")
  const commentInput = document.querySelector("#comment_input")
  form.addEventListener('submit', (e) => {
    // console.log("Hello!")
    e.preventDefault()
    Comment.createComment(commentInput.value)
    form.reset()
  })


})
