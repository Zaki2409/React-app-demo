const names =['Zaki', 'Zaheer'];

function Post() {
const chosenname = Math.random() > 0.5 ? names[0] : names[1];
return <div>
    <p>{chosenname}</p>
    <p>React.js is Awesome</p>
</div>
}

export default Post;