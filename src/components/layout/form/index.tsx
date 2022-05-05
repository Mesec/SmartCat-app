import { Box, Avatar, Typography, Container } from '@mui/material';
import React from 'react';

interface IProps {
  children: JSX.Element;
  title: string;
  icon: JSX.Element;
}
 export default function FormLayout (props: IProps): JSX.Element {
  const { children, title, icon } = props;

  return (
    <Container maxWidth='xs' component='main'>
        <React.Fragment>
          <Box mt={ 2 } component="header" sx={ {display: 'flex', flexDirection: 'column', alignItems: 'center'} }>
            <Avatar sx={ { bgcolor: 'secondary' } }>
              { icon }
            </Avatar>
            <Typography component='h1' variant='h5' color='initial'>
              { title }
            </Typography>
          </Box>
          <Box component="main" mt={ 2 }>
            { children }
          </Box>
        </React.Fragment>
    </Container>
  )
}