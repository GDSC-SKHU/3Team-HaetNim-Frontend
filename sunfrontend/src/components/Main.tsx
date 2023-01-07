import { useState } from "react";
import styled from "styled-components";
import Recommendbox from "../components/Recommendbox";
import RoleBox from "../components/RoleBox";
import { RoleList } from "../constants";
import Role from "./Role";

export default function Main({roleid}:any) {

  return (
    <>
      <RecommendBorder>
        <BestText>Best Post</BestText>
        <RecommendSubBox>
          {Array.from(Array(5)).map((__, j) => (
            <div key={j}>
              <Recommendbox />
            </div>
          ))}
        </RecommendSubBox>
      </RecommendBorder>
      <MainHr />
      <ThemeList>
        {RoleList.map((element) => {
          return (
            <>
              <RoleBox {...{element}}/>
            </>
          );
        })}
      </ThemeList>
      <MainHr />
        <Role />
    </>
  );
}
const MainHr = styled.div`
  width: 83%;
  background-color: #ff7a38;
  height: 1px;
  margin: auto;
`;
const ThemeList = styled.div`
  height: 3rem;
  display: flex;
  width: 80%;
  margin: 0px auto;
  padding: 5px 0px;
  align-items: center;
  /* justify-content: center; */
`;

const BestText = styled.p`
  color: #ff4d17;
  font-size: 25px;
  font-family: fantasy;
`;

const RecommendSubBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 5px;
`;

const RecommendBorder = styled.div`
  background-color: #ffe8d6;
  border: #fce0cb 0.5px solid;
  width: 75%;
  height: 25rem;
  margin: 30px auto;
  padding: 1.5rem 4rem;
  border-radius: 5px;
`;
