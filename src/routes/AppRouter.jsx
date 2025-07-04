import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from '../pages/LandingPage.jsx';
import OrderPage from '../pages/targetPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/order",
    element: <OrderPage />,
  },
]);

const AppRouter = () => <RouterProvider router={router} />;
export default AppRouter;