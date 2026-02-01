import { createBrowserRouter } from "react-router-dom";
import { About, Dashboard } from "../pages";
import Home from "../pages/Home/Home";
import { Suspense } from "react";
import Layout from "../pages/layout";
import Shop from "../pages/Shop/Shop";
import Contact from "../pages/Contact";
import Login from "@/pages/login";
import NotFound from "@/pages/NotFound";
import ErrorBoundry from "@/components/common/ErrorBoundry";
import MainShop from "@/pages/Shop/mainShop";
import ProdectRoute from "@/components/common/ProdectRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <ErrorBoundry>
            <Home />
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
