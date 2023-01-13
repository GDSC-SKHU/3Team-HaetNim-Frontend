import { FcFolder } from "react-icons/bs";
import { RiDeleteBackLine } from "react-icons/ri";
import styled from "styled-components";
import format from "date-fns/format";
import { ChangeEvent, FormEvent, useState } from "react";
import { instance } from "../libs/api";
import useTodos from "../hooks/useTodos";

const Comment = ({
  id,
  commentInput,
  prevFix,
  putInput,
}: {
  id: string;
  commentInput: string;
  prevFix: string;
  putInput: Function;
}) => {
  const [inputBox, setInputBox] = useState(true);

  const onDelete = (e: React.FormEvent<HTMLDivElement>) => {
    instance.delete(`/todos/${id}`).then(() => {
      putInput();
    });
  };

  const [fixTodo, setFixTodo] = useState<string>("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFixTodo(e.target.value);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (fixTodo === "") {
      alert("입력이 필요합니다.");
      return;
    }
    instance
      .patch("/todos", {
        records: [
          {
            id: id,
            fields: {
              Comment: fixTodo,
            },
          },
        ],
      })
      .then(() => {
        putInput();
      });
    setInputBox(true);
  };

  return (
    <>
      {inputBox ? (
        <CommentDiv onClick={() => setInputBox(!inputBox)}>
          {commentInput}
        </CommentDiv>
      ) : (
        <form onSubmit={onSubmit}>
          <SubmitTodos type="text" value={fixTodo} onChange={onChange} />
        </form>
      )}
      <div onClick={onDelete}>
        <RiDeleteBackLine size={30} />
      </div>
    </>
  );
};

export default function TodoList({ selectedDay }: any) {
  const { todos, saveTodos } = useTodos();

  const [newTodo, setNewTodo] = useState<string>("");
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (fixTodo === "") {
      alert("입력이 필요합니다.");
      return;
    }
    instance
      .patch("/todos", {
        records: [
          {
            id: id,
            content: fixTodo,
          },
        ],
      })
      .then(() => {
        putInput();
      });
    setInputBox(true);
  };

  const [fixTodo, setFixTodo] = useState<string>("");

  return (
    <>
      <PostdivBox>
        <ListPin />
        <ListBox>
          <DayBox>
            <div> {format(selectedDay, "PPP")}</div>
          </DayBox>
          {/* <SubmitBox>
            <BsPencil size={35} />
            <SubmitTodos value={fixTodo}></SubmitTodos>
            <RiDeleteBackLine size={40} />
          </SubmitBox> */}
          {todos.map((eachTodo) => (
            <SubmitBox key={eachTodo.id}>
              <SubmitTodos
                id={eachTodo.id}
                commentInput={eachTodo.content}
                prevFix={newTodo}
                putInput={saveTodos}
              />
            </SubmitBox>
          ))}
        </ListBox>
      </PostdivBox>
    </>
  );
}
const PostdivBox = styled.div`
  position: fixed;
  top: 10.15rem;
  left: 2.5rem;
  width: 100rem;
  height: 45rem;
  z-index: 1;
`;
const SubmitBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ff9451;
`;
const SubmitTodos = styled.input`
  width: 500px;
  height: 3rem;
  background-color: #fffff4;
  outline: none;
  border: none;
  border-radius: 20px;
  border: 3px solid #ffcaa8;
  margin: 20px;
  padding: 10px;
  font-size: 20px;
  text-align: center;
  &:hover,
  :focus {
    border: 3px solid #ff9c5e;
    background-color: #fff9e1;
    transition: all 0.7s ease;
  }
`;
const DayBox = styled.div`
  width: 15rem;
  height: 2rem;
  font-size: 25px;
  color: #ff5f2a;
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 5px;
  border-bottom: 3px solid #ff5f2a;
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
  height: 44rem;

  margin: 0px auto;
  margin-bottom: 4rem;
  border-radius: 30px;
  border: 3px solid #ff9451;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
