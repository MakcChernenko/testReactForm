import { useId } from "react";

const LoginForm = ({ onLogin }) => {
  const loginId = useId();
  const passwordId = useId();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const { login, password } = form.elements;
    onLogin(login.value);
    form.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={loginId}>Введіть логін</label>
      <input type="text" id={loginId} name="login" />
      <label htmlFor={passwordId}>Ввудіть пароль</label>
      <input type="password" id={passwordId} name="password" />
      <button type="submit">Log in</button>
    </form>
  );
};

export default LoginForm;
