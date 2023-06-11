import styled from "styled-components";
import {NavLink} from "react-router-dom";

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  grid-area: nav;
  padding: 10px 0 10px 0;
  background-color: #bfc4c1;
  border-radius: 8px;
`

const Menu = styled.ul`
  margin: 0;
  
`

const MenuItem = styled.li`
  
  list-style: none;
  font-size: 14px;
  color: white;
  transition: color, font-size .3s ease-in-out;
  width: 100px;
  height: 30px;
 
  &:hover {
    color: black;
    font-size: 15px;
  }
`

const Link = styled(NavLink)`
  &.${props => props.activeClassName} {
    color: black;
    font-size: 15px;
  }
  display: flex;
  align-items: flex-start;
  font-size: 14px;
  transition: color, font-size .3s ease-in-out;
`;

const IconWrapper = styled.div`
margin-right: 4px;
`

export const S = {
    Menu,
    MenuItem,
    Nav,
    Link,
    IconWrapper
}