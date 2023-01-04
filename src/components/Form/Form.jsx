import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
// import { addContact } from 'components/redux/actions';
// import { addContact } from 'components/redux/contactsSlice';
import { addContact } from 'components/redux/operations';
import { useSelector } from 'react-redux';
import { Button, FormContent, Input, Label } from './Form.styled';

export const Form = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);

  const listContainsContact = contact => {
    return contacts.some(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submit = data => {
    if (listContainsContact(data)) {
      return alert(`${data.name} is already in contacts.`);
    }
    dispatch(addContact(data));
    reset();
  };

  return (
    <FormContent onSubmit={handleSubmit(submit)}>
      <Label>
        Name{' '}
        <Input
          {...register('name', { required: true })}
          placeholder="Enter a name"
        />
      </Label>
      <Label>
        Number{' '}
        <Input
          {...register('number', {
            required: true,
            minLength: {
              value: 9,
              message: 'Number must have 9 length',
            },
          })}
          placeholder="Enter a number"
        />
      </Label>

      <p>{errors.number?.message}</p>
      <Button type="submit">Save</Button>
    </FormContent>
  );
};
