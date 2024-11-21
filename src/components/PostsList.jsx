import { useState } from 'react';
import Post from './Post'
import classes from '../components/PostsList.module.css'; 
import NewPost from './NewPost';
import Modal from './modal';

function PostsList() {
  const [modalIsVisible, setModalIsVisible] = useState(true);
    const [enteredBody , setEnteredBody ] = useState('');
    const [enteredAuthor , setEnteredAuthor ] = useState('');

    //Event Listenter Fucntion 
    function hideModalHandler() {
      setModalIsVisible(false);
    }
    function changeBodyHandler(event) {
      setEnteredBody(event.target.value);
    } 

    function authorBodyHandler(event) {
        setEnteredAuthor(event.target.value);
      } 
return (
     <>
     {modalIsVisible ? <Modal onClose={hideModalHandler}>
     <NewPost 
          onBodyChange={changeBodyHandler} 
          onAuthorChange={authorBodyHandler}/>
      </Modal> :false}
     
 <ul className={classes.posts}>
     <Post author={enteredAuthor} body={enteredBody}/>
     <Post author="zaheer" body="Next.js is awesome"/>
</ul>
</>
);
}

export default PostsList;