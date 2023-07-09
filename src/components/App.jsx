import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectContact, selectIsLoading, selectError } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import { Container, Title, Wrapper, Box } from './App.styled';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

const App = () => {
  const contacts = useSelector(selectContact);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <Title>Contacts</Title>
      {contacts.length > 0 ? (
        <Filter />
      ) : (
        <Wrapper>Your phonebook is empty. Add first contact!</Wrapper>
      )}
      {contacts.length > 0 && <ContactList />}
      {isLoading && !error && <Box>Request in progress...</Box>}
      {error && <Box>Oops.., something went wrong, please try again!</Box>}
    </Container>
  );
};

export default App;
