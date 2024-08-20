import { useState } from "react";

const LoginForm2 = () => {
  const [values, setValues] = useState({
    login: "",
    password: "",
  });
  const handleChangeForm = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    setValues({
      login: "",
      password: "",
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="login"
        onChange={handleChangeForm}
        value={values.login}
      />
      <input
        type="password"
        name="password"
        onChange={handleChangeForm}
        value={values.password}
      />
      <button type="submit">Log in</button>
    </form>
  );
};

export default LoginForm2;
