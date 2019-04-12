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
        const imgContainer = document.querySelector('#image_container')
        imgContainer.appendChild(this.div)
    }
    
    static render=()=>{ 
        fetch(imageURL)
        .then(response=>response.json())
        .then(img=>{
              new Image(img.url, img.name) // instantiate img
              Comment.render(img)//call display function
        })  
    }

}