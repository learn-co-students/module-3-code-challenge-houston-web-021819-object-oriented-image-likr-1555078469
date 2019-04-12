class Comment{
    constructor(content){
        this.content = content
    }

    static renderComment(content){
        const commentContainer = document.querySelector("#comments");

        const li = document.createElement('li');
        li.append(content);

        commentContainer.append(li);
    }

    static create(content){
        
        let imageId = 2443//Enter the id from the fetched image here

        fetch(`https://randopic.herokuapp.com/comments`,{
            method:'POST',
            headers: {
                'Content-type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({
                image_id: imageId,
                content: content
            })
        }).then(res=> res.json())
        .then(function(comment){
            new Comment(comment.content);
            //renderComment(comment.content);
            //console.log(comment.content)
            
        })
   
}

}