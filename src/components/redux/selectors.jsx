export const getContacts = state => state.contacts.items;

export const contactsIsEmpty = state => getContacts(state).length === 0;
