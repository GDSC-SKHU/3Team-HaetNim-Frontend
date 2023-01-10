import { MdOutlineSubdirectoryArrowLeft } from "react-icons/md";
import { BsPencil } from "react-icons/bs";
import styled from "styled-components";

export default function TodoList() {
  return (
    <>
      <ListPin />
      <ListBox>
        <DayBox>
          <div> 2023.01</div>
        </DayBox>
        <SubmitBox>
          <BsPencil size={35} />
          <SubmitTodos></SubmitTodos>
          <MdOutlineSubdirectoryArrowLeft size={40} />
        </SubmitBox>
      </ListBox>
    </>
  );
}

const SubmitBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ff9451;
`;
const SubmitTodos = styled.input`
  width: 30rem;
  height: 3rem;
  background-color: #fffff4;
  outline: none;
  border: none;
  border-radius: 20px;
  border: 3px solid #ffcaa8;
  margin: 20px;
`;
const DayBox = styled.div`
  width: 10rem;
  height: 3rem;
  font-size: 30px;
  border-left: 5px solid #ff9451;
  border-right: 5px solid #ff9451;
  color: #ff9451;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 5px;

  &:hover {
    background-color: #fffff4;
    transition: all 0.7s ease;
  }
`;

const ListPin = styled.div`
  background-color: #ff9451;
  width: 20%;
  height: 1rem;
  margin: auto;
`;
const ListBox = styled.div`
  background-color: #fff1e6;
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
