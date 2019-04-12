let imageId = 2345 //Enter the id from the fetched image here
const imageURL = `https://randopic.herokuapp.com/images/${imageId}`
const commentsURL = `https://randopic.herokuapp.com/comments/`

document.addEventListener('DOMContentLoaded', () => {
  console.log('%c DOM Content Loaded and Parsed!', 'color: magenta')

  //fetch the image
   Image.render()


//create new comment
  const submitBtn = document.querySelectorAll('#comment_form input')[1]
    submitBtn.addEventListener('click', function(e){
    e.preventDefault() //without refreshing the page
    const commentInput = document.querySelectorAll('#comment_form input')[0].value
    Comment.create(commentInput,imageId) //call static method
  })
})
  