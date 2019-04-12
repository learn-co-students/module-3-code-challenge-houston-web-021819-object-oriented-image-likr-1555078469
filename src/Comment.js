class Comment {

    constructor(commentObj){
      this.id = commentObj.id

      this.li = document.createElement('li')
      this.li.className = `comment-${this.id}`
      this.li.textContent = commentObj.content
    }

    render(){
      return this.li
    }

}
