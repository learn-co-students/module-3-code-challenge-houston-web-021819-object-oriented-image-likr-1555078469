 class Comment{
     constructor(image_id, content){
      const commentsUl = document.querySelector('#comments')
      const commentsLi = document.createElement('li')
      commentsLi.innerText = content
      commentsUl.appendChild(commentsLi)
      this.image_id = image_id
      this.content = content
     }

     static render =img=>{
       //console.log(img.comments.length)
        img.comments.forEach(comment=>{
            new Comment(comment.image_id, comment.content) //instantiate each comment
       })
       
     }

     static create=(commentInput,imageId)=>{
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