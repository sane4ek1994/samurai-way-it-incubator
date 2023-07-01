import styled from "styled-components";

const Header = styled.header`
  height: 90px;
  padding: 0 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  grid-area: header;
  background-color: cornflowerblue;
  border-radius: 8px;
    `
const LogoType = styled.img`
  display: block;
  width: 40px;
  height: 40px;
  box-shadow: 4px 4px 8px 0 rgba(255, 2, 2, 0.2);
  border-radius: 5px;    
`

export const S = {
    LogoType,
    Header
}