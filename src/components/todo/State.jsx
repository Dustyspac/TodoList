import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { __getTodos, __deleteTodos, __switchTodos } from "../../redux/modules/todosSlice";

function State() {
  const todo = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

console.log(todo);

  useEffect(() => {
    dispatch(__getTodos());
  }, [dispatch]);

  const onDeleteHandler = (id) => {
    dispatch(__deleteTodos(id));
  };

  const onDoneHandler = (item) => {
    dispatch(__switchTodos(item));
    console.log(item);
  };

  return (
    <All>
      <WorkingContainer>
        <h3>해야할거 🔥</h3>
        <div className="CardContainer">
        {todo ? (
          todo.map((item) => {
            return !item.isDone ? (
              <div className="card" key={item.id}>
                <div className="Contents">
                  <CustomLink to={`/${item.id}`} key={item.id}>
                    <p>상세보기</p>
                  </CustomLink>
                  <h2>{item.title}</h2>
                  <h4>{item.contents}</h4>
                  <div className="switchButton">
                    <button onClick={() => onDoneHandler(item)}>{item.isDone ? "취소" : "완료"}</button>
                    <button onClick={() => onDeleteHandler(item.id)}>삭제</button>
                  </div>
                </div>
              </div>
            ) : null;
          })
        ) : (
          <div>로딩중 ...</div>
        )}
        </div>
      </WorkingContainer>

      <DoneContainer>
        <h3>마감한거 🎉</h3>
        <div className="CardContainer">
          {todo?.map((item) => {
            return item.isDone ? (
              <div className="card" key={item.id}>
                <div className="Contents">
                  <CustomLink to={`/${item.id}`} key={item.id}>
                    <p>상세보기</p>
                  </CustomLink>
                  <h2>{item.title}</h2>
                  <h4>{item.contents}</h4>
                  <div className="switchButton">
                    <button onClick={() => onDoneHandler(item)}>{item.isDone ? "취소" : "완료"}</button>
                    <button onClick={() => onDeleteHandler(item.id)}>삭제</button>
                  </div>
                </div>
              </div>
            ) : null;
          })}
        </div>
      </DoneContainer>
    </All>
  );
}

// style-component

const CustomLink = styled(Link)`
  margin-top: 20px;
  color: black;
  text-decoration: none;
  font-size: 21px;
  &:visited {
    color: black;
  }
`;

const All = styled.div`
  background-image: url("https://i.ibb.co/hHLTScY/1-100.jpg");
  height: 1000px;
`;

const WorkingContainer = styled.div`
  margin-bottom: 20px;

  h3 {
    font-size: 32px;
    margin-left: 1200px;
  }

  h2 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  h4 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .CardContainer {
    display: flex;
    height: max-content;
    width: 2000px;
    gap: 20px;
    margin-left: 60px;
    margin-right: 60px;
  }

  .card {
    width: 300px;
    height: 300px;
    margin-bottom: 10px;
    padding: 10px;
    background-image: url("https://i.ibb.co/YtksML6/1.png");
    background-size: cover;
    background-position: bottom right;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  .Contents {
    padding-bottom: 20px;
    font-size: 18px;
    width: 220px;
  }

  button {
    height: 40px;
    width: 80px;
    margin-right: 10px;
    background-color: #f69697;
    color: white;
    font-weight: bold;
    border-radius: 5px;
    border: none;
    font-size: 18px;
    cursor: pointer;
    &:hover {
      background-color: rgba(238, 107, 110);
    }
  }

  button:first-of-type {
    background-color: #72bf6a;
    &:hover {
      background-color: rgba(82, 164, 71);
    }
    color: white;
  }
`;

const DoneContainer = styled.div`
  margin-bottom: 20px;

  h3 {
    font-size: 32px;
    margin-left: 1200px;
    margin-top: 100px;
  }

  h2 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  h4 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .CardContainer {
    display: flex;
    height: max-content;
    width: 2000px;
    gap: 20px;
    margin-left: 60px;
    margin-right: 60px;
  }

  .card {
    width: 300px;
    height: 300px;
    margin-bottom: 10px;
    padding: 10px;
    background-image: url("https://i.ibb.co/5rBhxzw/1.png");
    background-size: cover;
    background-position: bottom right;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  .Contents {
    padding-bottom: 20px;
    font-size: 18px;
    width: 220px;
  }

  button {
    height: 40px;
    width: 80px;
    margin-right: 10px;
    background-color: #f69697;
    color: white;
    font-weight: bold;
    border-radius: 5px;
    font-size: 18px;
    border: none;
    cursor: pointer;
    &:hover {
      background-color: rgba(238, 107, 110);
    }
  }

  button:first-of-type {
    background-color: #72bf6a;
    &:hover {
      background-color: rgba(82, 164, 71);
    }
    color: white;
  }
`;

export default State;
