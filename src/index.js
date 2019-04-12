document.addEventListener('DOMContentLoaded', () => {
    console.log('%c DOM Content Loaded and Parsed!', 'color: magenta')

    let imageId = 2439 //Enter the id from the fetched image here

    const imageURL = `https://randopic.herokuapp.com/images/${imageId}`

    const commentsURL = `https://randopic.herokuapp.com/comments/`

    function getImages() {
        fetch(imageURL)
            .then(function(res) {
                return res.json()
            })
            .then(function(data) {
                //console.log(data);
                //console.log(data.url)
                image = new Image(data.url, data.name)
                console.log(data.comments)
                comments = data.comments
                for(var i=0; i< comments.length; i++) {
                    console.log(comments[i].content)
                    comment = new Comment(comments[i].content)
                    comment.render()
                }
                image.render()
            })
    }

    function getComments() {
        const form = document.querySelector("#comment_form")
        let input = document.querySelector("#comment_input")
        form.addEventListener('submit', (e) => {
            e.preventDefault()
            console.log("pressed")
            fetch(commentsURL, {
                method: 'POST',
                headers: {
                    'Accept' : 'application/json',
                    'Content-Type' : 'application/json',
            },
                body: JSON.stringify({image_id: imageId, content: input.value})
            })
                .then(function(res) {
                    input.value = " "
                    return res.json()
                })
        })
    }

    //setInterval(getImages(), 1000);
    //// wish i setup a different fetch for comments :/


    getImages()
    getComments()

})

