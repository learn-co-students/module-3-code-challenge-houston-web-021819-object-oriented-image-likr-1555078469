document.addEventListener('DOMContentLoaded', () => {
  console.log('%c DOM Content Loaded and Parsed!', 'color: magenta')

  const imageId = 2441 //Enter the id from the fetched image here

  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`

  const commentsURL = `https://randopic.herokuapp.com/comments/`
  fetch(imageURL)
  .then(function(res){
    return res.json()
  })
  .then(function(pic){
    const picPlace = document.querySelector('#image_container')
    console.log(pic)
    let bigPic = new Image(pic.url,pic.name)
    picPlace.append(bigPic.div)
  })


})
