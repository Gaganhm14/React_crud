import React from 'react'
import { Button, FormControl, FormGroup, Input, InputLabel, Typography, } from '@mui/material';
import styled from '@emotion/styled';
import { useState ,useEffect } from 'react';
import {  useNavigate, useParams } from 'react-router-dom';

import { getUser,editUser } from '../service/api';


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


const EditUser = () => {
  const [user ,setuser]=useState(initialvalues);
  const navigate = useNavigate();
  const {id} = useParams();

  useEffect(()=>{
    getUserData();
  },[])

  const getUserData =async()=>{
  let response = await getUser(id)
  setuser(response.data)
  }

  const Onvaluechange =(e)=>{
    // console.log(e.target.name , e.target.value);
    setuser({...user,[e.target.name]:e.target.value})
    console.log(user);
   }

   const adduserdetails = async()=>{
       await editUser(user,id);
       navigate('/all');
   }

  return (
    <div>
      <Container>
      <Typography variant='h4'>EditUser</Typography>
      <FormControl>
      <InputLabel>Name</InputLabel>
      <Input onChange={ (e)=> Onvaluechange(e)} name="name" value={user.name}/>
      </FormControl>
      <FormControl>
      <InputLabel>Phone</InputLabel>
      <Input onChange={ (e)=> Onvaluechange(e)} name="phone" value={user.phone}/>
      </FormControl>
      <FormControl>
      <InputLabel>Email</InputLabel>
      <Input onChange={ (e)=> Onvaluechange(e)} name="email" value={user.email}/>
      </FormControl>
      <FormControl>
        <Button variant='contained' onClick={()=>adduserdetails()}>Edit User</Button>
      </FormControl>
      </Container>
    </div>
  )
}

export default EditUser
