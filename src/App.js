import './App.css';
import axios from "axios";
import React, { useEffect, useState } from "react";
import UserList from './Coomponents/UserList';
import "bootstrap/dist/css/bootstrap.min.css";


function App() {

  const [state, setstate] = useState();
 
 useEffect(()=>{
  axios.get("https://jsonplaceholder.typicode.com/users").then((response)=>{
     
     setstate([...response.data])
  })
 },[])

  return (
    <div>
      <h1>List Of Users</h1>
      <UserList users={state}/>
    </div>
  );
}

export default App;
