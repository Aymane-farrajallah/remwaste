import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TargetPage from '../pages/targetPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      { index: true, element: <TargetPage /> },
    
    ],
  },
]);

const AppRouter = () => <RouterProvider router={router} />;
export default AppRouter;