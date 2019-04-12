let imageId = 2433 //Enter the id from the fetched image here
const imageURL = `https://randopic.herokuapp.com/images/${imageId}`
const commentsURL = 'https://randopic.herokuapp.com/comments/'

class APIDriver{
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

  static renderImage() {
    fetch(imageURL)
    .then(res => res.json())
    .then(function(imageObj) {
      if (imageContainer.children.length == 0) {
        const myImage = new Image(imageObj.url, imageObj.name)
        let imgDiv = myImage.render()
        imageContainer.append(imgDiv)
      }
      commentList.innerHTML = ""
      const comments = imageObj.comments
      comments.forEach(comment => {
        let newComment = new Comment(comment)
        let commentLi = newComment.render()
        commentList.prepend(commentLi)
      })
    })
  }
}
