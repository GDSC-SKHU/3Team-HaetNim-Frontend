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
      Authorization: localStorage.getItem("TOKEN") ?? '',
    },
  });


export const instance = axios.create({
  baseURL: 'http://35.233.222.35/',
  headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}` },
});
