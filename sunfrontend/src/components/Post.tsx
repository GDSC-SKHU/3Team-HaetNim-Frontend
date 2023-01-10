import { MdOutlineSubdirectoryArrowLeft } from "react-icons/md";
import { BsPencil } from "react-icons/bs";
import styled from "styled-components";
import format from "date-fns/format";

export default function Post({ content = '' }: any) {
  return (
    <>
      <ListPin />
      <ListBox>
        <AtMonth></AtMonth>
        <SubmitBox>
          <SubmitTodos>{content}</SubmitTodos>
        </SubmitBox>
      </ListBox>
    </>
  );
}
const AtMonth = styled.div`
  background-color: white;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
`;
const SubmitBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ff9451;
`;
const SubmitTodos = styled.div`
  width: 30rem;
  height: 20rem;
  background-color: #fffff4;
  outline: none;
  border: none;
  border-radius: 20px;
  border: 3px solid #ffcaa8;
  margin: 20px;
`;

const ListPin = styled.div`
  background-color: #ff9451;
  width: 20%;
  height: 1rem;
  margin: auto;
`;
const ListBox = styled.div`
  background-color: #ffdabe;
  width: 40%;
  height: 40rem;

  margin: 0px auto;
  margin-bottom: 4rem;
  border-radius: 30px;
  border: 3px solid #ff9451;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
