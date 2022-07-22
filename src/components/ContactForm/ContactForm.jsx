import { useState, useEffect } from 'react';
import { Formik, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from '../Buttons/Button';
import { AddForm, Input, Message, LabelForm } from './ContactForm.styled';
import {
  useFetchContactsQuery,
  useAddContactsMutation,
} from 'redux/api/contactsApi';
import { SpinnerInfinity } from 'spinners-react';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const Schema = yup.object({
  name: yup
    .string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('required field'),
  number: yup
    .string()
    .required('required field')
    .min(5, 'Too Short!')
    .max(15, 'Too Long!')
    .matches(phoneRegExp, 'phone number is not valid'),
});

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <Message>{message}</Message>}
    />
  );
};

export const ContactForm = () => {
  const [form, setForm] = useState({ name: '', number: '' });
  const { data: contacts } = useFetchContactsQuery();
  const [newContact, { isLoading, isSuccess }] = useAddContactsMutation();

  const handleSubmit = e => {
    e.preventDefault();
    const data = { id: nanoid(), ...form };
    if (
      contacts.find(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
      )
    ) {
      toast.warn(`${data.name} is already in contacts`);
      //resetForm();
      return;
    }
    newContact(data);
  };

  const resetForm = () => {
    setForm({ name: '', number: '' });
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success(`Added to the phonebook `);
      resetForm();
    }
  }, [isSuccess]);
  
  return (
    <>
      <Formik
        initialValues={{
          name: '',
          number: '',
          filter: '',
        }}
        validationSchema={Schema}
        onSubmit={handleSubmit}
      >
        <AddForm autoComplete="off">
          <LabelForm htmlFor="name">Name</LabelForm>

          <Input type="text" name="name" placeholder="type name..." />
          <FormError name="name" />

          <LabelForm htmlFor="number">Number</LabelForm>

          <Input type="tel" name="number" placeholder="type number..." />
          <FormError name="number" />

          <Button
            type="submit"
            children={
              isLoading ? (
                <SpinnerInfinity
                  сolor="#910ac7"
                  secondaryColor="rgba(0,0,0,0.1)"
                  thickness="80"
                  speed="200"
                />
              ) : (
                'Add contact'
              )
            }
          />
        </AddForm>
      </Formik>
    </>
  );
};
