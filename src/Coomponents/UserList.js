import React from 'react'
import Card from './Card'

function UserList({users}) {
  return (
    <div>
      <h1>hello</h1>
    {users.map((elt,index)=>(<Card key={index} user={elt}/>))}

    </div>
  )
}

export default UserList