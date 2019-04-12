document.addEventListener('DOMContentLoaded', () => {
  console.log('%c DOM Content Loaded and Parsed!', 'color: magenta')

  let imageId = 2345 //Enter the id from the fetched image here

  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`

  const commentsURL = `https://randopic.herokuapp.com/comments/`


  //fetch the image
  fetch(imageURL)
  .then(function(response){
    return response.json()
  })
  .then(function(img){
   let myImg = new Image(img.url, img.name) // instantiate img
   Comment.render(img)
   myImg.render()
  })


//create new comment
  const submitBtn = document.querySelectorAll('#comment_form input')[1]
  submitBtn.addEventListener('click', function(e){
   e.preventDefault() //without refreshing the page
   const commentInput = document.querySelectorAll('#comment_form input')[0].value
   Comment.create(commentInput,imageId) //call static method
  })
})
  