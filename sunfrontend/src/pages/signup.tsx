import styled from "styled-components";
import { MdBackspace } from "react-icons/md";
import Link from "next/link";
import { RoleList } from "../constants";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";

export default function Signup({}: any) {
  const [passwordType, setPasswordType] = useState(false);
  const [passwordType2, setPasswordType2] = useState(false);
  const [lookPassword, setLookPassword] = useState("password");
  const [lookPassword2, setLookPassword2] = useState("password");
  const PassworrdType = () => {
    passwordType ? setLookPassword("password") : setLookPassword("text");
  };
  const PassworrdType2 = () => {
    passwordType2 ? setLookPassword2("password") : setLookPassword2("text");
  };
  return (
    <>
      <Backpage>
        <MdBackspace size={40} />
        <Link href="/">
          <span> Back to Main</span>
        </Link>
      </Backpage>
      <SignupBox>
        <WriteBox>
          <p>Id</p>
          <input type="text"></input>
        </WriteBox>
        <WriteBox>
          <p>Password</p>
          <PassWordBox>
            <UseWrite type={lookPassword}></UseWrite>
            <div
              onClick={() => {
                setPasswordType((prev) => !prev);
                PassworrdType();
              }}
            >
              {passwordType ? (
                <AiOutlineEye size={30} />
              ) : (
                <AiOutlineEyeInvisible size={30} />
              )}
            </div>
          </PassWordBox>
          <PassWordBox>
            <UseWrite type={lookPassword2}></UseWrite>
            <div
              onClick={() => {
                setPasswordType2((prev) => !prev);
                PassworrdType2();
              }}
            >
              {passwordType2 ? (
                <AiOutlineEye size={30} />
              ) : (
                <AiOutlineEyeInvisible size={30} />
              )}
            </div>
          </PassWordBox>
        </WriteBox>
        <WriteBox>
          <p>Nickname</p>
          <input></input>
        </WriteBox>
        <WriteBox>
          {" "}
          <InputName>choose your job</InputName>
          <CheckRole>
            {RoleList.map((element) => {
              return (
                <>
                  <option>{element.name}</option>
                </>
              );
            })}
          </CheckRole>
        </WriteBox>
        <SignupBtn>Go to Sign Up</SignupBtn>
      </SignupBox>
    </>
  );
}
const UseWrite = styled.input`
  font-size: 25px;
  border: none;
  border-bottom: 2px solid #ffb176;
  background-color: #fbf4ef;
  outline: none;
  margin: 0.5rem;
  &:active,
  :focus {
    background-color: #ffebdd;
    transition: all 0.5s ease-out;
  }
`;
const PassWordBox = styled.div`
  background-color: #fbf4ef;
  width: 23.2rem;
  height: 3rem;
  display: flex;
  margin: 1rem;
  border: 2px solid #ffb176;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;
const SignupBtn = styled.button`
  background-color: #ffb176;
  color: white;
  font-size: 20px;
  text-align: center;
  height: 3rem;
  width: 23.5rem;
  border-radius: 10px;
  border: 1px solid #a7744e;
  margin: 1rem;

  &:active {
    transition: all 0.5s ease-out;
    background-color: #cd8f5f;
  }
`;
const InputName = styled.div`
  width: 24rem;
  font-size: 20px;
  margin: 0.5rem;
  color: #ff8e38;
`;
const WriteBox = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  margin: 0.5rem;
  color: #ff8e38;
  & > input {
    width: 22rem;
    height: 2.2rem;
    font-size: 25px;
    border: none;
    border: 2px solid #ffb176;
    background-color: #fbf4ef;
    outline: none;
    padding: 10px;
    border-radius: 10px;
    margin: 0.5rem;
    &:active,
    :focus {
      background-color: #ffebdd;
      transition: all 0.5s ease-out;
    }
  }
`;
const CheckRole = styled.select`
  border: 2px solid #ffb176;
  background-color: #fbf4ef;
  border-radius: 5px;
  width: 24rem;
  height: 3rem;
  margin: 1rem;
  text-align: center;
  font-size: 17px;
  font-weight: bold;
  outline: none;
  color: #ff7028;
  & > option {
    outline: none;
  }
`;
const SignupBox = styled.div`
  border-radius: 20px;
  width: 50%;
  height: 44rem;
  margin: 3rem auto;
  background-color: #fff1e6;
  box-shadow: 3px 3px 5px #dec4a3;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  font-size: 25px;
`;
const Backpage = styled.div`
  width: 100%;
  height: 2.5rem;
  padding: 10px 5rem;
  color: white;
  background-color: #ffb176;
  display: flex;
  align-items: center;

  & > * {
    font-size: 20px;
    padding-left: 5px;
    text-decoration: underline;
    height: 1.5rem;
    color: white;
  }
`;
