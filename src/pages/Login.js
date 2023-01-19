import { LoginForm } from 'components/LoginForm/LoginForm';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';


export const Login = () => {
  const location = useLocation();
  const backLink = location.state?.from ?? '/';
  return (
    <div>
      <Link to={backLink}>Go Back</Link>
      <LoginForm/>
    </div>
  );
};
