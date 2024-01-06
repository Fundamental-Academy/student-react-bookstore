import { createBrowserRouter } from "react-router-dom";

// Layout
import { ClientLayout } from "./modules/layouts/client-layout";
import { AdminLayout } from "./modules/layouts/admin-layout";

// Client Pages
import { HomePage } from "./pages/client/home";
import PageBookDetail from "./pages/client/book-detail";

// Admin Book Pages
import PageAdminBookList from "./pages/admin/book/list";
import PageAdminBookCreate from "./pages/admin/book/create";
import PageAdminBookEdit from "./pages/admin/book/edit";
import PageAdminBookDetail from "./pages/admin/book/detail";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <ClientLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "book/:id",
        element: <PageBookDetail />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <PageAdminBookList />,
      },
      {
        path: "create",
        element: <PageAdminBookCreate />,
      },
      {
        path: ":id/edit",
        element: <PageAdminBookEdit />,
      },
      {
        path: ":id/detail",
        element: <PageAdminBookDetail />,
      },
    ],
  },
]);
