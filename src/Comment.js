class Comment {
    constructor(text){
        this.text = text
        this.renderComment(this)
    }

    renderComment(comment){
        let commentsBoard = document.querySelector('#comments')
        let newComment = document.createElement('li')
        newComment.innerText = comment.text
        commentsBoard.prepend(newComment)
    }

    //save comment then, after successful save, create new instance and post
    static commentSave(commentsURL, text){
        fetch(commentsURL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                image_id: 2440,
                content: text
            })
        })
        .then( new Comment(text) )
    }

}