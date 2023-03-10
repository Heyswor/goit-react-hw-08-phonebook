import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectStatusFilter,
  selectIsLoading,
  selectError,
  selectItems,
} from 'redux/contacts/selectors';
import { updateFilter } from 'redux/filterSlice';
import Button from '@mui/material/Button';
import { fetchContacts, deleteContact } from 'redux/contacts/operations';
import { UserMenu } from 'components/UserMenu/UserMenu';

export function Contacts() {
  const dispatch = useDispatch();
  const filter = useSelector(selectStatusFilter);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectItems);
  const lowercaseFilter = filter.toLowerCase();
  const filtredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(lowercaseFilter)
  );
  const location = useLocation();
  const backLink = location.state?.from ?? '/';

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const changeFilter = e => {
    dispatch(updateFilter(e.target.value));
  };

  const delContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <div>
      <ul className="contactsLinkList">
        <li>
          <Link to={backLink}>
            <Button size="small" variant="outlined">
              Go Back
            </Button>
          </Link>
        </li>
        <li>
          <UserMenu />
        </li>
      </ul>

      <h1>Phonebook</h1>

      <ContactForm />

      <h2>Contacts</h2>
      <Filter filter={filter} onChange={changeFilter} />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList contacts={filtredContacts} deleteContact={delContact} />
    </div>
  );
}
