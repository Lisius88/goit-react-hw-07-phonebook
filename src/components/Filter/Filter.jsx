import { useDispatch } from 'react-redux';
// import { setF } from 'components/redux/actions';
import { setFilter } from 'components/redux/filterSlice';
import { Filterlabel, Input } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const onInputChange = e => {
    dispatch(setFilter(e.currentTarget.value.toLowerCase()));
  };

  return (
    <Filterlabel>
      <Input type="text" placeholder="Search" onChange={onInputChange} />
    </Filterlabel>
  );
};
