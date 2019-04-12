document.addEventListener('DOMContentLoaded', () => {
  console.log('%c DOM Content Loaded and Parsed!', 'color: magenta')

  let imageId = 1 //Enter the id from the fetched image here  https://randopic.herokuapp.com/images/2440

  const imageURL = `https://randopic.herokuapp.com/images/2440`

  const commentsURL = `https://randopic.herokuapp.com/comments/`


  fetch(imageURL)
  .then(function(res){
    return res.json()
  })
  .then(function(result){
    let board = document.querySelector('#image_container')
    let image = document.createElement('img')
    image.src = result.url
    board.append(image)
  })




})
