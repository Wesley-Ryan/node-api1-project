/** @jsxImportSource @emotion/react */

import React from "react";
import styled from "@emotion/styled";
import { css, jsx } from "@emotion/react";

const UserCard = (props) => {
  const { user } = props;

  const Card = styled.div`
    border: 1px solid black;
    height: 300px;
    width: 30%;
  `;
  const CardGroup = styled.div`
    display: flex;
    width: 100%;
    border: 1px solid blue;
  `;
  return (
    <div>
      <Card>
        <img
          css={css`
            width: 40%;
            border-radius: 100%;
          `}
          src={
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.qc6Rzs50f_8enPWugKmN5AAAAA%26pid%3DApi&f=1"
          }
        />
        <CardGroup>
          <h3
            css={css`
              margin-right: 10px;
            `}
          >
            Name :
          </h3>
          <h3>{user.name}</h3>
        </CardGroup>
        <CardGroup>
          <h3
            css={css`
              margin-right: 10px;
            `}
          >
            Bio:
          </h3>
          <p
            css={css`
              align-self: center;
            `}
          >
            {user.bio}
          </p>
        </CardGroup>
      </Card>
    </div>
  );
};

export default UserCard;
