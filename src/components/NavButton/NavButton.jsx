import { BtnWithImg, ChooseBtn, ListItem } from './NavButton.styled';

export const NavButton = ({ img, color, text, path }) => {
  return (
    <ListItem>
      <BtnWithImg
        to={path}
        bgcolor={color}
      >
        <img src={img} alt={text} />
      </BtnWithImg>
      <ChooseBtn to={path}>
        {text}
      </ChooseBtn>
    </ListItem>
  );
};
