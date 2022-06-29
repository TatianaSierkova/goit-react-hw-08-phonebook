import { useDeleteContactMutation } from '../../services/contactsApi';
import { useEffect } from 'react';
import propTypes from 'prop-types';
import toast from 'react-hot-toast';
import { Button } from '../common';
import { Item, Wrapper, Text } from './ContactItem.styled';

const ContactItem = ({ id, contactName, contactNumber }) => {
  const [deleteContact, { isSuccess }] = useDeleteContactMutation();

  useEffect(() => {
    if (isSuccess) {
      toast.error(`Was deleted from your contacts!`);
    }
  }, [isSuccess]);

  /*const onContactDelete = (id, contactName) => {
    //toast.error(`${contactName} was deleted from your contacts!`);
    deleteContact(id);
  };*/

  return (
    <Item>
      <Wrapper>
        <Text fwb>{contactName}</Text>
        <Text>{contactNumber}</Text>
      </Wrapper>
      <Button onClick={() => deleteContact(id, contactName)}>Delete</Button>
    </Item>
  );
};

ContactItem.propTypes = {
  id: propTypes.string.isRequired,
  contactName: propTypes.string.isRequired,
  contactNumber: propTypes.string.isRequired,
};

export default ContactItem;
