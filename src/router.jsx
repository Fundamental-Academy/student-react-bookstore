import { createBrowserRouter } from "react-router-dom";

// Layout
import { ClientLayout } from "./modules/layouts/client-layout";
import { AdminLayout } from "./modules/layouts/admin-layout";

// Home Page
import { HomePage } from "./pages/home";

// Book Pages
import PageBookList from "./pages/book/list";
import PageBookCreate from "./pages/book/create";
import PageBookEdit from "./pages/book/edit";
import PageBookDetail from "./pages/book/detail";

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
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <PageBookList />,
      },
      {
        path: "create",
        element: <PageBookCreate />,
      },
      {
        path: ":id/edit",
        element: <PageBookEdit />,
      },
      {
        path: ":id/detail",
        element: <PageBookDetail />,
      },
    ],
  },
]);
