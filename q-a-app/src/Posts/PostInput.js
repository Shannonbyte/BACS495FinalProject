import React, {useState, useEffect} from 'react';

function PostInput(props) {
  const [title, setTitle] = useState(0);
  const [content, setContent] = useState(0);
  const [id, setId] = useState(0);
  const [votes, setVotes] = useState(0);

  const createPost = (e) =>{
    var insert = {'id': props.count, 'title': title, 'content': content, 'votes':votes}
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
    props.setCount(props.count+1);
  }
  return (
    <div className="">
      <form>
        <h3 className="text-lg-left">Ask a New Question Below:</h3>
        <div className="form-group">
          <label className="h3" for="title"> Title: </label>
          <textarea className="form-control" id="title" onChange={e=>setTitle(e.target.value)}></textarea>
          <label className="h3" for="content"> Content: </label>
          <textarea className="form-control mb-2" id="content" onChange={e=>setContent(e.target.value)}></textarea>
          <button className="btn btn-outline-primary btn-lg py-2" value="Create New Post" onClick={createPost}>Create Post</button>
        </div>
      </form>
    </div>
  );
}

export default PostInput;
