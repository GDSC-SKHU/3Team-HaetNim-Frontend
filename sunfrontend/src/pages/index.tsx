import styled from "styled-components";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineLock } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import Link from "next/link";
import { useState } from "react";
import { RxRocket } from "react-icons/rx";
import React from "react";
import { login } from "../libs/api";
import Router from "next/router";

export default function Home() {
  const [passwordType, setPasswordType] = useState(false);
  const [lookPassword, setLookPassword] = useState("password");
  const [memberId, setMemberId] = useState("");
  const [password, setPassword] = useState("");

  const PassworrdType = () => {
    passwordType ? setLookPassword("password") : setLookPassword("text");
  };


  const onClickLogin = () => {
    login({ memberId, password })
      .then(({ grantType, accessToken }: any) => {
        const token = `${grantType} ${accessToken}`;
        console.log("token", token);
        localStorage.setItem('TOKEN', token);
        Router.push('/main');
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  return (
    <>
      <LoginBox>
        <WriteBox>
          <FaRegUser size={25} />
          <UserWrite
            value={memberId}
            onChange={(e: any) => setMemberId(e.target.value)}
          ></UserWrite>
        </WriteBox>
        <WriteBox>
          <AiOutlineLock size={30} />
          <UserWrite
            value={password}
            onChange={(e: any) => setPassword(e.target.value)}
            type={lookPassword}
          ></UserWrite>
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
        <div>
          <LoginBtn onClick={onClickLogin}>
            <LoginText>Login</LoginText>
          </LoginBtn>
          <LoginBtn>
            <Link href="/signup">
              <LoginText>Sign Up</LoginText>
            </Link>
          </LoginBtn>
        </div>
      </LoginBox>
      <RoketFoot>
        ___
        <RxRocket size={70} />
      </RoketFoot>
    </>
  );
}

const RoketFoot = styled.div`
  display: flex;
  justify-content: center;
  font-size: 5rem;
  color: #ff9f76;
`;
const LoginText = styled.div`
  color: white;
`;

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
  width: 10rem;
  border-radius: 10px;
  border: 5px solid #ffc97e;
  margin: 3rem 1rem 1rem 1rem;

  &:active,
  :hover {
    transform: translateY(5px);
    box-shadow: 0px -4px 10px #dec4a3;
    transition: transform 0.3s ease;
    background-color: #fca364;
    border: 5px solid #fac466;
    color: white;
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

const LoginBox = styled.div`
  border-radius: 20px;
  width: 34rem;
  height: 30rem;
  margin: 4rem auto;
  background-color: #fff1e6;
  box-shadow: 3px 3px 5px #dec4a3;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
