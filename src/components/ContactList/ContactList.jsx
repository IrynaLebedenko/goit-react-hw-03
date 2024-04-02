import css from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { nanoid } from 'nanoid'
const ContactList = ({ contacts, onDelete }) => {
    
    return (
        <ul className={css.contactsList}>
            
            {contacts.map((contact) => 
                    <li className={css.contactsItem} key={ nanoid()}>
                    <Contact name={contact.name} number={contact.number} onDelete={onDelete} id={contact.id}/>
                </li>
                )}

        </ul>
    )
}
export default ContactList;