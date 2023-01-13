import Link from "next/link";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import { useState } from "react";

export default function Write() {
  const [markdown, setMarkdown] = useState("");
  const onChangeMarkdown = (e: any) => setMarkdown(e.target.value);

  return (
    <>
      <PostPage>
        <WriteBox>
          <MarkdownWriteBox
            cols={30}
            rows={10}
            placeholder="html 태그 사용이 적용되지 않습니다."
            required
            value={markdown}
            onChange={onChangeMarkdown}
          />
          <MarkdownSeeBox>
            <ReactMarkdown>{markdown}</ReactMarkdown>
          </MarkdownSeeBox>
        </WriteBox>
        <RocketHr>
          <Link href="/calender">
            <div>로켓 발사!</div>
          </Link>
        </RocketHr>
      </PostPage>
    </>
  );
}
const PostPage = styled.div`
  display: flex;
  flex-direction: column;
`;
const RocketHr = styled.button`
  background-color: #ffb751;
  width: 7rem;
  height: 6rem;
  margin: 2rem auto;
  margin-top: 1rem;
  border-radius: 50%;
  box-shadow: 0px 7px 5px grey;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  & > * {
    color: white;
    font-size: 20px;
    font-weight: bolder;
  }
  &:hover,
  :active {
    background-color: #d89b45;
    transform: translateY(3px);
    transition: all 0.3s ease;
  }
`;
const WriteBox = styled.form`
  display: flex;
  justify-content: space-around;
  margin: auto;
`;
const MarkdownWriteBox = styled.textarea`
  border: 3px solid #ffc651;
  width: 40rem;
  height: 26rem;
  overflow: scroll;
  outline: none;
  padding: 3rem;
  margin-right: 10px;
  font-size: 20px;
  border-radius: 1rem;
  &:active,
  :focus {
    background-color: rgb(255, 251, 242);
  }
`;
const MarkdownSeeBox = styled.div`
  border: 3px solid #ffc651;
  width: 40rem;
  height: 26rem;
  overflow: scroll;
  margin-left: 10px;
  outline: none;
  padding: 3rem;
  font-size: 20px;
  border-radius: 1rem;
`;
