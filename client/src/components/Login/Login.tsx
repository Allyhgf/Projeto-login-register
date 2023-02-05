import { useState } from "react";
import {
  InputWrapper,
  GreetingText,
  UserInput,
  LoginButton,
  SubmitForm,
  Container,
} from "./Login.elements.js";

interface Inputs {
  loginMethod: string | Element;
  password: string | Element;
}

function Login() {
  const [inputText, setInputText] = useState<Inputs>({
    loginMethod: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Container>
      <SubmitForm method="POST" onSubmit={handleSubmit}>
        <InputWrapper>
          <GreetingText> Login </GreetingText>
          <UserInput
            placeholder="Digite seu nome de usuário ou email"
            type="text"
            value={inputText.loginMethod as string}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setInputText({
                ...inputText,
                loginMethod: e.target.value as string,
              })
            }
          />
          <UserInput
            placeholder="Digite sua senha"
            type="password"
            value={inputText.password as string}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setInputText({ ...inputText, password: e.target.value as string })
            }
          />
          <br />
          <LoginButton type="submit"> Login </LoginButton>
        </InputWrapper>
      </SubmitForm>
    </Container>
  );
}

export default Login;
