import styled from "styled-components";
import { Rocket } from "../constants";
import { FcFolder } from "react-icons/fc";
import { FcOpenedFolder } from "react-icons/fc";
import React, { useState } from "react";
import Lottie from "react-lottie-player";
import lottieJson from "../my-lottie.json";
import Write from "../components/Write";
import { tr } from "date-fns/locale";

const Folder = () => {
  const [folderStatus, setFolderStatus] = useState(false);
  return (
    <FolderDiv
      onMouseOver={() => {
        setFolderStatus(true);
      }}
      onMouseLeave={() => {
        setFolderStatus(false);
      }}
    >
      {!folderStatus ? <FcFolder size={500} /> : <FcOpenedFolder size={500} />}
    </FolderDiv>
  );
};

export default function Main() {
  const [postStatus, setPostStatus] = useState(false);
  return (
    <>
      {/* 로켓 반복 */}
      <RocketTable>
        {Array.from(
          Rocket.map((RocketProps, i) => (
            <RocketBox
              key={i}
              onClick={() => {
                setPostStatus(false);
              }}
            >
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
      <MainDiv
        onClick={() => {
          setPostStatus(true);
        }}
      >
        {postStatus ? <Write /> : <Folder />}
      </MainDiv>
    </>
  );
}
const FolderDiv = styled.div`
  width: 500px;
  height: 500px;
`;
const MainDiv = styled.div`
  height: 45rem;
  display: flex;
  justify-content: center;
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
