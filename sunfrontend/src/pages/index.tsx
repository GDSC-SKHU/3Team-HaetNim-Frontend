import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import Main from "../components/Main";
import Link from "next/link";


export default function Home() {
  return (
    <>
      <HomeNavBox>
        <SearchBox>
          <SearchIconBox>
          <BsSearch size={25} color={"#fb8d0f"}/>
          </SearchIconBox>
        </SearchBox>
        <LoginBox>
          <Link href="/login">Login</Link>
          <Link href="/signup">Sign in</Link>
        </LoginBox>
      </HomeNavBox>
      
      <Main />
    </>
  );
}
const SearchIconBox = styled.div`
  padding: 3px;
`

const HomeNavBox = styled.nav`
  background-color: #ffe8d6;
  border: #fce0cb 0.5px solid;
  height: 3rem;
  width: 83%;
  margin: auto;
  border-radius: 20px;

  display: flex;
  justify-content: space-between;
  gap: 20px;
`;
const SearchBox = styled.div`
  display: flex;
  justify-content: flex-start;
  border-bottom: 3px solid #ffb176;
  width: 20rem;
  height: 70%;
  margin: 5px 5rem;
  transition: all 0.5s ease-out;
  border-radius: 10px;
  &:hover {
    background-color: white;
    text-decoration: underline #ff971d 0.21rem;
  }
`;
const LoginBox = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  margin: 0.8rem 5rem;
  & > * {
    padding-right: 1rem;
    font-size: 1.2rem;
    text-align: center;
    &:hover {
      transform: translateY(-3px);
      transition: transform 0.3s ease;
      text-decoration: underline #ff971d 0.21rem;
    }
  }
`;
