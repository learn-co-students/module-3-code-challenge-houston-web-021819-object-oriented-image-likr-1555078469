class Image {

    constructor(url, name, imageContainer){
        this.url = url
        this.name = name
        this.imageContainer = imageContainer
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
    }

    renderImage(){
        this.imageContainer.append(this.div)   
    }

}