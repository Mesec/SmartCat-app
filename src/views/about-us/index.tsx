import React from 'react'
import { Box, Typography } from '@mui/material';
import Header from '../../components/header';

export default function AboutUs(): JSX.Element {
  return (
    <Box>
      <Header />
      <Box sx={ { padding: '30px' } }>
        <Typography variant="h5" mb={2}>
          Welcome to the Pharmacy appication.
        </Typography>
        <Box sx={ { display: 'flex', flexDirection: 'column', gap: '10px' } }>
          <Typography>
            The application was made for job interview purposes. <br />
            It allows you to create, remove, update and delete a product,
            and also to check products statistics. <br />
            The app has built in ReactJS (typescript) <strong>v18.1.0</strong>, with a help of some dependency packages like MaterialUi and Recharts.
          </Typography>
          <Typography>
            Npm <strong>v6.14.15</strong> <br />
            Node <strong>v14.18.1</strong>
          </Typography>
          <Typography>
            All products are stored in the localStorage.
            I created several products for testing purposes, and they will be fetched and saved in a local state when root component (App.js) mounts.
            <br />
            The CRUD logic is located in the lib folder, in a file named "api.ts".
          </Typography>

          <Typography>
            Written by Stefan Rakonjac.
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
