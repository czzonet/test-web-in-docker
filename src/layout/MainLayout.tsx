import React from "react";
import styled, { StyleSheetManager } from "styled-components";
import { HomePage } from "../page/HomePage";

export const MainLayout = () => {
  return (
    /** 禁用css旧浏览器兼容前缀 */
    <StyleSheetManager disableVendorPrefixes>
      <Style>
        <HomePage></HomePage>
      </Style>
    </StyleSheetManager>
  );
};

const Style = styled.div`
  width: 100vw;
  height: 100vh;

  background-color: var(--blue-normal);
`;
