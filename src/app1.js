import React,{useState} from "react";
import axios from 'axios';
import logo from './Amazon-logo.jpg';
import './App.css';

function App(){
//   const[text,setText]=useState("");

//   function getData(){
//     axios.get("http://localhost:3002/",  { crossdomain: true }).then(response => {
     
//       setText(response.data);
//     });
//   }

  return(
<div id="body">
   <div>
       <span><img src={logo} id="logo"></img></span> 
<input type="text" id="search-box" placeholder="Search" />
<button type="button" id="go-btn">GO</button>
   </div>
</div>
  );
}

export default App;