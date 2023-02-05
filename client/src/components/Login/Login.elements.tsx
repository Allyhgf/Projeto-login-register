import styled from "styled-components";

export const Container = styled.div`
  margin: 0px;
  padding: 0px;
`;

export const SubmitForm = styled.form`
  text-align: center;
  display: flex;
  margin: 0px;
  padding: 0px;
  border: 0px;
`;

export const InputWrapper = styled.div`
  margin: 110px 0px 0px 35%;
  padding: 10px 15px 30px 15px;
  border: 2px solid #274472;
  height: auto;
  width: 320px;
  background-color: #41729f;
  display: block;
  text-align: center;
  border-radius: 18px;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
`;

export const GreetingText = styled.h1`
  text-align: center;
  border-bottom: 1px solid #274472;
  margin-bottom: 50px;
`;

export const UserInput = styled.input`
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-radius: 7px;
  border-color: #274472;
  width: 250px;
  text-align: start;
  font-weight: 350;
  color: #121616;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

export const LoginButton = styled.button`
  text-align: center;
  font-size: medium;
  margin-top: 30px;
  width: 90px;
  height: 25px;
  border-radius: 10px;
`;
