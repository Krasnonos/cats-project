import { ImgLink, Link, ListItem } from './MainNavLink.styled';

export const MainNavLink = ({ img, color, text, path }) => {
  return (
    <ListItem>
      <ImgLink to={path} bgcolor={color}>
        <img src={img} alt={text} />
      </ImgLink>
      <Link to={path}>{text}</Link>
    </ListItem>
  );
};
