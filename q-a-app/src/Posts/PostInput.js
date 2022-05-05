import React, {useState, useEffect} from 'react';

function PostInput(props) {
  const [title, setTitle] = useState(0);
  const [content, setContent] = useState(0);
  const [id, setId] = useState(0);
  const createPost = (e) =>{
    var insert = {'id': id, 'title': title, 'content': content}
    fetch('http://localhost:9000/posts',
        {
          method:'POST',
          body: JSON.stringify(insert),
          headers: {
            "Content-Type": "application/json; charset=utf-8",
          }
        })
      .then(res => res.json())
      .then(data => console.log(data))
    props.notifyParent();
  }
  return (
    <div className="m-5">
      <h3 className="text-lg-left">
        Create a Post below:<br/>
        <input type="text" id="id" onChange={e=>setId(e.target.value)}/><br/>
        <input type="text" id="title" onChange={e=>setTitle(e.target.value)}/><br/>
        <input type="text" id="content" onChange={e=>setContent(e.target.value)}/><br/>
        <button value="Create New Post" onClick={createPost}>Create Post</button>
      </h3>
    </div>
  );
}

export default PostInput;
