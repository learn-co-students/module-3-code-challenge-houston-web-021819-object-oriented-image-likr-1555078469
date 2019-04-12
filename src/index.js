document.addEventListener('DOMContentLoaded', () => {
  console.log('%c DOM Content Loaded and Parsed!', 'color: magenta')

  let imageId = 2433 //Enter the id from the fetched image here

  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`

  const commentsURL = 'https://randopic.herokuapp.com/comments/'

  const imageContainer = document.querySelector('#image_container')

  const commentList = document.querySelector('#comments')

  fetch(imageURL)
    .then(res => res.json())
    .then(function(imageObj) {
      let myImage = new Image(imageObj.url, imageObj.name)
      imgDiv = myImage.render()
      imageContainer.append(imgDiv)

      let comments = imageObj.comments
      comments.forEach(comment => {
        let newComment = new Comment(comment)
        commentLi = newComment.render()
        commentList.append(commentLi)
      })
    })
})

//
// fetch('https://randopic.herokuapp.com/comments',{
// 	method: "POST",
// 	body: JSON.stringify({
// 		image_id: 2433,
// 		content: "Commenting from the console"
// 	}),
// 	headers: {
// 		'Accept': 'application/json',
// 		'Content-Type': 'application/json'
// 	}
// })
