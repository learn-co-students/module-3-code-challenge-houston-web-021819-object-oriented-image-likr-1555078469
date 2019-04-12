document.addEventListener("DOMContentLoaded", () => {
  console.log("%c DOM Content Loaded and Parsed!", "color: magenta");

  let imageId = 2434; //Enter the id from the fetched image here

  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`;

  const commentsURL = `https://randopic.herokuapp.com/comments/`;

  const likesURL = `https://randopic.herokuapp.com/likes`;

  const imageContainer = document.getElementById("image_container");

  const commentForm = document.getElementById("comment_form");

  const commentInput = document.getElementById("comment_input");

  const commentsList = document.getElementById("comments");

  const addLike = function(image) {
    fetch(likesURL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        image_id: imageId
      })
    });
  };

  const removeLike = function(image) {
    fetch(likesURL, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        image_id: imageId
      })
    });
  };

  const getContent = function() {
    fetch(imageURL)
      .then(resp => {
        return resp.json();
      })
      .then(imageData => {
        newImage = new Image(
          imageData.url,
          imageData.name,
          imageData.like_count
        );
        imageContainer.append(newImage.render());
        const likeButton = document.getElementById("like-button");
        const imageLikes = document.getElementById("image-likes");
        likeButton.addEventListener("click", () => {
          if (likeButton.textContent === `Like this image`) {
            addLike();
            likeButton.textContent = "You liked this image!";
            imageLikes.textContent = `Likes - ${newImage.likes + 1}`;
          } else {
            removeLike();
            likeButton.textContent = "Like this image";
            imageLikes.textContent = `Likes - ${newImage.likes}`;
          }
        });
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
