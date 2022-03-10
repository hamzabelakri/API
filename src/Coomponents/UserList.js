import React from 'react'

function UserList(users) {
  return (
    <div>
     {users.map((elt)=>(<h3>{elt.name}</h3>))}

    </div>
  )
}

export default UserList