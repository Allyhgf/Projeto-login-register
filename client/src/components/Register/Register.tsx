import { useState } from "react";
import {
  InputWrapper,
  GreetingText,
  UserInput,
  RegisterButton,
  SubmitForm,
  Container,
} from "./Register.elements.js";

interface Inputs {
  username: string | Element;
  email: string | Element;
  password: string | Element;
  passwordCheck: string | Element;
}

function Register() {
  const [inputText, setInputText] = useState<Inputs>({
    username: "",
    email: "",
    password: "",
    passwordCheck: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Container>
      <SubmitForm method="POST" onSubmit={handleSubmit}>
        <InputWrapper>
          <GreetingText> Register </GreetingText>
          <UserInput
            placeholder="Digite seu nome de usuário"
            type="text"
            value={inputText.username as string}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setInputText({ ...inputText, username: e.target.value as string })
            }
          />
          <UserInput
            placeholder="Digite seu e-mail"
            type="email"
            value={inputText.email as string}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setInputText({ ...inputText, email: e.target.value as string })
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
          <UserInput
            placeholder="Confirme sua senha"
            type="password"
            value={inputText.passwordCheck as string}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setInputText({
                ...inputText,
                passwordCheck: e.target.value as string,
              })
            }
          />
          <br />
          <RegisterButton type="submit"> Register </RegisterButton>
        </InputWrapper>
      </SubmitForm>
    </Container>
  );
}

export default Register;
