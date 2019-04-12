let imageId = 1 //Enter the id from the fetched image here
const imageURL = `https://randopic.herokuapp.com/images/${2444}`
const commentsURL = `https://randopic.herokuapp.com/comments/`



document.addEventListener('DOMContentLoaded', () => {
  console.log('%c DOM Content Loaded and Parsed!', 'color: magenta')

  //let imageId = 1 //Enter the id from the fetched image here

  

  const commentsURL = `https://randopic.herokuapp.com/comments/`


})


fetch('https://randopic.herokuapp.com/images/2444')
.then(function(response){
  return response.json()
})
.then(function(imageData){
 console.log(imageData.comments)
 //comments.forEach(function(comments){
  
  const container = document.querySelector("#image_container")
  const imageTag = document.createElement('img')
  imageTag.src = imageData.url
  container.append(imageTag)

  const hTag = document.createElement('h4')
  container.append(hTag)

  
  const commentCon = document.querySelector('#comments')
  const commentTag = document.createElement('li')
  commentCon.append(commentTag)
  commentCon.innerText = comment.value
  
})
  // const form = document.querySelector('#comment_form')
  // form.addEventListener('submit', function(e){
  // e.preventDefault
  // renderComment
  










//   const htag = document.createElement('h4')
//   h4.innerText = 



