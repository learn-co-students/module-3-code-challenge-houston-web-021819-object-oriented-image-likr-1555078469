class Image {

    constructor(url, name){
        this.url = url
        this.name = name
        this.render(this)
    }

    render(image){
        let div = document.createElement('div')
        div.className = 'image_card'
        const img = document.createElement('img')
        img.src = image.url
        const h4 = document.createElement('h4')
        h4.append(image.name)
        div.append(h4, img)
        let board = document.querySelector('#image_container')
        board.append(div)
    }

    //retrieves image with comments, instantiates Image, and sends comments onwards
    static retrieveImage(imageURL){
        fetch(imageURL)
        .then( res => res.json() )
        .then( result => {
            new Image(result.url, result.name)
            result.comments.forEach( comment => new Comment(comment.content) )
        })
    }

}