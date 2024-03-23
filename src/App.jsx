import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router';
const Home = lazy(() => import('./pages/Home'));
const Country = lazy(() => import('./pages/Country'));
export const App = () => {
  return (
    <>
      <Suspense>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/country/:countryId" element={<Country />}></Route>
        </Routes>
      </Suspense>
    </>
  );
};
