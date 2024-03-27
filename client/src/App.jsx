import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { AdminDashboard } from "./pages/AdminDashboard";
import { BusinessOwnerDashboard } from "./pages/BusinessOwnerDashboard";
import { CategoryList } from "./pages/CategoryList";
import { BusinessPost } from "./pages/BusinessPost";

import { HomePage } from "./pages/HomePage";
import { UserDashboard } from "./pages/UserDashboard";
import { HomeLayout } from "./pages/HomeLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
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
