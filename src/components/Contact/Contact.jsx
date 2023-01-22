import PropTypes from 'prop-types';
import css from './Contact.module.css';
import Button from '@mui/material/Button';

export const Contact = ({ contact, deleteBtn }) => {
  return (
    <>
      {contact.map(({ name, number, id }) => {
        return (
          <li key={id} className={css.contactItem}>
            <p>
              {name}: {number}
            </p>
            <Button
            size="small"
              variant="outlined"
              className={css.contactBtn}
              type="button"
              onClick={() => deleteBtn(id)}
            >
              delete
            </Button>
          </li>
        );
      })}
    </>
  );
};

Contact.propTypes = {
  contact: PropTypes.array.isRequired,
  deleteBtn: PropTypes.func.isRequired,
};
