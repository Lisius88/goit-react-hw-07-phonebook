import { List, Item, Button, Notiffication } from './ContactsList.styled';
import { useSelector } from 'react-redux';
import { deleteContact } from 'components/redux/operations';
import { useDispatch } from 'react-redux';
import { contactsIsEmpty } from 'components/redux/selectors';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const onDeleteClick = e => {
    const idToDelete = e.currentTarget.id;
    dispatch(deleteContact(idToDelete));
  };
  const contacts = useSelector(state => state.contacts.items);
  const contactsFilter = useSelector(state => state.filter);
  const filteredContacts = contacts.filter(contacts =>
    contacts.name.toLowerCase().includes(contactsFilter)
  );

  const contactsListEmpty = useSelector(contactsIsEmpty);

  if (contacts.length === 0) {
    return <Notiffication>There are no contacts</Notiffication>;
  }
  if (!contactsListEmpty && filteredContacts.length === 0) {
    return <Notiffication>No contact with such name found</Notiffication>;
  }

  return (
    <List>
      {filteredContacts.map(({ name, number, id }) => (
        <Item key={id}>
          <div>
            {' '}
            <p>{name}</p>
            <p>{number}</p>
          </div>
          <Button onClick={onDeleteClick} type="button" id={id}>
            X
          </Button>
        </Item>
      ))}
    </List>
  );
};
