import { ImgLink, Link, ListItem } from './NavLink.styled';

export const NavButton = ({ img, color, text, path }) => {
  return (
    <ListItem>
      <ImgLink to={path} bgcolor={color}>
        <img src={img} alt={text} />
      </ImgLink>
      <Link to={path}>{text}</Link>
    </ListItem>
  );
};
