import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ElfsightWidget } from "react-elfsight-widget";

const Youtube = () => {
  return (
    <>
      <Wrapper className="page">
        <div id="trash-taste" className="channel">
          <ElfsightWidget widgetID="d2969161-c0ed-4b9d-90a2-611d413c1a35" />
        </div>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.div`
  padding: 4rem;
  margin: 0;
  justify-content: center;
  .bottombar {
    height: 30px;
  }
`;
export default Youtube;
