import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { AddBtnStyle } from "../../styles/componentStyles";
import { __createTodos } from "../../redux/modules/todosSlice";

function Input() {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const dispatch = useDispatch();
  // const todos = useSelector(state=> state.todos.todos)
  
  
  
  const handleSubmitButtonClick = (event) => {
    event.preventDefault();
    if (title === "") return;
    if (contents === "") return;
    
    const newTodo = {
      title,
      contents,
      isDone: false,
    };

    dispatch(__createTodos(newTodo))
    
    setTitle("");
    setContents("");

  };

  return (
    <StyledInput>
      <form onSubmit={handleSubmitButtonClick}>
        <Row>
          <div className="inputContainer">
            <Label> 제목: </Label>
            <InputText
              type="text"
              value={title}
              placeholder="제목을 입력하세요."
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <Label> 내용: </Label>
            <InputText2
              type="text"
              value={contents}
              placeholder="내용을 입력하세요."
              onChange={(e) => {
                setContents(e.target.value);
              }}
            />
          </div>
          <AddBtnStyle onClick={handleSubmitButtonClick}>추가하기</AddBtnStyle>
        </Row>
      </form>
    </StyledInput>
  );
}

// styled component 작성 시작

const StyledInput = styled.div`
  background-color: #f3ded9;
  padding: 25px 40px;
  font-size: 18px;
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  font-size: 18px;
`;

const Label = styled.label`
  width: 70px;
  margin-left: 30px;
  font-size: 18px;
`;

const InputText = styled.input`
  padding: 8px;
  width: 200px;
  margin-right: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 18px;
`;

const InputText2 = styled.input`
  padding: 8px;
  width: 200px;
  margin-right: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 18px;
`;

export default Input;
