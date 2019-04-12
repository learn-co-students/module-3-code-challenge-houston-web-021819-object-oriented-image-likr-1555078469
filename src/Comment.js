class Comment {
  constructor(commentObj){
    this.id = commentObj.id
    this.content = commentObj.content

    this.li = document.createElement('li')
    this.li.className = `comment-${this.id}`
    this.li.textContent = this.content
  }

  render(){
    return this.li
  }

  static renderNewComment(){
    const input = document.querySelector('#comment_input')
    let newComment = new Comment({id: 0, content: input.value})
    input.value = ""
    commentList.prepend(newComment.render())
    APIDriver.postComment(newComment.content)
  }
}
