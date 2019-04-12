class Comment {

    constructor(comment) {
        // console.log(comment.content)
        this.comment = comment.content
        this.addComment()
    }

    addComment(){
        let ul = document.querySelector("#comments")
        let li = document.createElement("li")
        li.innerText = this.comment
        ul.append(li)
    }


}