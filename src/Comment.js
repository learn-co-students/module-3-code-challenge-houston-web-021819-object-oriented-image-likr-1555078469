class Comment {
    constructor(text, commentsURL){
        this.text = text
        this.commentSave(commentsURL)
    }

    static postComments(comments){
        let commentsBoard = document.querySelector('#comments')
        comments.forEach(function(comment){
            let newComment = document.createElement('li')
            newComment.innerText = comment.content
            commentsBoard.append(newComment)
        })
    }

    commentSave(commentsURL){
        console.log(commentsURL)
        fetch(commentsURL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                image_id: 2440,
                content: this.text
            })
        })
        .then(function(res){
            console.log("made it this far!")
        })
    }

}