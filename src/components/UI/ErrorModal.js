import Card from './Card';
import Button from "./Button";
import s from "./ErrorModal.module.css";
import React from 'react';
import ReactDOM from "react-dom";

function Backdrop(props) {
  return <div className={s.backdrop} onClick={props.onClick}/>
}

function ModalOverlay(props) {
  return  (
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
  )
}

function ErrorModal(props) {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop onClick={props.onClick} />, document.getElementById('backdrop-root'))}
      {ReactDOM.createPortal(<ModalOverlay title={props.title} message={props.message} onClick={props.onClick} />, document.getElementById('overlay-root'))}
    </React.Fragment>
  )
}

export default ErrorModal;