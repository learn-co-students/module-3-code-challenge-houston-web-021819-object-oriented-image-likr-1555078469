 class Comment{
     constructor(image_id, content){
      const commentsUl = document.querySelector('#comments')
      const commentsLi = document.createElement('li')
      commentsLi.innerText = content
      commentsUl.appendChild(commentsLi)
      this.image_id = image_id,
      this.content = content
     }

     static render(img){
       console.log(img.comments[0].content)
        img.comments.forEach(function(comment){
        const commentsLi = document.createElement('li')
        const commentsUl = document.querySelector('#comments')
        commentsLi.innerText = comment.content
        commentsUl.appendChild(commentsLi)
       })
       
     }

     static create(commentInput,imageId){
         const commentsURL = `https://randopic.herokuapp.com/comments/`
         new Comment(imageId, commentInput) //instantiate comment
         fetch(commentsURL, {
             method:"POST",
             headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                     },
             body:JSON.stringify({
                   "image_id": imageId,
                   "content": commentInput
             })    
         })
     }
 }