document.addEventListener("DOMContentLoaded", () => {
  console.log("%c DOM Content Loaded and Parsed!", "color: magenta");

  let imageId = 2434; //Enter the id from the fetched image here

  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`;

  const commentsURL = `https://randopic.herokuapp.com/comments/`;

  const imageContainer = document.getElementById("image_container");

  const commentForm = document.getElementById("comment_form");

  const commentInput = document.getElementById("comment_input");

  const commentsList = document.getElementById("comments");

  const getContent = function() {
    fetch(imageURL)
      .then(resp => {
        return resp.json();
      })
      .then(imageData => {
        newImage = new Image(imageData.url, imageData.name);
        imageContainer.append(newImage.render());
        imageData.comments.forEach(comment => {
          if (comment.content !== "") {
            newComment = new Comment(comment.content, comment.image_id);
            commentsList.append(newComment.render());
          }
        });
      });
  };

  const persistComment = function(comment) {
    fetch(commentsURL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        image_id: comment.imageId,
        content: comment.content
      })
    });
  };

  commentForm.addEventListener("submit", e => {
    e.preventDefault();
    if (commentInput.value !== "") {
      newComment = new Comment(commentInput.value, imageId);
      commentsList.append(newComment.render());
      persistComment(newComment);
      commentInput.value = "";
    }
  });

  getContent();
});
