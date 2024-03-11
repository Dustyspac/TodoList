import styled from "styled-components";
import { Link } from 'react-router-dom'
import palette from "../../styles/palette";

const CustomLink = styled(Link)`
    color: ${palette.brown[0]};
    text-decoration: none;
`;

export default CustomLink;