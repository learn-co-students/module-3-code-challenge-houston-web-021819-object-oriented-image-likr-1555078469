class Comment {
    constructor(comments) {
        this.li = document.createElement("li")
        this.div = document.querySelector("image_card");
        //console.log(this.div)
        //console.log(comments)
        this.li.innerText = comments
    }

    render() {
        let doc = document.querySelector("#image_card")
        document.body.append(this.li) // appended to document because im just too baller
    }
}
