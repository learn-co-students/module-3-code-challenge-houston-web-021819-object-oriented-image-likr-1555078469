const imageContainer = document.querySelector('#image_container')
const commentList = document.querySelector('#comments')

document.addEventListener('DOMContentLoaded', () => {
  console.log('%c DOM Content Loaded and Parsed!', 'color: magenta')

  APIDriver.renderImage() //render on load

  setInterval(function(){
    APIDriver.renderImage()
  }, 1000) //render every second from then on

  const form = document.querySelector('#comment_form')

  form.addEventListener('submit', e => {
    e.preventDefault()
    Comment.renderNewComment()
  })
})
