import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const Recommendbox = () => {
  return (
    <>
      <Link href="/index">
        <PostBox>
          <Image
            key={1}
            src={"/emptyImage.png"}
            alt={"empty"}
            width={230}
            height={270}
          />
          <PostSummary>
            <h3>
              게시글 제목 부분입니다!! 개발중인데 왜 text-decoration이 안먹을까요?
            </h3>
            <SummaryDiv>
              <p>
                게시글 요약 글 입니다! 게시글 요약 글 입니다! 게시글 요약 글 입니다! 게시글 요약 글 입니다! 게시글 요약 글 입니다! 게시글 요약 글 입니다!

              </p>
            </SummaryDiv>
          </PostSummary>
        </PostBox>
      </Link>
    </>
  );
};

const SummaryDiv = styled.div`
  background-color: #ff741d;
  width: 185px;
  margin: 0px;
  padding: 30px 10px;
  height: 7rem;
  letter-spacing: 0.5px;
  line-height: 1.3rem;
  border-radius: 10px;
`;

const PostBox = styled.div`
  height: 340px;
  width: 230px;
  margin: 20px;
  overflow: hidden;
  background-color: white;
  text-decoration: none;
  border-radius: 20px;
  box-shadow: 3px 3px 3px #dec4a3;

  &:hover{
    transform: translateY(-5px);
    transition: transform 0.7s ease;
    box-shadow: 3px 5px 9px #dec4a3;  }
`;
const PostSummary = styled.div`
  text-decoration: none;
  background-color: #ff971d;
  width: 202px;
  /* PostBox하고 넓이 맞춰야함 */
  height: 340px;
  opacity: 0.8;
  text-decoration: none;

  padding: 1.5rem 14px;
  text-align: center;
  color: white;
  font-weight: bold;
  & > h3 {
    width: 205px;
    text-decoration: none;
    height: 2.65rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  &:hover {
    transform: translateY(-17.21rem);
    transition: transform 0.7s ease;
    & > h3 {
      padding-top: 2.5rem;
      padding-bottom: 1rem;
      width: 202px;
      text-decoration: none;
      height: 5rem;
      white-space: normal;
      overflow: visible;
    }
  }
`;

export default Recommendbox;
