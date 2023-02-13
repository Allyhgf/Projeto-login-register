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
  const [userInput, setUserInput] = useState<Inputs>({
    username: "",
    email: "",
    password: "",
    passwordCheck: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await fetch("http://localhost:5000/register", {
      method: "POST",
      body: JSON.stringify({ 
        username: userInput.username,
        email: userInput.email,
        password: userInput.password,
        passwordCheck: userInput.passwordCheck,
       }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <Container>
      <SubmitForm method="POST" onSubmit={handleSubmit}>
        <InputWrapper>
          <GreetingText> Register </GreetingText>
          <UserInput
            placeholder="Digite seu nome de usuário"
            type="text"
            value={userInput.username as string}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setUserInput({ ...userInput, username: e.target.value as string })
            }
          />
          <UserInput
            placeholder="Digite seu e-mail"
            type="email"
            value={userInput.email as string}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setUserInput({ ...userInput, email: e.target.value as string })
            }
          />
          <UserInput
            placeholder="Digite sua senha"
            type="password"
            value={userInput.password as string}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setUserInput({ ...userInput, password: e.target.value as string })
            }
          />
          <UserInput
            placeholder="Confirme sua senha"
            type="password"
            value={userInput.passwordCheck as string}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setUserInput({
                ...userInput,
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
