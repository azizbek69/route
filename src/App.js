import './App.css';
import { Fragment } from 'react';
// import "./App.css"
import Navigation from './components/Navigation';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Posts from './pages/Posts';
import About from "./pages/About"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "posts",
      element: <Posts />
    },
    {
      path: "about",
      element: <About />
    }
  ], {
    basename: "/",
    future: {
      v7_normalizeFormMethod: true,
    },
  })

  return (
    <Fragment>
      <Navigation />
      <RouterProvider router={router} />
    </Fragment>
  );
}

export default App;
