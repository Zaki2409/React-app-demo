import classes from './NewPost.module.css';
import { useState } from 'react';

function NewPost(props) {

  const [enteredBody , setEnteredBody ] = useState('');
  const [enteredAuthor , setEnteredAuthor ] = useState('');

  //Event Listenter Fucntion 
 
  function changeBodyHandler(event) {
    setEnteredBody(event.target.value);
  } 

  function authorBodyHandler(event) {
      setEnteredAuthor(event.target.value);
    } 

  function submitHandler(event) {
    event.preventDefault();
    const postData = {
      body : enteredBody,
      author : enteredAuthor
    };
    console.log(postData);
    props.onAddPost(postData);
    props.onCancel();

  }
  return (
    <form className={classes.form} onSubmit={submitHandler}> 
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={changeBodyHandler}/>
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={authorBodyHandler} />
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button>Submit</button>

      </p>
    </form>
  );
}

export default NewPost;
