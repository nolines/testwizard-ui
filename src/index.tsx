import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Questions from './Questions';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Navigate,
} from "react-router-dom";
import Root from './components/Root';
import Tests from './components/Tests';
import ThemeProvider from './theme';
import SimpleLayout from './layouts/simple';
import App from './components/App';
import { Provider } from 'react-redux';
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import TestList from './TestList';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { element: <Navigate to="/app" />, index: true },
      { path: "app", element: <App /> },
      { path: "tests", element: <Tests /> },
      { path: "questions", element: <Questions /> },
      { path: "testList", element: <TestList />}
    ]
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
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider>
          <RouterProvider router={router} />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
