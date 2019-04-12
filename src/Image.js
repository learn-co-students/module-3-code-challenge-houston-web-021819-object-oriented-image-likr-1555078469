class Image {

    constructor(url, name){
        this.url = url;
        this.name = name;  
    }


    static renderImage(url, name){
        const imageContainer = document.querySelector("#image_container");
        const div = document.createElement('div')
        div.className = 'image_card'

        const img = document.createElement('img')
        img.src = url

        const h4 = document.createElement('h4')
        h4.append(name)

        div.append(
            img,
            h4
         )
        imageContainer.append(div)
    }

}
