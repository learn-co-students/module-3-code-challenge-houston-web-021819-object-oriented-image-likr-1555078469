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

    render(){
        return this.div
    }

}