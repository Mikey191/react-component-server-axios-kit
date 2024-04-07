import React, { useContext } from "react";
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import { AuthContext } from "../context";

const Login = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const login = (event) => {
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem("auth", "true");
  };
  return (
    <div>
      <h1 className="post-list__title">Введите Логин и Пароль</h1>
      <h2 style={{ textAlign: "center", opacity: "0.2"}}>
        (Можно просто нажать "Войти")
      </h2>
      <form onSubmit={login}>
        <MyInput type="text" placeholder="login" />
        <MyInput type="password" placeholder="Password" />
        <MyButton>Войти</MyButton>
      </form>
    </div>
  );
};

export default Login;
