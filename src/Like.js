class Like {

    constructor(like){
        this.like = like
        this.showLikes()
    }

    showLikes() {
        let image_div = document.querySelector('#image_container')
        let h5 = document.createElement("h5")
        h5.innerText = `${this.like} likes `
        image_div.append(h5)
    }

    static GetLikes() {
        fetch(imageURL)
            .then(function(res){
                return res.json();
            })
            .then(likes => {
                console.log(likes)
                likes = new Like(likes.like_count)
        })
    }

}