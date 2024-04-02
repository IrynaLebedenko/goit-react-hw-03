import css from "./Contact.module.css";
import { TiUser,  TiPhone  } from "react-icons/ti";

const Contact = ({ name, number, id, onDelete }) => {
    return (
        <div className={css.contactContainer}>
            <div>
                <p className={css.contactInput}><TiUser />{name}</p>
                <p className={css.contactInput}><TiPhone />{number}</p>
            </div>
            <button className={ css.btn }onClick={() => onDelete(id)}>Delete</button>
        </div>
    )
}
export default Contact;