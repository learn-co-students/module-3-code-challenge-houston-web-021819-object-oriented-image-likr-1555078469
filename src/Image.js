class Image {
  constructor(url, name, likes) {
    this.div = document.createElement("div");
    this.div.className = "image_card";
    this.likes = likes;

    const img = document.createElement("img");
    img.src = url;

    const h4 = document.createElement("h4");
    h4.append(name);

    const h6 = document.createElement("h6");
    h6.textContent = `Likes - ${likes}`;
    h6.id = "image-likes";

    const likeButton = document.createElement("button");
    likeButton.textContent = `Like this image`;
    likeButton.style.marginBottom = "10px";
    likeButton.id = "like-button";

    this.div.append(img, h4, h6, likeButton);
  }

  render() {
    return this.div;
  }
}
