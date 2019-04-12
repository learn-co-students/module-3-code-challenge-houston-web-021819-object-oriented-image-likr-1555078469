class Comment{

  constructor(comment){
    this.li = document.createElement('li')
    this.id = document.createElement('strong')
    let idHeader = document.createElement('strong')
    this.content = document.createElement('p')

    idHeader.append('Comment #: ')
    this.id.append(comment.id)
    this.content.append(comment.content)


    this.li.append(
      idHeader,
      this.id,
      this.content
    )

    Comment.all.push(this)

  }

  render(){
    let commentSection = document.querySelector('#comments')
    commentSection.append(this.li)
  }

  static addComment(){
    let commentForm = document.querySelector('#comment_form')
    commentForm.addEventListener('submit', (e) => {
        e.preventDefault()
        let commentTemplate = {
          image_id: imageId,
          content: commentForm.comment.value
        }

        fetch(commentsURL, {
        method: 'POST',
        body: JSON.stringify(commentTemplate),
        headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
        }).then(res => res.json())

        commentTemplate.id = parseInt(Comment.all[Comment.all.length -1].id.innerText) + 1
        let newComment = new Comment(commentTemplate)
        newComment.render()
    })
  }



}
Comment.all = []
