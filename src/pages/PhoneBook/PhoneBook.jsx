import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { MainTitle, SubTitle } from 'components/App.styled';

const PhoneBook = () => (
    <>
        <MainTitle>Phonebook</MainTitle>
        <ContactForm />
        <SubTitle>Contacts</SubTitle>
        <Filter />
        <ContactList />
    </>
);

export default PhoneBook;