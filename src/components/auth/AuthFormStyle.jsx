import styled from "styled-components";
import palette from "../../styles/palette";

export const AuthFormBlock = styled.div`
    h3 {
        margin: 0;
        color: ${palette.brown[0]};
        margin-bottom: 1rem;
        font-size: 18px;
    }
`;

export const StyledInput = styled.input`
    font-size: 1rem;
    border: none;
    border-bottom: 1px solid ${palette.brown[1]};
    padding-bottom: 0.5rem;
    outline: none;
    width: 100%;
    font-size: 18px;
    &:focus {
        color: ${palette.brown[0]};
        border-bottom: 1px solid ${palette.brown[0]};
    }
    &+& {
        margin-top: 1rem;
    }
`;

export const Footer = styled.div`
    margin-top: 2rem;
    text-align: right;
    font-size: 18px;
    a {
        color: ${palette.brown[0]};
        text-decoration: underline;
        &:hover {
            color: ${palette.brown[1]};
        }
    }
`;

export const ErrorMessage = styled.div`
    color: red;
    text-align: center;
    font-size: 0.875rem;
    margin-top: 1rem;
    font-size: 18px;
`;

export const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.258);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
`;

export const ModalBox = styled.div`
    background-color: white;
    width: 250px;
    height: 100px;
    padding: 1rem;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 18px;
`;