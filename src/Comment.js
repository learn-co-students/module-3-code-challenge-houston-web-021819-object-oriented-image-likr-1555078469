class Comment {
    constructor(text, commentsURL, imageURL){
        this.text = text
        this.postComment(this)
    }

    postComment(comment){
        let commentsBoard = document.querySelector('#comments')
        let newComment = document.createElement('li')
        newComment.innerText = comment.text
        commentsBoard.append(newComment)
    }

    //save comment then, after succesful save, create new instance and post
    static commentSave(commentsURL, text){
        console.log(commentsURL)
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
        .then(function(res){
            console.log("made it this far!")
            console.log(res)
            let comment = new Comment(text)
        })
    }

}