import React,{useState,useEffect} from "react";
import axios from 'axios';
import logo from './Amazon-logo.jpg';
import './App.css';

import {
  Box,
 Typography,
  Button,
  Grid,
  Card,
  CardActions,
  CardContent,
  Rating
} from '@mui/material';

function App(){
  const[data,setData]=useState([]);

  const value = 5;

  useEffect(()=>{
    //  axios.get("http://localhost:3002/WebScraping/getProduct", 
    //   { crossdomain: true })
    fetch("http://localhost:3002/WebScraping/getProduct")
      .then(res => res.json())
      .then(response => {

      setData(response);
      console.log(response)
       // setText(response.data[0].image);
      });
      
  },[])
  
  
  return(
<div id="body">
   <div>
       <span><img src={logo} id="logo" alt="amazon"></img></span> 
<input type="text" id="search-box" placeholder="Search" />
<button type="button" id="go-btn">GO</button>
   </div>
   <div id="container">
     {data.map((product)=>{
        return(
        <div id="video">
          <div id="image">
        <img src={product.image} alt=""></img>
        </div>
              <div class="content">
                      <h4 class="title">{product.title}</h4>
                      <span>
                       M.R.P: {product.mrp} <br/>
                       Price: {product.price}<br/>
                       Discount:{product.discount}
                      </span>
                  
              </div>
              </div>
     )})}
   
   </div>
   </div>
  );
}

export default App;