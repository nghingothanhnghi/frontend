import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Route } from "react-router"



import Layout from './layouts/index.tsx'
import ErrorPage from './pages/404/index.tsx'
import SearchResult from './pages/search/index.tsx';
import Home from './pages/home/index.tsx';

import './index.css'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />} errorElement={<ErrorPage />}>
      <Route
        path="/frontend"
        element={<Home />}
      />
      <Route
        path="/search-result"
        element={<SearchResult />}
      />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

