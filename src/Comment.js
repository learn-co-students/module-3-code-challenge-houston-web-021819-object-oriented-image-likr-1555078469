class Comment{
    constructor(words){
        const commSection = document.querySelector('#comments')
        const comment = document.createElement('li')
        comment.innerText = words
        commSection.append(comment)
    }

}