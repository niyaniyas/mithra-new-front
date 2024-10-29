// src/components/UserTable.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, CircularProgress } from '@mui/material';
import { Navbar } from '../Header/Navbar';
import "./AdminLogin.css";

const AdminLogin = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [index, setIndex]= useState(0)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3000/users'); // Adjust the URL as needed
        setUsers(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography color="error">Error fetching users: {error}</Typography>;
  }

  return (
    <>
    <Navbar/>
    <TableContainer component={Paper} sx={{mt: 10}}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className='TableHead'>S.No</TableCell>
            <TableCell className='TableHead'>First Name</TableCell>
            <TableCell className='TableHead'>Last Name</TableCell>
            <TableCell className='TableHead'>Email</TableCell>
            <TableCell className='TableHead'>Phone</TableCell>
            <TableCell className='TableHead'>Address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell className='TableCellinadmin'>{index+1}</TableCell>
              <TableCell className='TableCellinadmin'>{user.firstName}</TableCell>
              <TableCell className='TableCellinadmin'>{user.lastName}</TableCell>
              <TableCell className='TableCellinadmin'>{user.email}</TableCell>
              <TableCell className='TableCellinadmin'>{user.phone}</TableCell>
              <TableCell className='TableCellinadmin'>{user.address}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
};

export default AdminLogin;
