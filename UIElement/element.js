import styled from "styled-components";

export const PrimaryButton = styled.button`
  padding: 10px 28px;
  outline: none;
  border: none;
  border-radius: 55px;
  cursor: pointer;
  background: ${(props) => props.background};
  font-size: 18px;
  text-align: center;
  color: white;
  font-weight: 500;
  font-size: 19px;
  &:hover {
    transition: 0.4s;
    opacity: 0.5;
  }
`;
