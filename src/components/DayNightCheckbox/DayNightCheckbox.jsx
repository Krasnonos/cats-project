import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from '../../redux/themeSlice';
import './DayNightCheckbox.css';

export const DayNightCheckbox = () => {
  const isDarkTheme = useSelector(store => store.theme.isNightTheme);
  const dispatch = useDispatch();

  return (
    <>
      <input
        checked={isDarkTheme}
        onChange={() => dispatch(changeTheme())}
        type="checkbox"
        id="toggle"
        className="toggle--checkbox"
      />
      <label htmlFor="toggle" className="toggle--label">
        <span className="toggle--label-background"></span>
      </label>
    </>
  );
};
