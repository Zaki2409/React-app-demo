
import Post from './Post'
import classes from '../components/PostsList.module.css'; 
import NewPost from './NewPost';
import Modal from './modal';

function PostsList({onStopPosting , isPosting}) {

   
return (
     <>
     {isPosting ? <Modal onClose={onStopPosting}>
     <NewPost 

          onCancel={onStopPosting}
          />
      </Modal> :false}
     
 <ul className={classes.posts}>
     
     <Post author="zaheer" body="Next.js is awesome"/>
</ul>
</>
);
}

export default PostsList;