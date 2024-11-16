import Post from './Post'
import classes from '../components/PostsList.module.css'; 
import NewPost from './NewPost';

function PostsList() {
return (
     <>
     <NewPost />
 <ul className={classes.posts}>
     <Post author="zaki" body="React.js is awesome"/>
     <Post author="zaheer" body="Next.js is awesome"/>
</ul>
</>
);
}

export default PostsList;