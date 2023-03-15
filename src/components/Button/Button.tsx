import s from "./Button.module.scss";

interface ButtonProps {
  text: string;
}

function Button({ text }: ButtonProps) {
  return <button className={s.btn}>{text}</button>;
}

export default Button;
