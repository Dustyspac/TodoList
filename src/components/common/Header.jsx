import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ModalContainer, ModalBox } from "../auth/AuthFormStyle";
import Responsive from "./Responsive";
import Button from "./Button";
import CustomLink from "./CustomLink";

const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  background: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);

`;

const Wrapper = styled(Responsive)`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo {
    font-size: 1.125rem;
    font-weight: 800;
    letter-spacing: 2px;
  }
  .right {
    display: flex;
    align-items: center;
    
  }
`;

const Spacer = styled.div`
  height: 4rem;
`;

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [logoutModal, setLogoutModal] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        setIsLogin(true);
      }
    };

    fetchUserData();
  }, []);

  const onClickLogout = () => {
    localStorage.removeItem("token");
    setIsLogin(false);
    setLogoutModal(true);
  };

  return (
    <>
      <HeaderBlock>
        <Wrapper>
          <CustomLink to="/" className="logo" style={{ fontFamily: "kkLight" }}>
            MY TODO LIST
          </CustomLink>
          <div className="right">
            {isLogin ? (
              <Button onClick={onClickLogout}>로그아웃</Button>
            ) : (
              <>
                <Button to="/login" style={{ marginRight: "0.5rem" }}>
                  로그인
                </Button>
                <Button to="/register">회원가입</Button>
              </>
            )}
          </div>
        </Wrapper>

        {logoutModal && (
          <ModalContainer>
            <ModalBox>
              <p>로그아웃이 완료되었습니다.</p>
              <Button to="/">확인</Button>
            </ModalBox>
          </ModalContainer>
        )}
      </HeaderBlock>
      <Spacer />
    </>
  );
};

export default Header;
