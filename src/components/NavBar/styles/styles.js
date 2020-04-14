import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  background: #f5f5f5;
  border-bottom: 1px solid #cacaca;
  margin: 0 -36px;
  position: sticky;
  top: 0;
  transition: 0.4s;
  z-index: 1000;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

export const NavUl = styled.ul`
  margin: 0.4rem 36px;
  padding-inline-start: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;
`;

export const NavLi = styled.li`
  margin-right: 2rem;
`;

export const HomeImg = styled.img`
  width: 4rem;
  margin: 0;
  transition: 0.4s;
  transform-origin: bottom center;

  &:hover {
    cursor: pointer;
    animation: anti-wiggle 1s ease-in-out;
  }

  @keyframes anti-wiggle {
    20% {
      transform: translateX(4px) rotate(-7deg);
    }

    40% {
      transform: translateX(-8px) rotate(14deg);
    }

    60% {
      transform: translateX(2px) rotate(-4deg);
    }

    80% {
      transform: translateX(-1px) rotate(2deg);
    }

    100% {
      transform: translateX(0px) rotate(0deg);
    }
  }
`;
