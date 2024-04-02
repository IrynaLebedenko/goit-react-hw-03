import { useState, useEffect } from "react";
import css from './App.css'

import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import * as Yup from 'yup';


const initialValues = {
  name: "",
  number: "",
};
const FeedbackSchema = Yup.object({
  name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
  number: Yup.string().min(3, "Too short").max(50, "Too long").required("Required"),
});



const App = () => {
  const initialContacts = JSON.parse(localStorage.getItem("contacts")) || [
 { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]
   const [contacts, setContacts] = useState(initialContacts);
  const [searchItem, setSearchItem] = useState('');

  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact]
    })
  };
useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const deleteContacts = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId)
    })
  }
  const searchContacts = contacts.filter((contact) =>
  contact.name.toLowerCase().includes(searchItem.toLocaleLowerCase())
  )



  
  return (
    <div className={css.mainContainer}>
    <h1 className={css.title}>Phonebook</h1>
    <ContactForm
        initialValues={initialValues}
        validationSchema={FeedbackSchema}
        onAddContact={addContact}  
        
      />
      <SearchBox value={searchItem} onSearchContacts={setSearchItem} />
      <ContactList contacts={searchContacts} onDelete={deleteContacts}
      />
      </div>
  );
};

export default App;
