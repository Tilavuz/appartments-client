import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Layouts
import RootLayout from "./layouts/root-layout";

// Pages
import Home from "./pages/home/home";
import Profile from "./pages/profile/profile";
import Search from "./pages/search/search";
import Auth from "./pages/auth/auth";
import ProfileLayout from "./layouts/profile-layout";
import PrivateRoute from "./private/private-route";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/search/:region",
          element: <Search />,
        },
      ],
    },
    {
      path: "/profile",
      element: (
        <PrivateRoute>
          <ProfileLayout />
        </PrivateRoute>
      ),
      errorElement: <p>Page not found</p>,
      children: [
        {
          index: true,
          element: <Profile />,
        },
      ],
    },
    {
      path: "/auth",
      element: <Auth />,
    },
  ]);

  return <RouterProvider router={router} />;
}
