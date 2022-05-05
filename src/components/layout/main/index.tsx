import React from 'react'
import { Box } from '@mui/material'
import Navigation from '../../navigation'

interface IProps {
  children: JSX.Element;
  activeRoute: string;
  setActiveRoute: (path: string) => void;
}

export default function Layout(props: IProps) {
  const { children, activeRoute, setActiveRoute } = props;


  return (
    <Box sx={ { height: '100%', display: 'flex'} }>
      <Box component="nav" sx={{height: '100%' }} >
        <Navigation setActiveRoute={setActiveRoute} activePath={activeRoute}/>
      </Box>
      <Box component="main" sx={{height: '100%', width: '100%', overflowX: 'auto'}}>
        { children }
      </Box>
    </Box>
  )
}
