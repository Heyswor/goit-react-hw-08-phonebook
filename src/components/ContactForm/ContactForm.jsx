import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { selectItems } from 'redux/selectors';
import Button from '@mui/material/Button';
import { addContacts } from 'redux/operations';
import { fetchContacts } from 'redux/contacts/operations';

export function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectItems);
  const { register, handleSubmit, resetField } = useForm({
    defaultValues: {
      name: '',
      number: '',
    },
  });

  const onHandleSubmit = values => {
    const { name } = values;
    console.log(name.length);

    const findedContact = contacts.find(contact =>
      contact.name.toLowerCase().includes(name.toLowerCase())
    );

    if (findedContact) {
      if (findedContact.name.length === name.length) {
        alert(`${findedContact.name} is already in contacts`);
        return;
      }
    }
    dispatch(addContacts(values));
    resetField('name');
    resetField('number');
    dispatch(fetchContacts());
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onHandleSubmit)} className={css.contactForm}>
        <label htmlFor="">
          Name
          <input
            id={nanoid(4)}
            type="text"
            name="name"
            {...register('name', { required: 'This is required' })}
          />
        </label>

        <label htmlFor="">
          Number
          <input
            id={nanoid(4)}
            type="tel"
            name="number"
            {...register('number', {
              required: 'This is required',
              minLength: 6,
            })}
          />
        </label>
        <Button variant="contained" type="submit">
          Add contact
        </Button>
      </form>
    </div>
  );
}
