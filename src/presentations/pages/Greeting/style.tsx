import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

export const Root = styled.div`
  text-align: center;
`;

export const Header = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const bounce = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Logo = styled.img`
  height: 40vmin;
  pointer-events: none;
  @media (prefers-reduced-motion: no-preference) {
    animation: ${bounce} infinite 20s linear;
  }
`;

export const Link = styled.a`
  color: #61dafb;
`;

export const Button = styled.button`
  font-size: calc(10px + 2vmin);
`;
