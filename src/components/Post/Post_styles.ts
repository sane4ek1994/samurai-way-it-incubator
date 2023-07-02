import styled from "styled-components";

const PostWrapper = styled.div`
  width: 300px;
  padding: 10px 5px;
  display: flex;
  align-items: center;
  background-color: #bfc4c1;
  box-shadow: -5px -5px 5px -5px rgba(34, 60, 80, 0.6);
  border-radius: 8px;
`

const PostAvatar = styled.div`
  margin-right: 10px;
  border-radius: 20px;
`

const Message = styled.div`
  margin-right: 10px;
  border-radius: 20px;
`
const WrapperBtns =  styled.div`
  span {
    margin-left: 5px;
    font-size: 14px;
    cursor: pointer;
  }
 
`

export const S = {
    PostWrapper,
    PostAvatar,
    Message,
    WrapperBtns
}
