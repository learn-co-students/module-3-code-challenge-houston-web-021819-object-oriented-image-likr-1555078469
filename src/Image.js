class Image {
  constructor(url, name){
    this.div = document.createElement('div')
    this.div.className = 'image_card'

    const img = document.createElement('img')
    img.src = url

    const h4 = document.createElement('h4')
    h4.append(name)

    this.div.append(
      img,
      h4
    )
  }

  render(imageObj){
    return this.div
  }

  static renderImage(imageURL, imageContainer, commentList) {
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
        commentList.append(commentLi)
      })
    })
  }
}
