import { useState } from 'react';
import Post from './Post'
import classes from '../components/PostsList.module.css'; 
import NewPost from './NewPost';
import Modal from './modal';

function PostsList({onStopPosting , isPosting}) {

  const [posts,setPosts] = useState([]);

  function addPostHandler(postData) {
    setPosts((existingPosts) => [postData, ...existingPosts]) //spread operator, a default operator built in js to spread our existing 
    //posts into  the new array of posts .(not optimal method/approach)
  }
return (
     <>
     {
     isPosting ? 
     <Modal onClose={onStopPosting}>
     <NewPost  onCancel={onStopPosting} onAddPost={addPostHandler} />
    </Modal> 
    :false
    }
     {posts.length >0 && 
     <ul className={classes.posts}>
     {posts.map((post) => <Post key= {post.body} author={post.author} body={post.body} />)} 
      </ul> } 
    {posts.length ===0 && <div style={{textAlign:'center' , color:'white'}}>
    <h2>There are no Posts Yet</h2>
    <p>Start adding some ! </p>
     </div>}
 
</>
);
// ERROR IN LINE 26 : Each child in a list should have a unique "key" prop. 
// SOLUTION key={unique value}

}

export default PostsList;