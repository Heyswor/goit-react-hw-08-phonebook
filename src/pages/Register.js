import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const Register = () => {
  const location = useLocation();
  const backLink = location.state?.from ?? '/';
  return (
    <div>
      <Link to={backLink}>Go Back</Link>
      <RegisterForm/>
    </div>
  );
};
