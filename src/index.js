document.addEventListener('DOMContentLoaded', () => {
  console.log('%c DOM Content Loaded and Parsed!', 'color: magenta')

  let imageId = 2431 //Enter the id from the fetched image here
  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`

  fetch(imageURL)  //fetch my image
  .then((res)=> res.json())
  .then((imageData) => {
    let myImage = new Image(imageData.url, imageData.name)
    myImage.renderMyImage()  //call Image instance method to render myImage.
    Comment.renderComments()  //call Comment static method to render comments for my image
    })

  //add action for form.
  const form = document.querySelector("#comment_form")
  const input = document.querySelector("#comment_input")
  form.addEventListener('submit', function(e){
    e.preventDefault()
    let newComment = new Comment(input.value);
    newComment.addComment(); //use Comment instance method to send newComment to server, add HTML element
    input.value = ""; //clear input box after submitting
  })
   
})
