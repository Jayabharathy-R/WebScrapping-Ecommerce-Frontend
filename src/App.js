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

  // const[title,setTitle]=useState("");
  // const[image,setImage]=useState("");
  // const[mrp,setMrp]=useState(0);
  // const[price,setPrice]=useState(0);
  // const[discount,setdiscount]=useState(0);
  const value = 5;

  useEffect(()=>{
     axios.get("http://localhost:3002/WebScraping/getProduct", 
      { crossdomain: true })
      .then(response => {

      setData(response.data);
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
   {/* <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3} style={{ padding: "50px" }}>
          <Grid item xs={3}>
             <Card sx={{ minWidth: 275, height: 400, paddingBottom: "20px" }}>
              <CardContent>
                <Typography sx={{ fontSize: 30, height: "100px", backgroundColor: "lightgray", padding: "50px 25px" }} color="text.secondary" gutterBottom>
                  450 x 300
                </Typography>
                <Typography variant="h5" component="div" >
                  Fancy Product
                </Typography>

                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  $40.00 - $80.00
                </Typography>
                <br /><br />

              </CardContent>
             
            </Card>
          </Grid>
          <Grid item xs={3}>
             <Card sx={{ minWidth: 275, height: 400, paddingBottom: "20px" }}>
              <CardContent>
                <Typography sx={{ fontSize: 30, height: "100px", backgroundColor: "lightgray", padding: "50px 25px" }} color="text.secondary" gutterBottom>
                  <span class="sale">sale</span>450 x 300
                </Typography>
                <Typography variant="h5" component="div">
                  Special Item
                </Typography>

                <Rating name="read-only" value={value} readOnly sx={{ padding: "10px" }} />
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  <del>$20.00</del>&nbsp;$18.00
                </Typography>
              </CardContent>
    
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card sx={{ minWidth: 275, height: 400, paddingBottom: "20px" }}>
              <CardContent>
                <Typography sx={{ fontSize: 30, height: "100px", backgroundColor: "lightgray", padding: "50px 25px" }} color="text.secondary" gutterBottom>
                  <span class="sale">sale</span>450 x 300
                </Typography>
                <Typography variant="h5" component="div">
                  Sale Item
                </Typography>

                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  <del>$50.00</del>&nbsp;$25.00
                </Typography>
                <br /><br />

              </CardContent>
              
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card sx={{ minWidth: 275, height: 400, paddingBottom: "20px" }}>
              <CardContent>
                <Typography sx={{ fontSize: 30, height: "100px", backgroundColor: "lightgray", padding: "50px 25px" }} color="text.secondary" gutterBottom>
                  450 x 300
                </Typography>
                <Typography variant="h5" component="div">
                  Popular Item
                </Typography>

                <Rating name="read-only" value={value} readOnly sx={{ padding: "10px" }} />
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  $40.00
                </Typography>


              </CardContent>
             
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card sx={{ minWidth: 275, height: 400, paddingBottom: "20px" }}>
              <CardContent>
                <Typography sx={{ fontSize: 30, height: "100px", backgroundColor: "lightgray", padding: "50px 25px" }} color="text.secondary" gutterBottom>
                  <span class="sale">sale</span>450 x 300
                </Typography>
                <Typography variant="h5" component="div">
                  Sale Item
                </Typography>

                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  <del>$50.00</del>&nbsp;$25.00
                </Typography>
                <br /><br />

              </CardContent>
              
            </Card>
          </Grid>
          <Grid item xs={3}>
             <Card sx={{ minWidth: 275, height: 400, paddingBottom: "20px" }}>
              <CardContent>

                <Typography sx={{ fontSize: 30, height: "100px", backgroundColor: "lightgray", padding: "50px 25px" }} color="text.secondary" gutterBottom>

                  450 x 300
                </Typography>
                <Typography variant="h5" component="div">
                  Fancy Product
                </Typography>

                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  $40.00 - $80.00
                </Typography>
                <br /><br />

              </CardContent>
              
            </Card>
          </Grid>
          <Grid item xs={3}>
             <Card sx={{ minWidth: 275, height: 400, paddingBottom: "20px" }}>
              <CardContent>
                <Typography sx={{ fontSize: 30, height: "100px", backgroundColor: "lightgray", padding: "50px 25px" }} color="text.secondary" gutterBottom>
                  <span class="sale">sale</span>450 x 300
                </Typography>
                <Typography variant="h5" component="div">
                  Special Item
                </Typography>

                <Rating name="read-only" value={value} readOnly sx={{ padding: "10px" }} />
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  <del>$20.00</del>&nbsp;$18.00
                </Typography>
              </CardContent>
              
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card sx={{ minWidth: 275, height: 400, paddingBottom: "20px" }}>
              <CardContent>
                <Typography sx={{ fontSize: 30, height: "100px", backgroundColor: "lightgray", padding: "50px 25px" }} color="text.secondary" gutterBottom>
                  450 x 300
                </Typography>
                <Typography variant="h5" component="div">
                  Popular Item
                </Typography>

                <Rating name="read-only" value={value} readOnly sx={{ padding: "10px" }} />
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  $40.00
                </Typography>


              </CardContent>
              
            </Card>
          </Grid>
        </Grid>
      </Box> */}
   </div>
   </div>
  );
}

export default App;