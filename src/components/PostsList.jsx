import Post from './Post'
import classes from '../components/PostsList.module.css'; 

function PostsList() {
return (
 <ul className={classes.posts}>
     <Post author="zaki" body="React.js is awesome"/>
     <Post author="zaheer" body="Next.js is awesome"/>
</ul>
);
}

export default PostsList;