import styled from "styled-components";

export const AllContainer = styled.div`
  display: flex;
  max-width: 100%;
  margin: auto;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const FilterFormLabel = styled.label`
  font-weight: 400;
  font-size: 18px;
`;

export const FilterFormInput = styled.input`
  width: 6rem;
  margin-right: 1rem;
  border-radius: 6px;
  text-align: center;
  font-size: 12px;
  font-weight: 700;
`;

export const FilterFormButton = styled.button`
  padding: 5px 15px;
  border-radius: 12px;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #ffffff;
  background-color: #7bb7b7;
  text-align: center;
  transition: all 0.2s;

  &:hover {
    background-color: #538b9b;
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }
`;
