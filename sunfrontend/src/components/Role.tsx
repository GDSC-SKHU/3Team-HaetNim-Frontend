import styled from "styled-components";
import Recommendbox from "./Recommendbox";

const SubBoxArray = () => {
  return (
    <RecommendSubBox>
      {Array.from(Array(5)).map((__, j) => (
        <div key={j}>
          <Recommendbox />
        </div>
      ))}
    </RecommendSubBox>
  );
};

export default function Role() {
  return (
    <>
      <RoleBoard>
        <SubBoxArray />
        <SubBoxArray />
        <SubBoxArray />
      </RoleBoard>
    </>
  );
}
const RoleBoard = styled.div`
  background-color: #ffdbbf;
  border: #fce0cb 0.5px solid;
  width: 75%;
  height: 100%;
  margin: 10px auto;
  padding: 1.5rem 4rem;
  border-radius: 5px;

`;
const RecommendSubBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 5px;

`;
