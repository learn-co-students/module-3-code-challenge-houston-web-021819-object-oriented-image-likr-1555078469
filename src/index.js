let imageId = 2437 //Enter the id from the fetched image here
const imageURL = `https://randopic.herokuapp.com/images/${imageId}`
const commentsURL = `https://randopic.herokuapp.com/comments/`

document.addEventListener('DOMContentLoaded', () => {
  Comment.section = document.querySelector('#comments')
  Comment.form = document.querySelector('#comment_form')
  Image.container = document.querySelector('#image_container')


  Image.create(imageURL)
  Comment.addComment()

})
