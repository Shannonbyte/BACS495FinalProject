import React, {useState, useEffect} from 'react';
import PostDisplay from './Posts/PostDisplay';
import PostInput from './Posts/PostInput';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [update, setUpdate] = useState(0);

  useEffect(() => {
    fetch('http://localhost:9000/posts')
      .then(res => res.json())
      .then(data => setPosts(data))
  }, [update])

  const rerender = () =>{
    var newVal = update + 1;
    console.log(newVal);
    setUpdate(newVal);
  }

  return (
    <div>
      <PostInput notifyParent = {rerender}/>
      <PostDisplay posts={posts}/>
    </div>
  );
}

export default Posts;
