import React, {useState, useEffect} from 'react';
import './PostDisplay.css'

function PostDisplay(props) {

    const [posts, setPosts] = useState([]);
    const [update, setUpdate] = useState(0);
    const [answers, setAnswer] = useState(0);
    const [count, setCount] = useState(0);

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

  const answerQuestion = (id, setAnswer) =>{
    var newAnswer = answers == null ? 1 : answers + 1;
    var updatepost = {'_id':id, 'answers' : newAnswer}
    fetch('http://localhost:9000/posts/',
        {
            method:'PUT',
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
    <div className="">
      <h3 className="mb-2">Questions</h3>
      <div className="Questions">
        {props.posts.map(q =>
            <h4 className="indie-q" key={q.id}>
                {q.title} - (Votes: {q.votes == null ? "0":q.votes})
                <button value="Vote" onClick={() => votePost(q.id, q.votes)}>Vote</button>
                <h5>
                  {q.content}
                </h5>
                <div>
                Answer a question here:
                <textarea className="form-control mb-2" id="newAnswer" onChange={e=>setAnswer(e.target.value)}></textarea>
                <button value="Submit Answer" className="btn btn-outline-primary btn-lg py-2 mb-2" onClick={() => answerQuestion(q.id, setAnswer)}>Submit Answer</button>
                <h5>
                Answers:
                </h5>
                <h5>
                {q.answers}
                </h5>
                </div>
            </h4>)
        }
      </div>
    </div>
  );

}

export default PostDisplay;
