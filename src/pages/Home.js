import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div>
      <h1>Wellcome to Phonebook</h1>
      <p>
        <span>Please, </span>
        <Link to="/login">login</Link>
        <span> or </span>
        <Link to="/register">register</Link>
        <span> for use our App</span>
      </p>
    </div>
  );
};
