class Image {

    constructor(image){ //(url, name)
        this.image = image
        this.div = document.createElement('div')
        this.div.className = 'image_card'

        const img = document.createElement('img')
        img.src = "http://blog.flatironschool.com/wp-content/uploads/2017/06/IMAG2936-352x200.jpg"

        const h4 = document.createElement('h4')
        h4.append("Science Fair")

        this.div.append(
            img,
            h4
        )

        const imageContainer = document.querySelector('#image_container')
        imageContainer.append(this.div)
    }

    render(){
        return this.div
    }


}