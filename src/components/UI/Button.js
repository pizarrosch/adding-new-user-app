import s from './Button.module.css';

function Button(props) {
  return (
    <button className={s.button} type={props.type || 'button'} onClick={props.onClick}>{props.children}</button>
  )
}

export default Button;