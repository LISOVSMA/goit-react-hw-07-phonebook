import { ListWrapper, Item, Fragment, Button } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';
import { deleteContact } from 'redux/operations';

const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  return (
    <ListWrapper>
      {contacts.map(({ id, name, number }) => (
        <Item key={id}>
          <Fragment>
            {name}: {number}
          </Fragment>
          <Button type="button" onClick={() => dispatch(deleteContact(id))}>
            Delete
          </Button>
        </Item>
      ))}
    </ListWrapper>
  );
};

export default ContactList;
