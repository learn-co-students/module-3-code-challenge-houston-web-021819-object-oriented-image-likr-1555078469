document.addEventListener('DOMContentLoaded', () => {
  console.log('%c DOM Content Loaded and Parsed!', 'color: magenta')

  let imageId = 1 //Enter the id from the fetched image here

  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`

  const commentsURL = `https://randopic.herokuapp.com/comments/`

  fetch("https://randopic.herokuapp.com/images/2432")
  .then(function(response){
    return response.json()
  })
  .then(function(images){
    images.forEach(function(image){
      new Image(image)
    })
  })


})
