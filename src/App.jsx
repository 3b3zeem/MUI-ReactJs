import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import LayOut from "./components/LayOut/LayOut";
import NotFound from "./components/Not Found/NotFound";
import "./App.css";
// import Products from "./components/Products/Products";
// import ProductID from "./components/ProductID/ProductID";
// import Login from "./components/Login/Login";
// import Register from "./components/Register/Register";

function App() {
  const Home = lazy(() => import("./components/Products/Products.jsx"));
  const ProductID = lazy(() => import("./components/ProductID/ProductID.jsx"));
  const Login = lazy(() => import("./components/Login/Login.jsx"));
  const Register = lazy(() => import("./components/Register/Register.jsx"));

  const routes = createBrowserRouter([
    {
      path: "",
      element: <LayOut />,
      children: [
        {
          path: "",
          element: (
            <Suspense>
              <Home />
            </Suspense>
          ),
        },
        {
          path: "product/:id",
          element: (
            <Suspense>
              <ProductID />
            </Suspense>
          ),
        },
        {
          path: "login",
          element: (
            <Suspense>
              <Login />
            </Suspense>
          ),
        },
        {
          path: "register",
          element: (
            <Suspense>
              <Register />
            </Suspense>
          ),
        },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;
