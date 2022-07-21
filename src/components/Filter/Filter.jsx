import { filterContact } from '../../redux/filter/actions';
import { useDispatch } from 'react-redux';
import { FilterInput, FilterWrapper } from './Filter.styled';
import { LabelForm } from '../ContactForm/ContactForm.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const handleChange = event => dispatch(filterContact(event.target.value));

  return (
    <FilterWrapper>
      <LabelForm htmlFor="filter">Find contacts by name</LabelForm>
      <FilterInput name="filter" type="text" onChange={handleChange} />
    </FilterWrapper>
  );
};
