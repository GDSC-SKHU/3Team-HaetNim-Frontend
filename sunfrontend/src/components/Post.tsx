import { MdOutlineSubdirectoryArrowLeft } from "react-icons/md";
import { GiCancel } from "react-icons/gi";
import styled from "styled-components";
import format from "date-fns/format";

export default function Post({ content = "", open }: any) {
  return (
    <>
      <PostdivBox>
        <ListPin />
        <ListBox>
          <SubmitBox>
            <SubmitTodos>{content}</SubmitTodos>
          </SubmitBox>
          <div onClick={()=>{open((prev:boolean)=>(!prev))}}>
          <GiCancel size={30}/>
          </div>
        </ListBox>
      </PostdivBox>
    </>
  );
}
const PostdivBox = styled.div`
  position: fixed;
  top: 10.15rem;
  width: 100%;
  height: 50rem;
  z-index: 2;
`;
const SubmitBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ff9451;
`;
const SubmitTodos = styled.div`
  width: 40rem;
  height: 30rem;
  background-color: #fffff4;
  outline: none;
  border: none;
  border-radius: 20px;
  border: 3px solid #ffcaa8;
  margin: 20px;
  padding: 20px;
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
  height:44rem;
  margin: auto;
  color: #ff883e;

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
