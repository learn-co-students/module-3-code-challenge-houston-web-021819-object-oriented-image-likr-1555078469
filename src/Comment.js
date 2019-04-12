class Comment {
    constructor(content){
        this.content = content
    }

    renderComment(){
        let li = document.createElement('li')
        li.innerText = this.content
        const commentsUl = document.querySelector("#comments")
        commentsUl.append(li)
    }

    static renderComments(){
        fetch(`https://randopic.herokuapp.com/images/2431`)
        .then((res) => res.json())
        .then(function (imageData) {
            let comments = imageData.comments
            comments.forEach(function(comment){
                let com = new Comment(comment.content) //for the sake of calling instance method
                com.renderComment()
            })
        })
    }

    addComment() {
        let input = document.querySelector("#comment_input")
        const commentsURL = `https://randopic.herokuapp.com/comments/`
        fetch(commentsURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                image_id: 2431,
                content: input.value
            })
        })
            .then((res) => res.json())
            .then(function (newComment) {
                let newCom = new Comment(newComment.content) //for the sake of calling instance method in the next line
                newCom.renderComment()
            })

    }
}