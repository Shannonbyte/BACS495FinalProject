import React, {useState, useEffect} from 'react';

function PostDisplay(props) {

    const [posts, setPosts] = useState([]);
    const [update, setUpdate] = useState(0);

    useEffect(() => {
        fetch('http://localhost:9000/posts')
          .then(res => res.json())
          .then(data => setPosts(data))
      }, [update])

  const votePost = (id, votes) =>{
          var newVotes = votes == null ? 1 : votes + 1;
          var updatepost = {'id': id, 'votes': newVotes}
          fetch('http://localhost:9000/posts',
              {
                  method:'PATCH',
                  body: JSON.stringify(updatepost),
                  headers: {
                    "Content-Type": "application/json; charset=utf-8",
                  }
              })
            .then(res => res.json())
            .then(setUpdate(update + 1))
            .then(console.log("finished"))
      }


  return (
    <div className="m-5">
      <h3>
        Posts<br/>
        {props.posts.map(u => <li key={u.id}>{u.id} - {u.title}</li>)}
      </h3>
      <div>
        {props.posts.map(q =>
            <li key={q.id}>{q.title} - {q.content} (Votes: {q.votes == null ? "0":q.votes})
                <button value="Vote" onClick={() => votePost(q.id, q.votes)}>Vote</button>
            </li>)
        }
      </div>
    </div>
  );

}

export default PostDisplay;
