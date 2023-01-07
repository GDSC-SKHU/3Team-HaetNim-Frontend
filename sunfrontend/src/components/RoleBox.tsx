import Link from "next/link";
import styled from "styled-components";
import { RoleList } from "../constants";
import { useState } from "react";


const RoleBox = ({ element }: any) => {
  const [roleid, setRoleid] = useState(0);
  
  const LookRole = () => {
    setRoleid(element.id);
  }
  return (
    <>
      <RoleBlock onClick={()=>{LookRole()}} {...{roleid}}>
        <p>{element.name}</p>
      </RoleBlock>
    </>
  );
};

const RoleBlock = styled.div`
  background-color: #ff6128e0;
  width: fit-content;
  padding: 5px;
  font-size: 17px;
  border-radius: 5px;
  font-weight: bold;
  color: white;
  height: 1.4rem;
  margin: 0.3rem;
  -webkit-text-stroke: 1px #ffbd76bd;
  display: flex;
  &>p{
    padding-top: 2px;
  }
  &:active{
    background-color: #d20b0bb8;
    transform: translateY(-3px);
    transition: transform 0.3s ease;
  }
`;

export default RoleBox;
