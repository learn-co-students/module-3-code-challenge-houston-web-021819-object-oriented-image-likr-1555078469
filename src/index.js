document.addEventListener('DOMContentLoaded', () => {
  console.log('%c DOM Content Loaded and Parsed!', 'color: magenta')
  let commentForm = document.querySelector('#comment_form')
  let commentInput = document.querySelector('#comment_input')

  let imageId = 2436 //Enter the id from the fetched image here
  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`
  const commentsURL = `https://randopic.herokuapp.com/comments/`


//fetch get request for the image
  fetch(imageURL)
  .then(function(res){
    return res.json();
  })
  .then(image => {
    image = new Image(image.url, image.name)
  })


//fetch get request for the preexisting comments
  fetch(imageURL)
  .then(function(res){
    return res.json();
  })
  .then(imageComments => {
    imageComments = imageComments.comments
    imageComments.forEach(function(comment){
      comment = new Comment(comment)
    })
  })


//event listener for the form submission
  commentForm.addEventListener('submit', function(event){
    event.preventDefault();
  // fetch post request to save the comment to the server  
    fetch(commentsURL, {
      method: "post",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        image_id: (imageId),
        content: (commentInput.value)
      })
    })
    .then(function(res){
      return res.json();
    })
    .then( newComment => {
      console.log(newComment.content)
      newComment = new Comment(newComment)
      commentInput.value = ""
    })
  })
})
