import React from "react";
import styled from "styled-components";
const Div = styled.div`
  position: fixed;
  z-index: 999;
  color: red;
  font-size: 60px;
  bottom: 0;
  width: 100vw;
  height: 30vh;
  background-color: white;
`;
export default function BottomNav() {
  return <Div>BottomNav</Div>;
}
