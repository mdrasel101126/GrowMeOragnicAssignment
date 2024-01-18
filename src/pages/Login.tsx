import { Box, Button, Grid, Input, Typography } from "@mui/material";
import {useEffect, useState } from "react";
import { IUser } from "../types/user";
import { getUserFromLocalStorage, saveToLocalStorage } from "../helpers/auth";
import {  useNavigate } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate();
  const user = getUserFromLocalStorage();
 useEffect(()=>{
  if (user?.email) {
    navigate("/");
  }
 },[navigate,user])
 

const [formData,setFormData]=useState<IUser>({
  username:"",
  phone:"",
  email:""
})

const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
};
 const handleSubmit=(e: React.FormEvent<HTMLFormElement>)=>{
  e.preventDefault();
   saveToLocalStorage(formData);
   navigate("/");
   
 }
 
  return (
      <div style={{width:"95vw",margin:"20px auto"}}>
        <Typography variant="h4" style={{padding:"10px"}}>
          Please Login
        </Typography>
         <form onSubmit={handleSubmit}>
         <Box >
            <Grid container >
              <Grid item xs={12} style={{padding:"10px"}} >
              <Input type="text" required onChange={handleInputChange} id="username"
              name="username" placeholder="Enter Name"/>
              </Grid>
              <Grid item xs={12} style={{padding:"10px"}} >
                <Input type="tel" required onChange={handleInputChange} id="phone" name="phone" placeholder="Enter Phone Number" />
              </Grid>
              <Grid item  xs={12} style={{padding:"10px"}} >
                <Input type="email" required onChange={handleInputChange} id="email" name="email" placeholder="Enter Email" />
              </Grid>
            </Grid>
          </Box>
          
          <Button variant="outlined" type="submit" style={{margin:"10"}}>
            Login
          </Button>
         </form>
    </div>
  );
};

export default Login;