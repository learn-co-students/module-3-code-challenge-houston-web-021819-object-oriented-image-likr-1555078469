document.addEventListener('DOMContentLoaded', () => {
  console.log('%c DOM Content Loaded and Parsed!', 'color: magenta')

  let imageId = 2374 //Enter the id from the fetched image here

  const imageContainer = document.getElementById('image_container')
  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`
  const commentForm = document.getElementById('comment_form')
  const commentBox = document.getElementById('comment_input')
  const commentsURL = `https://randopic.herokuapp.com/comments/`
  const commentsList = document.getElementById('comments')

  const fetchImage = function(){
    fetch(imageURL)
      .then(function(response){
        return response.json();
      })
      .then(function(response){
          const image = document.createElement("img")
          image.setAttribute('src', `${response.url}`)
          imageContainer.append(image)

          response.comments.forEach(comment => {
            //response.forEach(response)
            const commentLi = document.createElement('li')
            commentLi.innerText = `${comment.content}`
            commentsList.append(commentLi)
          });

        })
    }
    fetchImage()

    commentForm.addEventListener('submit', e)
    e.preventDefault
    







})
