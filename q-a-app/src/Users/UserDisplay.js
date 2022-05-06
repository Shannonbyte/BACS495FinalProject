
function UserDisplay(props) {
  return (
    <div className="">
      <h3>
        List of current Users in the database<br/>
        {props.users.map(u => <li key={u.id}>{u.id} - {u.name}</li>)}
      </h3>
    </div>
  );

}

export default UserDisplay;
