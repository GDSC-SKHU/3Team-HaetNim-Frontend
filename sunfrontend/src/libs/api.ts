import axios from "axios";

const baseUrl = "http://35.233.222.35/";

export const login = ({ memberId, password }: any) =>
  fetch(`${baseUrl}login`, {
    method: "POST",
    body: JSON.stringify({
      memberId,
      password,
    }),
  });
export const getUserInfo = ({ memberId }: any) =>
  fetch(`${baseUrl}@${memberId}`, {
    headers: {
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtZW1iZXJfQiIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE2NzM2ODQ3NTB9.zmh6EoYi9nwomK5Jgw1TtNKGL_iVd8sA8XpfKsJghIc',
    },
  });


export const instance = axios.create({
  baseURL: 'http://35.233.222.35/',
  headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}` },
});
