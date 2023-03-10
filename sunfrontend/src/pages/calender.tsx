import React, { useEffect, useState } from "react";
import { Rocket } from "../constants";
import { RiRocket2Line } from "react-icons/ri";

import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import styled from "styled-components";
import TodoList from "../components/TodoList";
import Post from "../components/Post";
import { getUserInfo } from "../libs/api";
import getYear from "date-fns/getYear";
import getMonth from "date-fns/getMonth";

// export default function Calender({ data }: any) {
export default function Calender() {
  const [selectedDay, setSelectedDay] = useState<Date>();
  const [showTodoList, setShowTodoList] = useState(false);
  const [showPost, setShowPost] = useState(false);

  const [data, setData] = useState<any>();
  const [foundData, setFoundData] = useState<any>();

  const onSelectRocket = (index: number) => {
    setShowTodoList(false);
    
    const monthNow = getMonth(new Date());
    // 현재 날짜가 1월이면, 1월 버튼 외에는 다 무시한다.
    if (!data || monthNow !== index) {
      return;
    }
    setShowPost(true);
    console.log('data', data, monthNow !== index);
    const matchedData = data.find(
      ({ date }: any) => getMonth(new Date(date)) === index
    );
    setFoundData(matchedData);
  };

  const onSelectDay = (day: any) => {
    setSelectedDay(day);
    setShowTodoList(true);
    setShowPost(false);
  };

  const footer = selectedDay ? (
    <p>You selected {format(selectedDay, "PPP")}.</p>
  ) : (
    <p></p>
  );

  

  useEffect(() => {
    getUserInfo({ memberId: "member_B" })
      .then((res) => res.json())
      .then((data) =>
        setData(
          data.postDTOs.filter(({ date }: any) => getYear(new Date(date)) === getYear(new Date()))
        )
      );
  }, []);

  return (
    <>
      <CalenderBox>
        <DayPicker
          mode="single"
          selected={selectedDay}
          onSelect={onSelectDay}
          footer={footer}
        />
      </CalenderBox>
      <RocketWrapper>
        {Array.from(
          Rocket.map(({ month }, i) => (
            <RoketBox key={i} onClick={() => onSelectRocket(i)}>
              <div>
                <RiRocket2Line size={60} />
              </div>
              <p>{month}</p>
            </RoketBox>
          ))
        )}
      </RocketWrapper>

      {showTodoList && <TodoList selectedDay={selectedDay} />}
      {showPost && (
          <Post content={foundData?.content} open={setShowPost}/>

      )}
    </>
  );
}


// export async function getServerSideProps(context) {
//   const res = await getUserInfo({ memberId: "member_B" });
//   const data = await res.json();

//   if (!data) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: {
//       data: data.postDTOs.filter(({ date }: any) => {
//         return getYear(new Date(date)) === getYear(new Date());
//       }),
//     }, // will be passed to the page component as props
//   };
// }

const RocketWrapper = styled.div`
  width: 80%;
  display: grid;
  grid-gap: 40px;
  grid-template-columns: repeat(6, 2fr);
  /* flex-wrap: wrap; */
  margin: 5rem auto;
`;
const RoketBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-size: 1rem;
  font-weight: bold;
  font-family: fantasy;
  border-radius: 100%;
  color: white;
  background-color: #ffc651;
  overflow: hidden;
  width: 120px;
  height: 120px;
  box-shadow: 0px 5px 5px gray;
  /* height: 4.5rem; */
  &:hover {
    background-color: #ff3e25;
    box-shadow: 0px 0px 2rem #a80000;
    transform: translateY(3px);
    transition: all 1s ease;
    & > div {
      transform: translateY(-5rem);
      opacity: 0;
      transition: all 2s ease;
    }
  }
  & > p {
    margin-bottom: 5px;
  }
`;

const CalenderBox = styled.div`
  background-color: #ffe5d1;
  border: 3px solid #ffb176;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35rem;
  height: 23rem;
  margin: auto;

  border-radius: 10px;
`;
