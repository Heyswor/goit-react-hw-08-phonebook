import { useDispatch } from 'react-redux';
import { logOut } from 'redux/registration/operations';
import { useAuth } from 'components/hooks/useAuth';
import css from './UserMenu.module.css';
import Button from '@mui/material/Button';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}</p>
      <Button
        size="small"
        variant="outlined"
        type="button"
        onClick={() => dispatch(logOut())}
      >Logout</Button>

    </div>
  );
};
