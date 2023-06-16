import React, { useState } from "react";
import { Container, Form, SubContainerSign } from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { validarEmail, validarPassword } from "../../Utils/validadores";
import { NavLink, useNavigate } from "react-router-dom";
import UserService from "../../Services/UserService";

const userService = new UserService()

const Login = () => {
  const [loading, setLoading] = useState();
  const [form, setForm] = useState({});
  console.log(form);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const response = await userService.login(form);
      console.log("response do Login", response);
      if (response === true) {
        console.log("usuário Logado com Sucesso");
        navigate("/home");
      }
      setLoading(false);
    } catch (err) {
      console.log("Algo deu errado com o Login" + err);
    }
  };

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const validadorInput = () => {
    return validarEmail(form.email) && validarPassword(form.password);
  };

  return (
    <Container>
      <Form>
        <h1>Faça o seu Login 👋</h1>
        <Input
          name="email"
          placeholder="Digite o seu e-mail"
          onChange={handleChange}
          type="email"
        />
        <Input
          name="password"
          placeholder="Digite a sua senha"
          onChange={handleChange}
          type="password"
        />
        <Button
          type="submit"
          text="Entrar!"
          onClick={handleSubmit}
          disabled={loading === true || !validadorInput()}
        />
        <SubContainerSign>
          <p>Não possui conta?</p>
          <NavLink to="register">Cadastrar</NavLink>
        </SubContainerSign>
      </Form>
    </Container>
  );
};

export default Login;
