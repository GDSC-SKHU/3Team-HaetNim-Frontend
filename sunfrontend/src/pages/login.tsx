import styled from "styled-components";
import { MdBackspace } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineLock } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import Link from "next/link";
import { useState } from "react";

export default function Login() {
  const [passwordType, setPasswordType] = useState(false);
  const [lookPassword, setLookPassword] = useState("password");
  const PassworrdType = () => {
    passwordType ? setLookPassword("password") : setLookPassword("text");
  };
  return (
    <>
      <Backpage>
        <MdBackspace size={40} />
        <Link href="/">
          <span> Back to Main</span>
        </Link>
      </Backpage>
      <LoginBox>
        <WriteBox>
          <FaRegUser size={25} />
          <UserWrite></UserWrite>
        </WriteBox>
        <WriteBox>
          <AiOutlineLock size={30} />
          <UserWrite type={lookPassword}></UserWrite>
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
        </WriteBox>
        <LoginBtn>Go to Login</LoginBtn>
      </LoginBox>
    </>
  );
}

const UserWrite = styled.input`
  background-color: #fff5ee;
  width: 15rem;
  height: 1.5rem;
  margin: 1rem;
  border: none;
  border-bottom: 2px solid #ffb176;
  font-size: 20px;
  padding-left: 10px;
  &:focus {
    border: none;
    outline: none;
    border-bottom: 2px solid #ffb176;
  }
`;
const LoginBtn = styled.button`
  background-color: #ffb176;
  color: white;
  font-size: 30px;
  text-align: center;
  height: 4rem;
  width: 23.5rem;
  border-radius: 10px;
  border: 1px solid #a7744e;
  margin: 3rem 1rem 1rem 1rem ;

  &:active {
    transform: translateY(5px);
    box-shadow: 0px -4px 10px #dec4a3;
    transition: transform 0.3s ease;
    background-color: #cd8f5f;
  }
`;
const WriteBox = styled.div`
  border: 1px solid #ffb176;
  border-radius: 5px;
  color: #ffb176;
  height: 3rem;
  width: 20rem;
  margin: 1rem;
  padding: 0.5rem 1.5rem;
  display: flex;
  align-items: center;
  background-color: #fff5ee;
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
const LoginBox = styled.div`
  border-radius: 20px;
  width: 34rem;
  height: 30rem;
  margin: 8rem auto;
  background-color: #fff1e6;
  box-shadow: 3px 3px 5px #dec4a3;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
