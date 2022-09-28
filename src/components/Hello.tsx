import React from "react";
import styled from "styled-components";

export const Hello = () => {
  return (
    <Style>
      <label>Hello template-react</label>
      <main>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit odio
        blanditiis qui ducimus, praesentium quod quas excepturi, facere natus
        nihil et totam, aspernatur eveniet beatae hic aliquam soluta delectus
        quibusdam..
      </main>
    </Style>
  );
};

const Style = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 1fr auto;
  grid-gap: 10px;

  padding: 20px;

  > label {
    font-size: 36px;
    text-align: center;
  }

  > main {
    text-align: center;
  }
`;
