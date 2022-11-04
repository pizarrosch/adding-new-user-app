import s from './NewUser.module.css';
import Card from "../UI/Card";

function NewUser({users}) {
  return (
    <Card className={s.users}>
      <ul>
      {users.map((user) => (
        <li key={user.id}>{`Name: ${user.name}, age: ${user.age}`}</li>
      ))}
      </ul>
    </Card>
  )
}

export default NewUser;