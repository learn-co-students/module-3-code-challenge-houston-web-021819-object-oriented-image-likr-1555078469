let imageId = 2433 //Enter the id from the fetched image here
const imageURL = `https://randopic.herokuapp.com/images/${imageId}`
const commentsURL = 'https://randopic.herokuapp.com/comments/'

class APIDriver{
  static renderImage() {
    fetch(imageURL)
    .then(res => res.json())
    .then(function(imageObj) {
      const myImage = new Image(imageObj)
      const likesCount = document.querySelector('#likes_text')

      if (imageContainer.children.length == 1) {
        const imgDiv = myImage.render()
        imageContainer.prepend(imgDiv)

        const imgLikeButton = document.querySelector('#likes_button')
        imgLikeButton.addEventListener('click',() => {
          APIDriver.incrementLikes()
          myImage.likes += 1
          likesCount.textContent = `This picture has ${myImage.likesString()}.`
        })
      }
      /*  creates the image and the like button only once,
          when the page loads. Might be better to have two methods,
          one that runs for the first load, and one for the set interval
          fetch request...
      */
      likesCount.textContent = `This picture has ${myImage.likesString()}.`

      commentList.innerHTML = ""
      imageObj.comments.forEach(comment => {
        let newComment = new Comment(comment)
        let commentLi = newComment.render()
        commentList.prepend(commentLi)
      })
    })
  }

  static postComment(content) {
    fetch(commentsURL,{
    	method: "POST",
    	body: JSON.stringify({
    		image_id: 2433,
    		content: content
    	}),
    	headers: {
    		'Accept': 'application/json',
    		'Content-Type': 'application/json'
    	}
    })
  }

  static incrementLikes() {
    fetch("https://randopic.herokuapp.com/likes",{
      method: "POST",
      body: JSON.stringify({
      image_id: '2433'
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
  }
}
