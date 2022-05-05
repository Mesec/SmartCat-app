import { Box, Link, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import './index.css'

interface IProps {
  setActiveRoute: (path: string) => void;
  activePath: string;
}

export default function index(props: IProps) {
  const { setActiveRoute, activePath } = props;

  return (
    <Box sx={ { display: 'flex', flexDirection: 'column', width: '300px', height: '100%', bgcolor: '#b2ebf2', borderRight: '1px solid #b2ebf2'} }>
      <Box component="header" sx={{width: '100%', bgcolor:'white', height:'45px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Typography component='h1' variant="h5" color="#74a9b0">
          SmartCat
        </Typography>
      </Box>
      <Link
        onClick={() => setActiveRoute('/')}
        className={`nav-link ${activePath === '/' ? 'activeRoute' : ''}`}
        component={ NavLink }
        to="/"
        sx={ { width: "100%", padding: '10px', textDecoration: 'none' } }>
        Products
      </Link>
      <Link
        onClick={() => setActiveRoute('/about-us')}
        className={`nav-link ${activePath === '/about-us' ? 'activeRoute' : ''}`}
        component={ NavLink }
        to="/about-us"
        sx={ { width: "100%", padding: '10px', textDecoration: 'none' } }>
        About Us
      </Link>
    </Box>
  )
}
