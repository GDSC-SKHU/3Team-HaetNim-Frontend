import exp from "constants";
import { use, useCallback, useEffect, useState } from "react";
import { instance } from "../libs/api";

// interface Record {
//   id: string;
//   createdTime: string;
//   fields: {
//     Comment: string;
//   };
//   deleted: boolean;
// }
interface PostDTO {
  id: number;
  title: string;
  content: string;
  date: string;
  letter: boolean;
  createDate: string;
  lastModifiedDate: string;
  postLike: boolean;
  heartCount: number;
  hashTags: string[];
}
interface Record {
  memberId: unknown;
  password: string;
  nickname: string;
  statusMessage: string;
  postDTOs: PostDTO[];
  letterWrite: boolean;
}

const useTodos = () => {
  const [todos, setTodos] = useState<PostDTO[]>([]);

  const saveTodos = useCallback(async () => {
    const response = await instance.get<Response>("/todos");
    setTodos(response.data.records);
  }, []);

  useEffect(() => {
    saveTodos();
  }, [saveTodos]);
  return { todos, saveTodos };
};

export default useTodos;
