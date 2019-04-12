let imageId = 2432 //Enter the id from the fetched image here

document.addEventListener('DOMContentLoaded', () => {
  console.log('%c DOM Content Loaded and Parsed!', 'color: magenta')

  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`
  const commentsURL = `https://randopic.herokuapp.com/comments/`

  //fetch the image to the page
  fetch("https://randopic.herokuapp.com/images/2432")
    .then(function (response) {
      return response.json()
    })
    .then(function (image) {
      // console.log(image)
      const newImage = new Image(image)
      newImage.render()
    })

//fetch all the comments for the image
  fetch("https://randopic.herokuapp.com/images/2432")
    .then(function (response) {
      return response.json()
    })
    .then(function (image) {
      image.comments.forEach(function (comment) {
        // console.log(comment.content)
        // Comment.createComment(comment)
        new Comment(comment)
      })
    })

//creating a new comment when form is submitted
  const form = document.querySelector("#comment_form")
  const commentInput = document.querySelector("#comment_input")

  form.addEventListener('submit', (e) => {
    // console.log("Hello!")
    e.preventDefault()

    const newComment = {
      image_id: imageId,
      content: commentInput.value
    }

    Comment.createComment(newComment)
    form.reset()
  })

})
