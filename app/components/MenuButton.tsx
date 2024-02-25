import { Button, styled } from '@mui/material';

interface Props {
  title: string;
  onButtonClick: (param: string) => void;
}

const GameButton = styled(Button, {
  name: 'GameButtonComponent',
  slot: 'Root'
})(({}) => ({}));

const MenuButton = ({ title, onButtonClick }: Props) => {
  return <GameButton onClick={() => onButtonClick(title)}>{title}</GameButton>;
};

export default MenuButton;
