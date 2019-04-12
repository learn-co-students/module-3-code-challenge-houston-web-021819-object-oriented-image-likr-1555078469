let commentForm = document.querySelector('#comment_form')
let commentInput = document.querySelector('#comment_input')
let imageId = 2436 //Enter the id from the fetched image here
const imageURL = `https://randopic.herokuapp.com/images/${imageId}`
const commentsURL = `https://randopic.herokuapp.com/comments/`


class Comment {
    
    constructor(comment) {
        // console.log(comment.content)
        this.comment = comment.content
        this.addComment()
    }

    addComment(){
        let ul = document.querySelector("#comments")
        let li = document.createElement("li")
        //console.log(this.comment)
        li.innerText = this.comment
        ul.append(li)
    }

    static saveOldComment(){
        fetch(imageURL)
        .then(function(res){
          return res.json();
        })
        .then(imageComments => {
          imageComments = imageComments.comments
          imageComments.forEach(function(comment){
            comment = new Comment(comment)
          })
        }) 
    }

    static saveNewComment(){
        fetch(commentsURL, {
            method: "post",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              image_id: (imageId),
              content: (commentInput.value)
            })
          })
          .then(function(res){
            return res.json();
          })
          .then( newComment => {
            //console.log(newComment.content)
            newComment = new Comment(newComment)
            commentInput.value = ""
          })
    }

}