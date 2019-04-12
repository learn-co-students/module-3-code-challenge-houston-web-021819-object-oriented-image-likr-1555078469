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
    }

    render(){
        return this.div
    }

    renderMyImage(){
        const imageContainer = document.querySelector("#image_container")
        //header with myimage's name
        let myImageCard = this.render()
        imageContainer.append(myImageCard)
    }

}