import { AuthFormBlock, StyledInput, Footer, ErrorMessage, ModalContainer, ModalBox } from "./AuthFormStyle";
import Button from "../common/Button";
import CustomLink from "../common/CustomLink";
import { useState } from "react";
import { getRegister } from "../../api/getRegister";
import styled from "styled-components";

const RegisterForm = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [successModal, setSuccessModal] = useState(false);

  const onChangeId = (e) => {
    setId(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onClickRegister = async () => {
    try {
      await getRegister(id, password);
      setSuccessModal(true);
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <AuthFormBlock>
      <h3>회원가입</h3>
      <StyledInput autoComplete="id" name="id" placeholder="아이디" value={id} onChange={onChangeId} />
      <StyledInput autoComplete="new-password" name="password" placeholder="비밀번호" type="password" value={password} onChange={onChangePassword} />
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Button full onClick={onClickRegister}>
        회원가입
      </Button>
      <Footer>
        <CustomLink to="/">로그인</CustomLink>
      </Footer>

      {successModal && (
        <ModalContainer>
          <ModalBox>
            <p>회원가입이 완료되었습니다!</p>
            <Button to="/">로그인</Button>
          </ModalBox>
        </ModalContainer>
      )}
    </AuthFormBlock>
  );
};


export default RegisterForm;
