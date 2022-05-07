import { Link } from '@mui/material';
import { NavLink } from 'react-router-dom';
import './index.css'

interface IProps {
  setActiveRoute: (path: string) => void;
  activePath: string;
  path: string;
  label: string;
}

export default function NavItem(props: IProps) {
  const { setActiveRoute, activePath, path, label } = props;

  return (
      <Link
        onClick={() => setActiveRoute(path)}
        className={`nav-link ${activePath === path ? 'activeRoute' : ''}`}
        component={ NavLink }
        to={path}
        sx={ { width: "100%", padding: '10px', textDecoration: 'none', paddingLeft: '30px' } }>
        { label }
      </Link>
  )
}
