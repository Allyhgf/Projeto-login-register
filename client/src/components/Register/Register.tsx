import { useState } from "react";
import {
  InputWrapper,
  GreetingText,
  UserInput,
  RegisterButton,
  SubmitForm,
  Container,
} from "./Register.elements.js";

function Register() {

  const [inputText, setInputText] = useState({
    username: "",
    email: "",
    password: "",
    passwordCheck: ""
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <Container>
      <SubmitForm method="POST" onSubmit={handleSubmit}>
        <InputWrapper>
          <GreetingText> Register </GreetingText>
          <UserInput placeholder="Digite seu nome de usuário" type="text" />
          <UserInput placeholder="Digite seu e-mail" type="email" />
          <UserInput placeholder="Digite sua senha" type="password" />
          <UserInput placeholder="Confirme sua senha" type="password" />
          <br />
          <RegisterButton type="submit" > Register </RegisterButton>
        </InputWrapper>
      </SubmitForm>
    </Container>
  );
}

export default Register;
