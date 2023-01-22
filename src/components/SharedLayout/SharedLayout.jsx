import { Outlet } from 'react-router-dom';
import { Link } from './SharedLayout.styled';
import AppBar from '@mui/material/AppBar';

export const SharedLayout = () => {
  return (
    <>
      <header>
        <AppBar position="static">
          <Link to="/" end>
            Home
          </Link>
          <Link to="/register" end>
            Register
          </Link>
          <Link to="/login" end>
            Login
          </Link>
          <Link to="/contacts" end>
            Contacts
          </Link>
        </AppBar>
      </header>
      <Outlet />
    </>
  );
};
