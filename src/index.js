document.addEventListener('DOMContentLoaded', () => {
  console.log('%c DOM Content Loaded and Parsed!', 'color: magenta')

  let imageId = 2438

  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`
  const commentsURL = `https://randopic.herokuapp.com/comments/`

  const imageContainer = document.querySelector("#image_container")

  
  const commentForm = document.querySelector("#comment_form")
  const commentUL = document.querySelector("#comments")

  

  fetch(imageURL)
  .then(function(res){
    return res.json()
  })
  .then(function(image){
    const createdImage = new Image(image.url, image.name, imageContainer)
    createdImage.renderImage()
    image.comments.forEach(function(comment){
      const persistedComment = new Comment(comment.content, createdImage.id, commentUL)
      persistedComment.renderComment()
    })
  })

  commentForm.addEventListener('submit', function(e){
    e.preventDefault()
    fetch(commentsURL, {
      method: "POST",
      body: JSON.stringify({content: commentForm.comment.value, image_id: imageId}),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(function(res){
      return res.json
    })
    .then(function(){
      const newComment = new Comment(commentForm.comment.value, imageId, commentUL)
      console.log(newComment)
      newComment.renderComment()
    }) 
  })
})
