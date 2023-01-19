import { Outlet } from 'react-router-dom';
import { Link } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <>
      <header>
        <nav>
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
        </nav>
      </header>
      <Outlet />
    </>
  );
};
