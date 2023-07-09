import { FilterForm, FilterLabel } from './Filter.styled';
import { Input, Span } from '../ContactForm/ContactForm.styled';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { changeFilter } from 'redux/filterSlice';

const Filter = () => {
  const value = useSelector(selectFilter);
  const dispatch = useDispatch();
  const handleChange = e => {
    const normalizedValue = e.target.value.toLowerCase();
    dispatch(changeFilter(normalizedValue));
  };

  return (
    <FilterForm>
      <FilterLabel>
        <Span>Find contacts by name</Span>
        <Input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="Please enter a name to search"
        />
      </FilterLabel>
    </FilterForm>
  );
};

export default Filter;
