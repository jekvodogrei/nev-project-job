import { Button } from "./Buttons.styled";

export const Buttons = ({ changeIndex }) => {
  return <Button onClick={() => changeIndex()}>Load more...</Button>;
};
