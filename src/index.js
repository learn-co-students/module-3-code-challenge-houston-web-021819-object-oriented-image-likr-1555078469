document.addEventListener('DOMContentLoaded', () => {
  console.log('%c DOM Content Loaded and Parsed!', 'color: magenta')

  let imageId = 2433 //Enter the id from the fetched image here
  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`
  const commentsURL = 'https://randopic.herokuapp.com/comments/'

  const imageContainer = document.querySelector('#image_container')
  const commentList = document.querySelector('#comments')

  Image.renderImage(imageURL, imageContainer, commentList) //render on load

  setInterval(function(){
    Image.renderImage(imageURL, imageContainer, commentList)
  }, 1000) //render every second from then on

  const form = document.querySelector('#comment_form')

  form.addEventListener('submit', e => {
    e.preventDefault()
    Comment.renderNewComment(commentsURL, commentList)
  })
})
