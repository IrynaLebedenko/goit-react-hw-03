import css from "./ContactForm.module.css";
import { useId } from "react";
import { Formik, Form, Field } from "formik";
import { nanoid } from 'nanoid';
import {ErrorMessage } from "formik";
import * as Yup from "yup";



const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too long!")
      .required("This field cannot be empty!"),
    number: Yup.number()
      .min(7, "Too Short!")
      .max(50, "Too long!")
      .required("This field cannot be empty!"),
  });
  const ContactForm = ({ initialValues, onAddContact }) => {

    const nameFieldId = useId();
    const numberFieldId = useId();

    const handleSubmit = (values, actions) => {
        const newContact = {
            ...values,
            id: nanoid(),
        }
        onAddContact(newContact);
        actions.resetForm();
    }

    return (
        <Formik 
        initialValues={initialValues}
        validationSchema={validationSchema} 
        onSubmit={handleSubmit}>
            <Form>
                <div className={css.formItem}>
                    <label htmlFor={nameFieldId}>Name</label>
                    <Field className={css.formField} type="text" name="name" id={nameFieldId} />
                    <ErrorMessage name='name' component='p' className={css.errorMessage} />
                </div>

                <div className={css.formItem}>
                    <label htmlFor={numberFieldId}>Number</label>
                    <Field className={css.formField} type="tel" name="number" id={numberFieldId} />
                    <ErrorMessage name='number' component='p' className={css.errorMessage} />
            
                </div>
                <button className={css.addButton} type="submit">Add contact</button>
            </Form>
        </Formik>
    )
}
export default ContactForm;