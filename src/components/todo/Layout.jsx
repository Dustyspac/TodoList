import React from 'react'
import styled from 'styled-components'

const Layout = (props) => {
  return <StyledLayout>{props.children}</StyledLayout>;
};

export default Layout;

const StyledLayout = styled.div`
    width: 1200px;
    min-width: 800px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    position: relative;
    height: 100vh;
`