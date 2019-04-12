document.addEventListener('DOMContentLoaded', () => {
  console.log('%c DOM Content Loaded and Parsed!', 'color: magenta')

  let imageId = 2431 //Enter the id from the fetched image here

  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`

  const commentsURL = `https://randopic.herokuapp.com/comments/`

  //fetch my image
  fetch(imageURL)
  .then((res)=> res.json())
  .then(function(imageData) {

    let myImage = new Image(imageData.url, imageData.name)
    //use Image instance method to render my image.
    myImage.renderMyImage()
    //use Comment static method to render comment for my image
    Comment.renderComments()
  })

  const form = document.querySelector("#comment_form")
  form.addEventListener('submit', function(e){
    e.preventDefault()
    let input = document.querySelector("#comment_input")
    let newComment = new Comment(input.value)
    newComment.addComment()
  })
   
})
