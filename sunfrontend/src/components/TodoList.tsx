import styled from "styled-components";

export default function TodoList() {
  return (
    <>
      <ListPin />
      <ListBox>
        <DayBox>
        </DayBox>
      </ListBox>
    </>
  );
}
const DayBox = styled.div`
  background-color: #fffbf7;
  width: 20rem;
  height: 3rem;
  font-size: 20px;
  border-radius: 30px;
  box-shadow: 0px 0px 5px #ffa066;
  &:hover{
    background-color: white;
  }

`
const ListPin = styled.div`
  background-color: #ff9451;
  width: 20%;
  height: 1rem;
  margin: auto;
`;
const ListBox = styled.div`
  background-color: #fff1e6;
  width: 40%;
  height: 50rem;
  margin: 0px auto;
  margin-bottom: 4rem;
  border-radius: 30px;
  border: 3px solid #ff9451;
  padding: 2rem;

  display: flex;
  justify-content: center;
`;
