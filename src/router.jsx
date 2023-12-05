import { createBrowserRouter } from "react-router-dom";
import { ClientLayout } from "./modules/layouts/client-layout";
import { HomePage } from "./pages/home";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <ClientLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
]);
