export const getFilter = state => state.contact.filter;
export const getContacts = state => state.contact.items;

export const getVisibleContacts = state =>
   getContacts(state).filter(contact =>
      contact.name
         .toLocaleLowerCase()
         .includes(getFilter(state).toLocaleLowerCase())
   );