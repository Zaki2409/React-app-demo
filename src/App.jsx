import Post from './components/Post'

function App() {
  return (
    <main> 
      <Post author="zaki" body="React.js is awesome"/>
      <Post author="zaheer" body="Next.js is awesome"/>
    
    </main>

    // or
    // <> 
    //   <Post />
    //   <Post />
    //   <Post />
    
    // </>
  );
}
export default App;
