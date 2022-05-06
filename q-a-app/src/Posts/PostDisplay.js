import React, {useState, useEffect} from 'react';
import './PostDisplay.css'

function PostDisplay(props) {

    const [posts, setPosts] = useState([]);
    const [update, setUpdate] = useState(0);
    const [answer, setAnswer] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        fetch('http://localhost:9000/posts')
          .then(res => res.json())
          .then(data => {setPosts(data);})
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

      }

  const answerQuestion = (id, answer, prevanswers) =>{
    var newAnswer = [...prevanswers, answer];
    var updatepost = {'id':id, 'answers' : newAnswer}
    fetch('http://localhost:9000/posts/answers',
        {
            method:'PATCH',
            body: JSON.stringify(updatepost),
            headers: {
              "Content-Type": "application/json; charset=utf-8",
            }
        })
        .then(res => res.json())
        .then(setUpdate(update + 1))

  }

  const ansOutput = (data) => {
    console.log(data);
    if(data.length>0){
      return <div>
        {data.map(ans => <h5>{ans}</h5>)}
      </div>;
    }
  return <h5>no answers yet</h5>;
  };

  return (
    <div className="">
      <h3 className="mb-2">Questions</h3>
      <div className="Questions">
        {props.posts.map(q =>
            <div className="indie-q" key={q.id}>
                {q.title} - (Votes: {q.votes == null ? "0":q.votes})
                <button value="Vote" onClick={() => votePost(q.id, q.votes)}>Vote</button>
                <h5>
                  {q.content}
                </h5>
                <div>
                Answer a question here:
                <textarea className="form-control mb-2" id="newAnswer" onChange={e=>setAnswer(e.target.value)}></textarea>
                <button value="Submit Answer" className="btn btn-outline-primary btn-lg py-2 mb-2" onClick={() => answerQuestion(q.id, answer, q.answers)}>Submit Answer</button>
                <h5>
                Answers:
                </h5>
                <div>
                {ansOutput(q.answers)}
                </div>
                </div>
            </div>)
        }
      </div>
    </div>
  );

}

export default PostDisplay;
