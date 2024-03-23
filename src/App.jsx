import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router';
import { Header } from './components';
const SearchCountry = lazy(() => import('./pages/SearchCountry'));
const Home = lazy(() => import('./pages/Home'));
const Country = lazy(() => import('./pages/Country'));
export const App = () => {
  return (
    <>
      <Header />
      <Suspense>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/country/:countryId" element={<Country />}></Route>
          <Route path="/country" element={<SearchCountry />}></Route>
        </Routes>
      </Suspense>
    </>
  );
};
