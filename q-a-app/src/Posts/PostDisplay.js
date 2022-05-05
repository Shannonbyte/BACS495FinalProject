function PostDisplay(props) {
  return (
    <div className="m-5">
      <h3>
        Posts<br/>
        {props.posts.map(u => <li key={u.id}>{u.id} - {u.name}</li>)}
      </h3>
    </div>
  );

}

export default PostDisplay;
