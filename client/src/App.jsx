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
  OwnerDashboard,
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
        path: "home",
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
      {
        path: "ownerDashboard",
        element: <OwnerDashboard />,
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
