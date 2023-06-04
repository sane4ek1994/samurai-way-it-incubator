import styled from "styled-components";

const Nav = styled.nav`
  grid-area: nav;
  background-color: #ada297;
`

const Menu = styled.ul`
  margin: 0;
  
`

const MenuItem = styled.li`
  list-style: none;
  font-size: 14px;
  color: white;
  transition: color .3s ease-in-out;

  &:hover {
    color: black;
  }
`

export const S = {
    Menu,
    MenuItem,
    Nav
}