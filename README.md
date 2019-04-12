
#### 5: When a user makes a comment, **Render** the new comment in the comment list *without refreshing the page*

Render the new comment inside of an `li` element.



#### 6: When a user makes a comment, **Send** the comment to the server so that it persists
After you've rendered the comment on the page, make sure to persit the new comment by sending it to the server.
You're request should look like this:
```js
POST 'https://randopic.herokuapp.com/comments'

Required keys in the body of the request:
{
  image_id: (insert image id here),
  content: (insert comment content here)
}

Required Headers
{
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}
```



#### 7: **Refactor** your code to make it as *clean as possible*

**Don't do this without commiting first**

**Don't do this without commiting first**

**Don't do this without commiting first**



### Submission

1. When time is called, `git add` and `git commit` if you haven't already, then `git push` *on your branch*. You will never be able to push to `master`; you will not be able to push to your own branch before time is called. If you're done before time, make a commit (don't push it) and continue working on stretch features. If you break something, you can go back to your working commit.
2. Make a pull request from your branch to `master`. Copy and paste the link to your pull request into the text box on <http://learn.co/assignments> for the code challenge task. Submit.
3. Eat something nice for lunch and relax. *Do not* talk to fellow students, students in other mods, or anyone about the code challenge. Your instructors will give you feedback on your work in the afternoon.