import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  styled
} from "@mui/material";

import { useState } from "react";
import { useEffect } from "react";
import { getUsers ,deleteUser } from "../service/api";
import { Link } from "react-router-dom";

const Styledtable = styled(Table)`
width:90%;
margin:50px auto 0 auto`;

const Thead = styled(TableRow)`
background:skyblue;
&>th {
  color:white;
  font-size:18px;
}
`
const Tbody = styled(TableRow)`
&>td {
  font-size:15px;
}
`

const AllUsers = () => {
  const [users, setusers] = useState([]);

  useEffect(() => {
    getUserDetails();
  }, []);

  const getUserDetails = async () => {
    let response = await getUsers();
    console.log(response);
    setusers(response.data);
  };

  const deleteUserData = async (id)=>{
    await deleteUser(id);
    getUserDetails();
  }
  return (
    <div>
      <Styledtable>
        <TableHead>
          <Thead>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Action</TableCell>
          </Thead>
        </TableHead>
        <TableBody>
          {
            users.map(user=> (
              <Tbody>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                <Button color="success" component={Link} to={`/edit/${user.id}`}>Edit</Button>
                <Button color="warning" onClick={()=>deleteUserData(user.id)}>Delete</Button></TableCell>
              </Tbody>
  ))}
        </ TableBody>
      </Styledtable>
    </div>
  );
};

export default AllUsers;
