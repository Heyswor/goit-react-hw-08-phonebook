import { LoginForm } from 'components/LoginForm/LoginForm';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';


export const Login = () => {
  const location = useLocation();
  const backLink = location.state?.from ?? '/';
  return (
    <div>
      <Link to={backLink}>
        <Button size="small" variant="outlined">
          Go Back
        </Button>
      </Link>
      <LoginForm />
    </div>
  );
};
