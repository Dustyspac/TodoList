import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/common/Header";
import styled from "styled-components";
import { __getTodosDetail } from "../redux/modules/todosSlice";

function Detail() {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todos.todos[0]);
  console.log(todo)
  const param = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(__getTodosDetail(param.id));
  }, [dispatch]);

  const HandleGoback = () => {
    navigate("/myPage");
  };

  return (
    <>
      <Header />
      <Background>
          {todo ? (
        <Container>
          <In>
            <Box>
              <Id>ID : {todo.id}</Id>
              <Button onClick={HandleGoback}>돌아가기</Button>
            </Box>
            <Title>{todo.title}</Title>
          </In>
          <Contents>{todo.contents}</Contents>
        </Container>
          ) : (
            <div>로딩중...</div>
          )}

      </Background>
    </>
  );
}

// style-component

const Background = styled.div`
  background-image: url("https://i.ibb.co/hHLTScY/1-100.jpg");
  height: 1000px;
`;

const Container = styled.div`
  width: 1280px;
  height: 720px;
  margin: 0 auto;
  margin-top: 20px;
  border-radius: 8px;
  color: black;
  background-image: url("https://i.ibb.co/4MtHcKH/1.png");
  background-size: cover;
`;
const In = styled.div`
  margin: 20px 30px;
  padding-top: 100px;
`;
const Id = styled.p`
font-size: 18px;
  margin-bottom: 20px;
`;
const Button = styled.button`
  font-size: 18px;
  padding: 15px 30px;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  border: none;
  background-color: #f69697;
  &:hover {
    background-color: rgba(238, 107, 110);
  }
`;
const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 150px;
  margin-right: 150px;
`;
const Title = styled.h3`
  font-size: 24px;
  margin-bottom: 40px;
    margin-left: 140px;
  margin-right: 140px;
`;
const Contents = styled.p`
  font-size: 18px;
  font-weight: light;
  margin-bottom: 20px;
  margin-left: 180px;
  margin-right: 140px;
`;

export default Detail;

