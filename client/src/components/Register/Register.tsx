import {
  Container,
  InputBox,
  GreetingText,
  UserInput,
  RegisterButton,
} from "./Register.elements";

function Register() {
  return (
    <>
      <Container>
        <InputBox>
          <GreetingText></GreetingText>
          <UserInput />
          <UserInput />
          <RegisterButton> Register </RegisterButton>
        </InputBox>
      </Container>
    </>
  );
}

export default Register;
