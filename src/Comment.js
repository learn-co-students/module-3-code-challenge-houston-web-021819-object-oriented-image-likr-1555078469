class Comment {
  constructor(commentObj){
    this.id = commentObj.id
    this.content = commentObj.content

    this.li = document.createElement('li')
    this.li.className = `comment-${this.id}`
    this.li.textContent = commentObj.content
  }

  render(){
    return this.li
  }

  static renderNewComment(commentsURL, commentList){
    const input = document.querySelector('#comment_input')
    let newComment = new Comment({id: 0, content: input.value})
    input.value = ""
    let commentLi = newComment.render()
    commentList.append(commentLi)
    fetch(commentsURL,{
    	method: "POST",
    	body: JSON.stringify({
    		image_id: 2433,
    		content: newComment.content
    	}),
    	headers: {
    		'Accept': 'application/json',
    		'Content-Type': 'application/json'
    	}
    })
  }
}
