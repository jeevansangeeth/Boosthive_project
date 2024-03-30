import { RouterProvider, createBrowserRouter } from "react-router-dom";

import {
  Login,
  Register,
  AdminDashboard,
  BusinessOwnerDashboard,
  CategoryList,
  BusinessPost,
  HomePage,
  UserDashboard,
  HomeLayout,
  LandingPage,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        index: "home",
        element: <HomePage />,
      },

      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "admindashboard",
        element: <AdminDashboard />,
      },
      {
        path: "categorylist",
        element: <CategoryList />,
      },
      {
        path: "businessownerdashboard",
        element: <BusinessOwnerDashboard />,
      },
      {
        path: "businesspost",
        element: <BusinessPost />,
      },
      {
        path: "userdashboard",
        element: <UserDashboard />,
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
