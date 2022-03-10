import './App.css';
import axios from "axios";
import React, { useEffect, useState } from "react";
import UserList from './Coomponents/UserList';

function App() {

  const [state, setstate] = useState();
 
 useEffect(()=>{
  axios.get("https://jsonplaceholder.typicode.com/users").then((response)=>{
    console.log(response.data)   
     setstate(response.data])
  })
 },[])

  return (
    <div className="App">
      <UserList users={state}/>
    </div>
  );
}

export default App;
