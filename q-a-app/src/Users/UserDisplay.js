
function UserDisplay(props) {
  return (
    <div>
      <p>
        List of current Users in the database<br/>?
        {props.users.map(u => <li key={u.id}>{u.id} - {u.name}</li>)}
      </p>
    </div>
  );

}

export default UserDisplay;
