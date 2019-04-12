document.addEventListener('DOMContentLoaded', () => {
  console.log('%c DOM Content Loaded and Parsed!', 'color: magenta')
  const form = document.querySelector('#comment_form')

  const imageId = 2441 //Enter the id from the fetched image here

  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`

  const commentsURL = `https://randopic.herokuapp.com/comments/`
 
function createComment(image, content){
  console.log(content)
 fetch(commentsURL,{
   method: 'POST',
   headers:{
    'Accept':'application/json',
    'Content-Type':'application/json'
   },
   body:JSON.stringify({
     image_id: image,
     content: content
   })
 })
}

  fetch(imageURL)
  .then((res) =>res.json())
  .then((pic)=>{
    let bigPic = new Image(pic.url,pic.name)
    let comm =pic.comments
    comm.forEach(element => {
      let firstComm = new Comment(element.content) 
    });
  })

  form.addEventListener('submit',(e) => {
    e.preventDefault()
    let input = document.querySelector('#comment_input')
    let newComm = new Comment(input.value)
    createComment(imageId,input.value)
    input.value = ''
  })
})
