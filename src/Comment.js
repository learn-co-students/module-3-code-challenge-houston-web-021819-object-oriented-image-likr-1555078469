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
        headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(commentTemplate)
      }).then(res => res.json())
      .then(comment => {
        let newComment = new Comment(comment)
        newComment.render()
      })
    })
  }



}
Comment.all = []
