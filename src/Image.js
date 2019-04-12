class Image {
  constructor(imgObject){
    this.url = imgObject.url
    this.name = imgObject.name
    this.likes = imgObject.like_count

    this.div = document.createElement('div')
    this.div.className = 'image_card'

    const img = document.createElement('img')
    img.src = this.url

    const h4 = document.createElement('h4')
    h4.append(this.name)

    this.div.append(
      img,
      h4
    )
  }

  likesString (){
    return (this.likes == 1 ? `${this.likes} like` : `${this.likes} likes`)
  }

  render(){
    return this.div
  }
}
