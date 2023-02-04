import {
  InputWrapper,
  GreetingText,
  UserInput,
  RegisterButton,
  SubmitForm,
} from "./Register.elements.js";

function Register() {
  return (
    <>
      <SubmitForm method="POST">
        <InputWrapper>
          <GreetingText> Register </GreetingText>
          <UserInput placeholder="Digite seu nome de usuário" />
          <UserInput placeholder="Digite seu e-mail" />
          <UserInput placeholder="Digite sua senha" />
          <UserInput placeholder="Confirme sua senha" />
          <br />
          <RegisterButton type="submit"> Register </RegisterButton>
        </InputWrapper>
      </SubmitForm>
    </>
  );
}

export default Register;
