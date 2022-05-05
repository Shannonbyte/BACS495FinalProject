import React, {useState, useEffect} from 'react';

function UserInput(props) {
  const [name, setName] = useState(0);
  const [id, setId] = useState(0);
  const createUser = (e) =>{
    var insert = {'id': id, 'name': name}
    fetch('http://localhost:9000/users',
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
    <div className="">
      <h3 className="text-lg-left">
        Enter new Users below:<br/>
        <input type="text" id="id" onChange={e=>setId(e.target.value)}/><br/>
        <input type="text" id="name" onChange={e=>setName(e.target.value)}/><br/>
        <button value="Insert New User" onClick={createUser}>Insert New User</button>
      </h3>
    </div>
  );
}

export default UserInput;
