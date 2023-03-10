import type { AppProps } from "next/app";
import GlobalStyle from "../styles/style";
import styled from "styled-components";
import { RxRocket } from "react-icons/rx";
import React from "react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Body>
        <Title>햇님?</Title>
        <SubTitle>
          Todo Rocket
          <RocketPower>
            <RxRocket />
          </RocketPower>
        </SubTitle>
        <Component {...pageProps} />
      </Body>
    </>
  );
}
const Body = styled.div`
  margin: auto;
`
const RocketPower = styled.div`
  margin: 5px;
`;
const SubTitle = styled.h3`
  color: #ff971d;
  text-align: center;
  font-size: 25px;
  font-family: fantasy;
  margin-bottom: 1rem;

  display: flex;
  justify-content: center;
`;
const Title = styled.h1`
  color: #ff971d;
  text-align: center;
  margin: 3rem 3rem 1rem 3rem;
  font-size: 40px;
`;
