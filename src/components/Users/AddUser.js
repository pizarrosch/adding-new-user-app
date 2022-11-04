import s from './AddUser.module.css';
import {useState} from "react";
import NewUser from "./NewUser";
import Card from '../UI/Card';
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

function AddUser({onAddNewUser}) {

  const [nameInput, setNameInput] = useState('');
  const [ageInput, setAgeInput] = useState('');
  const [error, setError] = useState(null);

  function handleNameChange(e) {
    setNameInput(e.target.value);
  }

  function handleAgeChange(e) {
    setAgeInput(e.target.value)
  }

  function addNewUser(e) {
    e.preventDefault();
    if(nameInput.trim().length === 0 || ageInput.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values)!'
      })
      return;
    }

    if(+ageInput < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (>0)'
      })
      return;
    }

    onAddNewUser(nameInput, ageInput);
    setNameInput('');
    setAgeInput('');
  }

  function removeErrorMessage() {
    setError(null);
  }

  return (
    <>
      {error && <ErrorModal title={error.title} message={error.message} onClick={removeErrorMessage}/>}
      <Card className={s.input}>
        <form onSubmit={addNewUser}>
          <label htmlFor='username'>Add username</label>
          <input id='username' type='text' value={nameInput} onChange={handleNameChange}/>
          <label htmlFor='age'>Add user age</label>
          <input id='age' type='number' value={ageInput} onChange={handleAgeChange}/>
          <Button type='submit'>Add user</Button>
        </form>
      </Card>
    </>
  )
}

export default AddUser;