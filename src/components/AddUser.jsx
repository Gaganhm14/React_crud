import React from 'react'
import { Button, FormControl, FormGroup, Input, InputLabel, Typography, } from '@mui/material';
import styled from '@emotion/styled';
import { useState } from 'react';
import {  useNavigate } from 'react-router-dom';

import { addUser } from '../service/api';


const Container = styled(FormGroup)`
width:30%;
margin:5% auto 0 auto;
& >div {
    margin-top:20px;
}`

const initialvalues = {
  name:"",
  phone:"",
  email:"",

}


const AddUser = () => {

  const [user ,setuser]=useState(initialvalues);
  const navigate = useNavigate();

  const Onvaluechange =(e)=>{
    // console.log(e.target.name , e.target.value);
    setuser({...user,[e.target.name]:e.target.value})
    console.log(user);
   }

   const adduserdetails = async()=>{
       await addUser(user);
       navigate('/all');
   }

  return (
    <div>
      <Container>
      <Typography variant='h4'>Add user</Typography>
      <FormControl>
      <InputLabel>Name</InputLabel>
      <Input onChange={ (e)=> Onvaluechange(e)} name="name"/>
      </FormControl>
      <FormControl>
      <InputLabel>Phone</InputLabel>
      <Input onChange={ (e)=> Onvaluechange(e)} name="phone"/>
      </FormControl>
      <FormControl>
      <InputLabel>Email</InputLabel>
      <Input onChange={ (e)=> Onvaluechange(e)} name="email"/>
      </FormControl>
      <FormControl>
        <Button variant='contained' onClick={()=>adduserdetails()}>Add User</Button>
      </FormControl>
      </Container>
    </div>
  )
}

export default AddUser
