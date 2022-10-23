import styled from "styled-components";

export const Button = styled.button`
  background-color: green;
  border-radius: 30%;
  width: auto;
  height: 50px;
  color: red;
  font-size: 20px;
`;

export const Buttons = ({ changeIndex }) => {
  return <Button onClick={() => changeIndex()}>Load more...</Button>;
};
