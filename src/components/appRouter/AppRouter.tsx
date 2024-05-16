import { lazy, type FC } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const ErrorPage = lazy(() => import("../pages/error"));
const HomePage = lazy(() => import("../pages/home"));
const router = createBrowserRouter([
  {
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />
      }
    ]
  }
]);

const AppRouterProvider: FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRouterProvider;
