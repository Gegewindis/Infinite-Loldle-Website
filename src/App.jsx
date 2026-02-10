import Home from "./pages/home.jsx"
import NotFoundPage from "./pages/notFoundPage.jsx"
import Classic from "./pages/classic.jsx"

import { createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter([
  {
    children: [
      { path: "/infinite-loldle/", element: <Home /> },
      { path: "/infinite-loldle/classic", element: <Classic /> },
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
