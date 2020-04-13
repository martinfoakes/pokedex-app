import styled from "styled-components";

export const CardContainer = styled.div`
  margin-top: 1rem;
  width: 32%;
  background-color: white;
  background-clip: border-box;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  border: 1px solid #ecd018;
  border-radius: 0.25rem;
  overflow: -moz-hidden-unscrollable;
  margin-bottom: 1rem;
  transition: all 0.1s ease;

  &:hover {
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  }

  @media (max-width: 800px) {
    width: 100%;
  }

  @media (max-width: 400px) {
    width: 100%;
  }
`;

export const PokemonName = styled.div`
  background-color: #ecd018;
  text-align: center;
  padding: 10px;

  > p {
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 700;
    color: white;
    font-size: 1.2em;
    text-shadow: 0 0.125rem 0.25rem rgba(14, 14, 14, 0.55);
  }
`;

export const PokemonMeta = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  padding: 0 10px;

  @media (max-width: 400px) {
    flex-wrap: wrap;
  }

  > span {
    color: white;
    text-shadow: 0 0.125rem 0.25rem rgba(14, 14, 14, 0.55);
    background-color: #7bb7b7;
    font-weight: bold;
    margin: 0;
    padding: 10px 20px;
    border-radius: 5px;

    @media (max-width: 1024px) {
      padding: 10px 10px;
      width: 40%;
      text-align: center;
      line-height: 20px;
    }

    @media (max-width: 400px) {
      width: 100%;
      margin-bottom: 0.8rem;
      text-align: center;
    }
  }
`;

export const CardImage = styled.div`
  padding: 20px;
  min-height: 290px;
  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    max-width: 100%;
    height: auto;
    max-height: 14rem;
  }
`;

export const AttacksList = styled.div`
  display: flex;
  padding-left: 10px;
  padding-right: 10px;
  justify-content: space-between;

  @media (max-width: 400px) {
    flex-wrap: wrap;
  }

  > span {
    width: 30%;
    background-color: #f16820;
    border-radius: 4px;
    padding: 8px;
    font-weight: 700;
    color: #fff;
    padding-left: 10px;
    padding-right: 10px;
    font-size: 14px;
    margin-bottom: 10px;
    text-align: center;
    word-wrap: break-word;

    @media (max-width: 400px) {
      width: 100%;
    }
  }
`;
