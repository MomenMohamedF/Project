import { createBrowserRouter } from "react-router-dom";
import { About, Home, Dashboard } from "../pages";
import { Suspense } from "react";
import Layout from "../pages/layout";
import Shop from "../pages/Shop/Shop";
import Contact from "../pages/Contact";
import Login from "@/pages/login";
import ProdectRoute from "@/components/common/prodectRoute";
import NotFound from "@/pages/NotFound";

export const router = createBrowserRouter([
  {
    //Ecommerce
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "shop/:category",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Shop />
          </Suspense>
        ),
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "contact",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "login",
        element: (
          <ProdectRoute auth>
          <Suspense fallback={<div>Loading...</div>}>
            <Login />
          </Suspense>
          </ProdectRoute>
        ),
      },
    ],
  },
  {
    path: "/Dashboard",
    element: (
      <ProdectRoute>
      <Suspense fallback={<div>Loading...</div>}>
        <Dashboard />
      </Suspense>
      </ProdectRoute>
    ),
  },
  {
    path: "*",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <NotFound />
      </Suspense>
    ),
  },
]);
