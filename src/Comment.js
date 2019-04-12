class Comment {
  constructor(comment) {
    this.comment = comment

    const commentsSection = document.querySelector('#comments')

    const commentItem = document.createElement('li')
    commentItem.innerText = comment.content

    commentsSection.append(commentItem)
  }

  static createComment(comment) {

    fetch("https://randopic.herokuapp.com/comments", {
        method: "POST",
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({
        image_id: imageId,
        content: comment.content
        })
    })
    .then(function (response) {
        return response.json()
    })
    .then(function (response) {
        new Comment(response)
    })
    }

}
