class Image {

    constructor(url, name){
        this.div = document.createElement('div')
        this.div.className = 'image_card'

        const img = document.createElement('img')
        img.src = url

        const h4 = document.createElement('h4')
        h4.append(name)

        this.div.append(
            img,
            h4
        )

        Image.all.push(this)
    }

    render(){
        let imageContainer = document.querySelector('#image_container')
        imageContainer.append(this.div)
    }

    static create(imageURL){
      fetch(imageURL)
        .then(res => res.json())
        .then(image => {
          let newImage = new Image(image.url, image.name)

          newImage.render()

          image.comments.forEach(comment => {
            let newComment = new Comment(comment)
            newComment.render()
          })
        })
    }

}
Image.all = []
