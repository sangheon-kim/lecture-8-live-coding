import { css, keyframes } from "styled-components";

export const skeleton = keyframes` 
    0% {
      background-color: rgba(165, 165, 165, 0.1);
    }

    50% {
      background-color: rgba(165, 165, 165, 0.3);
    }

    100% {
      background-color: rgba(165, 165, 165, 0.1);
    }
`;

export const skeletonStyle = css`
  animation: ${skeleton} 1.8s infinite ease-in-out;
  /* font-size: 0; */
  /* height: 100%; */
  color: transparent;
  opacity: 1;
`;
