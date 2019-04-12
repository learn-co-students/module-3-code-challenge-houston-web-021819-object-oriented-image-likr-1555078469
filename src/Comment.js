class Comment {
    constructor(text){
        this.text = text
        this.post()
    }

    post(){
        let commentsBoard = document.querySelector('#comments')
        let newComment = document.createElement('li')
        newComment.innerText = this.text
        commentsBoard.append(newComment)
    }
}