import { AuthFormBlock, StyledInput, Footer, ErrorMessage } from "./AuthFormStyle";
import Button from "../common/Button";
import CustomLink from "../common/CustomLink";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginForm = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useNavigate();

  const onChangeId = (e) => {
    setId(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onClickLogin = async () => {
    try {
      const login = await axios.post("http://3.38.191.164/login", {
        id,
        password,
      });
      console.log("로그인 성공");
      const token = login.data.token;
      localStorage.setItem("token", token);
      router("/myPage");
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <AuthFormBlock>
      <h3>로그인</h3>
      <StyledInput autoComplete="id" name="id" placeholder="아이디" value={id} onChange={onChangeId} />
      <StyledInput autoComplete="new-password" name="password" placeholder="비밀번호" type="password" value={password} onChange={onChangePassword} />
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Button full onClick={onClickLogin}>
        로그인
      </Button>
      <Footer>
        <CustomLink to="/register">회원가입</CustomLink>
      </Footer>
    </AuthFormBlock>
  );
};

export default LoginForm;
