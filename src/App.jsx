import Home from "./pages/home.jsx"
import NotFoundPage from "./pages/notFoundPage.jsx"
import Classic from "./pages/classic.jsx"
import Quote from "./pages/quote.jsx"
import Ability from "./pages/ability.jsx"
import Login from "./pages/login.jsx"

import { createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter([
  {
    children: [
      { path: "/infinite-loldle/", element: <Home /> },
      { path: "/infinite-loldle/classic", element: <Classic /> },
      { path: "/infinite-loldle/quote", element: <Quote /> },
      { path: "/infinite-loldle/ability", element: <Ability /> },
      { path: "/infinite-loldle/login", element: <Login /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },

]);
function App() {

  return(
    <>
    <RouterProvider router={router}/>
    </>
  );
}

export default App
