import styled from "styled-components";


const AppWrapper = styled.div`

  width: 100%;
  display: grid;
  grid-template-areas:
            'header header'
            'nav content ';
  grid-template-rows: 2fr 10fr;
  grid-template-columns: 1fr 5fr;
`

export const S = {AppWrapper}