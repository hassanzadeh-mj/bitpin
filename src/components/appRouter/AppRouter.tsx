import { lazy, type FC } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import TaskPage from "../pages/task2";
import Task1 from "../pages/task1";
import Task2 from "../pages/task2";

const ErrorPage = lazy(() => import("../pages/error"));
const HomePage = lazy(() => import("../pages/home"));
const router = createBrowserRouter([
  {
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage/>
      },
      {
        path :'/task' ,
        element: <Task1 />
      } ,
      {
        path : '/task/:Id' ,
        element: <Task2/>
      }
    ]
  }
]);

const AppRouterProvider: FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRouterProvider;
