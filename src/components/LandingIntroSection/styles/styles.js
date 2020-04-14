import styled from "styled-components";

export const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-direction: column;
  background: #ffffe9;
  border: 4px solid #1b5e20;
  margin-top: 1rem;
  padding: 12px 30px;
  border-radius: 3rem;
`;

export const ProfessorImg = styled.img`
  margin: 0 auto;
  height: auto;
  max-height: 18rem;
`;

export const IntroText = styled.p`
  margin: 1rem 0 0;
  line-height: 2em;

  > a {
    text-decoration: none;
    color: #f16820;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
      color: #7bb7b7;
    }
  }
`;
