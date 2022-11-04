import Card from './Card';
import Button from "./Button";
import s from "./ErrorModal.module.css";

function ErrorModal(props) {
  return (
    <div>
      <div className={s.backdrop} onClick={props.onClick}/>
      <Card className={s.modal}>
        <header className={s.header}>
            <h2>{props.title}</h2>
        </header>
        <div className={s.content}>
          <p>{props.message}</p>
        </div>
        <footer className={s.actions}>
          <Button onClick={props.onClick}>Okay</Button>
        </footer>
      </Card>
    </div>
  )
}

export default ErrorModal;