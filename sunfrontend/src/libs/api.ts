const baseUrl = "http://35.233.222.35/";
export const getUserInfo = ({ memberId }: any) =>
  fetch(`${baseUrl}@${memberId}`, {headers: {Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtZW1iZXJfQiIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE2NzM0NDI2NzF9.bejIYvtX9tjZQArNqPvZYQneoRK0Lgp9tgXHBIAE_EI'}});
