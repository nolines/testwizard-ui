import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Questions from './Questions';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Root from './components/Root';
import Tests from './components/Tests';
import ThemeProvider from './theme';
import SimpleLayout from './layouts/simple';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />
  },
  {
    path: "/questions",
    element: <Questions />,
  },
  {
    path: "/tests",
    element: <Tests />
  },
  {
    element: <SimpleLayout />,
    children: [],
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
