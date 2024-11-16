import { useState } from 'react';
import Post from './Post'
import classes from '../components/PostsList.module.css'; 
import NewPost from './NewPost';

function PostsList() {
    const [enteredBody , setEnteredBody ] = useState('');
    const [enteredAuthor , setEnteredAuthor ] = useState('');

    //Event Listenter Fucntion 
    function changeBodyHandler(event) {
      setEnteredBody(event.target.value);
    } 

    function authorBodyHandler(event) {
        setEnteredAuthor(event.target.value);
      } 
return (
     <>
     <NewPost onBodyChange={changeBodyHandler} onAuthorChange={authorBodyHandler}/>
 <ul className={classes.posts}>
     <Post author={enteredAuthor} body={enteredBody}/>
     <Post author="zaheer" body="Next.js is awesome"/>
</ul>
</>
);
}

export default PostsList;