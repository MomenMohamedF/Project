import { createBrowserRouter } from "react-router-dom";
import { About, Home, Dashboard } from "../pages";
import { Suspense } from "react";
import Layout from "../pages/layout";
import Shop from "../pages/Shop/Shop";
import Contact from "../pages/Contact";
import Login from "@/pages/login";
import ProdectRoute from "@/components/common/prodectRoute";
import NotFound from "@/pages/NotFound";
import ErrorBoundry from "@/components/common/ErrorBoundry";
import MainShop from "@/pages/Shop/mainShop";

export const router = createBrowserRouter([
  {
    //Ecommerce
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <ErrorBoundry>
          <Suspense fallback={<div>Loading...</div>}>
            <Home />
          </Suspense>
          </ErrorBoundry>
        ),
      },
      {
        path: "shop",
        element: (
          <ErrorBoundry>
            <Suspense fallback={<div>Loading...</div>}>
              <MainShop />
            </Suspense>
          </ErrorBoundry>
        ),
      },
      {
        path: "shop/:category",
        element: (
          <ErrorBoundry>
          <Suspense fallback={<div>Loading...</div>}>
            <Shop />
          </Suspense>
          </ErrorBoundry>
        ),
      },
      {   
        path: "about",
        element: (
          <ErrorBoundry>
          <Suspense fallback={<div>Loading...</div>}>
            <About />
          </Suspense>
          </ErrorBoundry>
        ),
      },
      {
        path: "contact",
        element: (
          <ErrorBoundry>
          <Suspense fallback={<div>Loading...</div>}>
            <Contact />
          </Suspense>
          </ErrorBoundry>
        ),
      },
      {
        path: "login",
        element: (
          <ErrorBoundry>
          <ProdectRoute auth>
          <Suspense fallback={<div>Loading...</div>}>
            <Login />
          </Suspense>
          </ProdectRoute>
          </ErrorBoundry>
        ),
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <ErrorBoundry>
      {/* <ProdectRoute> */}
      <Suspense fallback={<div>Loading...</div>}>
        <Dashboard />
      </Suspense>
      {/* </ProdectRoute> */}
      </ErrorBoundry>
    ),
  },
  {
    path: "*",
    element: (
      <ErrorBoundry>
      <Suspense fallback={<div>Loading...</div>}>
        <NotFound />
      </Suspense>
      </ErrorBoundry>
    ),
  },
]);
