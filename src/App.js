import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Gallary from "./Components/Gallary/Gallary";
import Contacts from "./Components/Contacts/Contacts";
import Products from "./Components/Products/Products";
import Layout from "./Components/Layout/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./Components/NotFound/NotFound";
import Web from "./Components/Gallary/Web/Web";
import Mobile from "./Components/Gallary/Mobile/Mobile";

const routers = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "About", element: <About /> },
      { path: "Contacts", element: <Contacts /> },
      {
        path: "Gallary",
        element: <Gallary />,
        children: [
          { path: "", element: <Web /> },
          { path: "Mobile", element: <Mobile /> },
        ],
      },
      { path: "Products", element: <Products /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
export default function App() {
  return (
    <>
      <RouterProvider router={routers}></RouterProvider>
    </>
  );
}
