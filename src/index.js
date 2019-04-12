document.addEventListener('DOMContentLoaded', () => {
  console.log('%c DOM Content Loaded and Parsed!', 'color: magenta')

  let imageId = 2443//Enter the id from the fetched image here

  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`

  const commentsURL = `https://randopic.herokuapp.com/comments/`

  fetch(`https://randopic.herokuapp.com/images/${imageId}`)
    .then(res => res.json())
    .then(function(image){
      //console.log(image);
      new Image(image.url, image.name);
      Image.renderImage(image.url, image.name);
      //renderNewImageForm();
      //not required in deliverable
      image.comments.forEach(function(comment){
        new Comment(comment.content);
        Comment.renderComment(comment.content);
        //renderNewCommentForm();
        //already exist in index.html
      })
    })

    
})

const commentForm = document.querySelector("#comment_form");
const commentInput = document.querySelector("#comment_input");
commentForm.addEventListener('submit', (e)=>{
  e.preventDefault();

  Comment.create(commentInput.value);
  Comment.renderComment(commentInput.value);
})

//No need to execute beccause we dont have to create new image
function renderNewImageForm(){
  const imageContainer = document.querySelector("#image_container");
  const form = document.createElement('form');

  const input1 = document.createElement('input');
  input1.className = "image-url";

  const p1 = document.createElement('p');
  p1.append('Enter the image url');
  input1.append(p1);
  

  const input2 = document.createElement('input')
  input2.className = "image-name";

  const p2 = document.createElement('p')
  p2.append('Enter the Name of the image');
  input2.append(p2);

  const submitBtn = document.createElement('BUTTON');
  submitBtn.append('Create Image');

  form.append(input1, input2, submitBtn);
  imageContainer.append(form);

  form.addEventListener('submit', (e)=>{
      e.preventDefault();
      Image.create(input1.value, input2.value);
  })
}

