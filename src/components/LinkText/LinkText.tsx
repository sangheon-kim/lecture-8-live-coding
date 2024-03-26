import Link from "next/link";
import React from "react";
import styled from "styled-components";

export const LinkText = styled(Link)`
  color: #1d88ca;
  font-size: 12px;
  cursor: pointer;

  &:hover {
    color: #6f99ca;
  }
`;
