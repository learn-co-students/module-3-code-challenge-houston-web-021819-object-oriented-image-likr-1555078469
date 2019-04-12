class Comment {

    constructor(content, image, commentUl){
        this.image = image
        this.commentUl = commentUl
        this.content = content

        this.li = document.createElement('li')
        this.li.innerText = content

    }

    renderComment(){
        this.commentUl.append(this.li)
    }

}