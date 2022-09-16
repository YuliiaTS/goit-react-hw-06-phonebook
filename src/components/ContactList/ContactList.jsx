import { getVisibleContacts } from '../../redux/contact/filter';
import { useSelector } from 'react-redux';
import ContactItem from '../ContactList/ContactItem';
import style from '../ContactList/ContactList.module.css';

export default function ContactList() {
   const phoneContacts = useSelector(getVisibleContacts);

   return (
      <ul className={style.list}>
         {phoneContacts.map(({id, name, number }) => (
            <ContactItem
               key={id}
               id={id}
               name={name}
               number={number}
            />
         ))}
      </ul>
   );
};