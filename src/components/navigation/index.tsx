import { Box, Typography } from '@mui/material';
import NavItem from '../nav-item'

interface IProps {
  setActiveRoute: (path: string) => void;
  activePath: string;
}

export default function index(props: IProps) {
  const { setActiveRoute, activePath } = props;

  return (
    <Box sx={ { display: 'flex', flexDirection: 'column', width: '300px', height: '100%', bgcolor: '#b2ebf2', borderRight: '1px solid #b2ebf2' } }>
      <Box component="header" sx={ { width: '100%', bgcolor: 'white', height: '45px', display: 'flex', justifyContent: 'center', alignItems: 'center' } }>
        <Typography component='h1' variant="h5" color="#74a9b0">
          SmartCat
        </Typography>
      </Box>
      <NavItem setActiveRoute={ setActiveRoute } activePath={ activePath } path="/" label="Products" />
      <NavItem setActiveRoute={ setActiveRoute } activePath={ activePath } path="/about-us" label="About us" />
      <NavItem setActiveRoute={ setActiveRoute } activePath={ activePath } path="/statistics" label="Statistics" />
    </Box>
  )
}
