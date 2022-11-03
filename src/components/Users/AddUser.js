import s from './AddUser.module.css';
import {useState} from "react";
import NewUser from "./NewUser";
import Card from '../UI/Card';
import Button from "../UI/Button";

function AddUser({onAddNewUser}) {

  const [nameInput, setNameInput] = useState('');
  const [ageInput, setAgeInput] = useState('');

  function handleNameChange(e) {
    setNameInput(e.target.value);
  }

  function handleAgeChange(e) {
    setAgeInput(e.target.value)
  }

  function addNewUser(e) {
    e.preventDefault();
    if(nameInput.trim().length === 0 || ageInput.trim().length === 0) {
      return;
    }
    if(+ageInput < 1) {return;}
    onAddNewUser(nameInput, ageInput);
    setNameInput('');
    setAgeInput('');
  }

  return (
    <Card className={s.input}>
      <form onSubmit={addNewUser}>
        <label htmlFor='username'>Add username</label>
        <input id='username' type='text' value={nameInput} onChange={handleNameChange}/>
        <label htmlFor='age'>Add user age</label>
        <input id='age' type='number' value={ageInput} onChange={handleAgeChange}/>
        <Button type='submit'>Add user</Button>
      </form>
    </Card>
  )
}

export default AddUser;