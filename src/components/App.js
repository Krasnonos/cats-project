import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import { dayTheme, nightTheme } from '../theme';
import { SharedLayoutPage } from '../pages/SharedLayoutPage/SharedLayoutPage';
import { VotingPage } from '../pages/VotingPage/VotingPage';
import { GalleryPage } from '../pages/GalleryPage/GalleryPage';
import { BreedsPage } from '../pages/BreedsPage/BreedsPage';
import { FavoritePage } from '../pages/FavoritePage/FavoritePage';
import { LikesPage } from '../pages/LikesPage/LikesPage';
import { DislikesPage } from '../pages/DislikesPage/DislikesPage';
import { BreedDescrPage } from '../pages/BreedDescrPage/BreedDescrPage';
import { SearchBreedPage } from '../pages/SearchBreedPage/SearchBreedPage';
import { HomeHeroBlock } from '../components/HomeHeroBlock/HomeHeroBlock';

function App() {
  const isDarkTheme = useSelector(store => store.theme.isNightTheme);

  return (
    <ThemeProvider theme={isDarkTheme ? nightTheme : dayTheme}>
      <Routes>
        <Route path="/" element={<SharedLayoutPage />}>
          <Route index element={<HomeHeroBlock />} />
          <Route path={'voting'} element={<VotingPage />} />
          <Route path={'gallery'} element={<GalleryPage />} />
          <Route path={'breeds'} element={<BreedsPage />} />
          <Route path={'breeds/:breedId'} element={<BreedDescrPage />} />
          <Route path={'likes'} element={<LikesPage />} />
          <Route path={'dislikes'} element={<DislikesPage />} />
          <Route path={'favorites'} element={<FavoritePage />} />
          <Route path={'search'} element={<SearchBreedPage />} />
          <Route path={'search/:breedId'} element={<BreedDescrPage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
