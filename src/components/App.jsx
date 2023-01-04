import { Form } from './Form/Form';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from './redux/operations';
import { MainContent, Title } from './App.styled';
import { Loader } from './Loader/Loader';

export const App = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(state => state.contacts.isLoading);
  const error = useSelector(state => state.contacts.error);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <MainContent>
      <Title>Phonebook</Title>
      <Filter />
      <Form />
      {isLoading && !error && <Loader />}
      <ContactsList />
    </MainContent>
  );
};
