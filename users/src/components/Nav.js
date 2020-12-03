/** @jsxImportSource @emotion/react */

import React from "react";
import styled from "@emotion/styled";
import { css, jsx } from "@emotion/react";
const Nav = () => {
  return (
    <div
      css={css`
        width: 100%;
        overflow: hidden;
        background-color: plum;
        color: white;
      `}
    >
      <ul
        css={css`
          display: flex;
          margin: 15px;
          justify-content: space-between;
        `}
      >
        <nav
          css={css`
            width: 100px;
            border-radius: 10px;
            height: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            &:hover {
              background: pink;
            }
          `}
        >
          Add User
        </nav>
        <nav
          css={css`
            width: 100px;
            border-radius: 10px;
            height: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            &:hover {
              background: pink;
            }
          `}
        >
          Home
        </nav>
      </ul>
    </div>
  );
};

export default Nav;
