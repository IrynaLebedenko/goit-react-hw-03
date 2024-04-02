import css from "./Contact.module.css";
import { FaUser, FaPhoneAlt } from 'react-icons/fa';

const Contact = ({ name, number, id, onDelete }) => {
    return (
        <div className={css.contactContainer}>
            <div>
                <p className={css.contactInput}><FaUser />{name}</p>
                <p className={css.contactInput}><FaPhoneAlt />{number}</p>
            </div>
            <button className={ css.btn }onClick={() => onDelete(id)}>Delete</button>
        </div>
    )
}

export default Contact;