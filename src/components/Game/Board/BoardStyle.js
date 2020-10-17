import styled from "styled-components";

export const Wrapper = styled.div`
  width: 40vw;
  height: 40vw;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (orientation: portrait) {
    width: 40vh;
    height: 40vh;
  }
`;
