class Image {

    constructor(image){ //(url, name)
        this.image = image
        this.div = document.createElement('div')
        this.div.className = 'image_card'

        const img = document.createElement('img')
        img.src = image.url

        const h4 = document.createElement('h4')
        h4.append(image.name)

        this.div.append(
            img,
            h4
        )
    }

    render(){
        const imageContainer = document.querySelector('#image_container')
        imageContainer.append(this.div)
    }
}