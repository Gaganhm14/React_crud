import styled from '@emotion/styled'
import {AppBar,Toolbar } from '@mui/material'
import { NavLink } from 'react-router-dom'

const Header = styled(AppBar)`
background:skyblue;
`

const Tab = styled(NavLink)`
font-size:20;
margin-right:20px;
text-decoration:None;
color:white;`


const Navbar = ()=>{
    return (
        <Header position='static'>
       <Toolbar>
       <Tab to='/'>CRUD Application</Tab>
       <Tab to='/all'>All Users</Tab>
       <Tab to='/add'>Add User</Tab>
       </Toolbar>
        </Header>
    )
}

export default Navbar