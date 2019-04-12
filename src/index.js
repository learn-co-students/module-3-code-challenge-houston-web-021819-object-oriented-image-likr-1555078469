document.addEventListener("DOMContentLoaded", () => {
  console.log("%c DOM Content Loaded and Parsed!", "color: magenta");

  let imageId = 2442; //Enter the id from the fetched image here
  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`;

  const commentsURL = `https://randopic.herokuapp.com/comments/`;

  fetch(imageURL)
    .then(function(response) {
      return response.json();
    })
    .then(function(imagesData) {
      console.log(imagesData);
      my_div = document.querySelector("#image_container");
      my_img = document.createElement("img");
      my_img.src = imagesData.url;
      my_img.className = "car col-md-4";
      my_div.append(my_img);
      my_header = document.createElement("h4");
      my_div.append(my_header);
      my_header.innerText = "Confress";

      imagesData.comments.forEach(function(comment) {
        console.log(comment);

        new Comment(comment);
        // my_ul = document.querySelector('ul')
        // my_li = document.createElement('li')
        // my_ul.append(my_li)
        // my_li.append(comment.content)
      });
    });
  my_form = document.querySelector("form");
  my_form.addEventListener("submit", function(e) {
    e.preventDefault();
    my_input = document.querySelector("#comment_input");
    my_ul = document.querySelector("ul");
    my_li = document.createElement("li");
    my_ul.append(my_li);
    my_li.append(my_input.value);

    fetch(commentsURL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        imageId: 2442,
        content: my_input.value
      })
    })
      .then(function(response) {
        return response.json();
      })
      .then(function(content) {
        console.log(content);
      });
  });
});
