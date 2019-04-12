class Comment {
  constructor(content, imageId) {
    this.li = document.createElement("li");
    this.li.textContent = content;
    this.content = content;
    this.imageId = imageId;
  }

  render() {
    return this.li;
  }
}
