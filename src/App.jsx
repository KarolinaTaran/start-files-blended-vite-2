import { lazy } from 'react';
import { Route, Routes } from 'react-router';
const Home = lazy(() => 
  import('./pages/Home')
);

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </>
  );
};
