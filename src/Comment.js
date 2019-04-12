class Comment {
    constructor(content){
        this.content = content
    }

    // renderComment(){
    //     let li = document.createElement('li')
    //     li.innerText = comment.content
    //     const commentsUl = document.querySelector("#comments")
    //     commentsUl.append(li)
    // }

    static renderComments(){
        fetch(`https://randopic.herokuapp.com/images/2431`)
        .then((res) => res.json())
        .then(function (imageData) {
            let comments = imageData.comments
            comments.forEach(function(comment){
                let li = document.createElement('li')
                li.innerText = comment.content
                const commentsUl = document.querySelector("#comments")
                commentsUl.append(li)
            })
        })
    }

    addComment() {
        let input = document.querySelector("#comment_input")
        fetch(`https://randopic.herokuapp.com/comments`, {
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
                let li = document.createElement('li')
                li.innerText = newComment.content
                const commentsUl = document.querySelector("#comments")
                commentsUl.append(li)
            })

    }
}