//let commentForm = document.querySelector('#comment_form')
// let commentInput = document.querySelector('#comment_input')
// let imageId = 2436 //Enter the id from the fetched image here
// const imageURL = `https://randopic.herokuapp.com/images/${imageId}`
// const commentsURL = `https://randopic.herokuapp.com/comments/`


class Image {

    constructor(url, name){
        let image_div = document.querySelector('#image_container')
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
        image_div.append(this.div)
    }

    static GetImage(){
        fetch(imageURL)
            .then(function(res){
                return res.json();
            })
            .then(image => {
                image = new Image(image.url, image.name)
        })
    }

    render(){
        return this.div
    }

    

}