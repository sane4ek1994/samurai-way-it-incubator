import styled from "styled-components";


const AppWrapper = styled.div`
  width: 65%;
  margin: 0 auto;
  padding: 5px;
  display: grid;
  grid-template-areas:
            'header header'
            'nav content ';
  grid-template-rows: 2fr 10fr;
  grid-template-columns: 1fr 5fr;
  gap: 5px;
`

const Content = styled.div`
  padding:  0 5px;
  grid-area: content;
  background-color: aliceblue;
`

export const S = {AppWrapper, Content}