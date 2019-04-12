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
        this.render(this.div)

    }

    render(image){
        let board = document.querySelector('#image_container')
        board.append(image)
    }

}