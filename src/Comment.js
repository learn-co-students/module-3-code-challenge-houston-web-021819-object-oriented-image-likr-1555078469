 class Comment {
     constructor(comment){
      let my_ul = document.querySelector('ul')
      let my_li = document.createElement('li')
      my_ul.append(my_li)
      my_li.append(comment.content)
 }
}