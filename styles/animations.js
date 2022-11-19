import { keyframes } from "styled-components";

export const slideDown = keyframes`
  0% { 
    opacity: 0;
    transform: translateY(-60px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
`

export const slideUp__remove = keyframes`
    0% { 
        opacity: 1;
        transform: translateY(0px);
    }

    100% {
        opacity: 0;
        transform: translateY(-60px);
    }
`

