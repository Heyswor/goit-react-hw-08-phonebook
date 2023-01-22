import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

export const Home = () => {
  return (
    <div>
      <h1>Wellcome to Phonebook</h1>
      <p>
        <span>Please, </span>
        <Link to="/login">
          <Button size="small" variant="contained">
            login
          </Button>
        </Link>
        <span> or </span>
        <Link to="/register">
          <Button size="small" variant="contained">
            register
          </Button>
        </Link>
        <span> for use our App</span>
      </p>
    </div>
  );
};
