import axios from "axios";

const Axios = axios.create({
  // API 통신을 위해 axios 인스턴스 생성
  baseURL: "https://glorious-fish-scilla.glitch.me/todos", // 기본이 되는 api 주소 (JSON 서버)
});

// TodoList 받아오는 함수
export const getTodo = async () => {
  try {
    const res = await Axios.get("");
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

// TodoList 추가하는 함수
export const createTodo = (todo) =>
  Axios.post(
    "",
    todo // 파라미터로 입력받은 값 넘기기))
  )
    .then((res) => {
      // 통신에 성공하면
      return res;
      // setTodo((newTodos) => [...newTodos, res.data]); // TodoList에 newTodos 생성
    })
    .catch((err) => {
      // 실패하면 콘솔에 오류 표시
      console.log(err);
    });

// TodoList 삭제하는 함수
export const deleteTodo = async (id) => {
  try {
    const res = await Axios.delete(`/${id}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

// TodoList isDone 수정하는 함수
export const switchTodo = async (item) => {
  try {
    const res = await Axios.put(`/${item.id}`, {...item, isDone: !item.isDone});
    return res;
  } catch (err) {
    console.log(err);
  }
};

// TodoList 상세보기 작동하는 함수
export const getTodoDetail = async (id) => {
  try {
    const res = await Axios.get(`/${id}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};