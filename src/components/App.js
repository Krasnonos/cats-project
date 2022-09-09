import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import { dayTheme, nightTheme } from '../theme';
import { SharedLayoutPage } from '../pages/SharedLayoutPage/SharedLayoutPage';
import { HomeHeroBlock } from '../components/HomeHeroBlock/HomeHeroBlock';

function App() {
  const isDarkTheme = useSelector(store => store.theme.isNightTheme);

  return (
    <ThemeProvider theme={isDarkTheme ? nightTheme : dayTheme}>
      <Routes>
        <Route path="/" element={<SharedLayoutPage />}>
          <Route index element={<HomeHeroBlock />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
