import Link from "next/link";
// import { RiRocket2Line } from "react-icons/ri";
import styled from "styled-components";
import { Rocket } from "../constants";
import React from "react";
import Lottie from "react-lottie-player";
import lottieJson from '../my-lottie.json';

export default function Main() {
  return (
    <>
    {/* 로켓 반복 */}
      <RocketTable>  
        {Array.from(
          Rocket.map((RocketProps, i) => (
            <RocketBox key={i}>
              <div>
                {/* <RiRocket2Line size={60} /> */}
                <Lottie
                  loop
                  animationData={lottieJson}
                  play
                  style={{ width: 80, height: 80 }}
                />
              </div>
              <p>{RocketProps.month}</p>
            </RocketBox>
          ))
        )}
      </RocketTable>
      <WriteBox>
        <MarkdownWriteBox cols={30} rows={10} />
        <MarkdownSeeBox />
      </WriteBox>
      <RocketHr>
        <Link href="/calender">
        <div>
          로켓 발사!
        </div>
        </Link>
      </RocketHr>
    </>
  );
}
const WriteBox = styled.div`
  display: flex;
  justify-content: center;
`;
const MarkdownWriteBox = styled.textarea`
  border: 3px solid #ffc651;
  width: 45rem;
  height: 20rem;
  margin: 2rem;
  overflow: scroll;
  outline: none;
  padding: 3rem;
  font-size: 20px;
  border-radius: 1rem;
  &:active,
  :focus {
    background-color: rgb(255, 251, 242);
  }
`;
const MarkdownSeeBox = styled.div`
  border: 3px solid #ffc651;
  width: 45rem;
  height: 20rem;
  margin: 2rem;
  overflow: scroll;
  outline: none;
  padding: 3rem;
  font-size: 20px;
  border-radius: 1rem;
`;
const RocketHr = styled.div`
  background-color: #ffc651;
  width: 96%;
  height: 3rem;
  margin: auto;
  margin-top: 1rem;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  & > * {
    color: white;
    font-size: 20px;
    font-weight: bolder;
  }
`;
const RocketTable = styled.div`
  display: flex;
  justify-content: center;
  height: 10rem;
`;

const RocketBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-size: 1rem;
  font-weight: bold;
  font-family: fantasy;
  border-radius: 100%;
  color: #ffc651;
  background-color: white;
  margin: 10px;
  padding: 1.3rem;
  width: 4.5rem;
  height: 5rem;
  &:hover {
    border: 1px solid #ff6e25;
    // & > div {
    //   transform: translateY(-5rem);
    //   opacity: 0;
    //   transition: all 0.8s ease;
    // }
  }
  & > p {
    margin-bottom: 5px;
  }
`;
