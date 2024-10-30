import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import AppLayout from "./ui/AppLayout";
import GuitarDisplay from "./ui/GuitarDisplay";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/guitar",
        element: (
          <Navigate to="/guitar/12/E-A-D-G-B-E?view=all" replace={true} />
        ),
      },
      {
        path: "/guitar/:numFrets/:tuning",
        element: <GuitarDisplay />,
      },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router}>
      <AppLayout />
    </RouterProvider>
  );
}

export default App;
