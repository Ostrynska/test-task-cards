import React, { lazy } from 'react';

import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('../pages/Home'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="*" element={<div>Page Not Found</div>} />
      </Route>
    </Routes>
  );
}

export default App;
