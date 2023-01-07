import type { AppProps } from "next/app";
import GlobalStyle from "../styles/style";
import styled from "styled-components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Title>너 할 일 했님?</Title>
      <Component {...pageProps} />
    </>
  );
}
const Title = styled.h1`
  color: #ff971d;
  text-align: center;
  margin: 3rem;
  font-size: 35px;
`;
