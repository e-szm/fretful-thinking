import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import { QuizProvider } from "./features/quiz/QuizContext";
import { TimerProvider } from "./features/timer/TimerContext";

import AppLayout from "./layouts/AppLayout";
import GuitarDisplay from "./components/GuitarDisplay";

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
        element: (
          <QuizProvider>
            <TimerProvider>
              <GuitarDisplay />
            </TimerProvider>
          </QuizProvider>
        ),
      },
      {
        path: "*",
        element: (
          <Navigate to="/guitar/12/E-A-D-G-B-E?view=all" replace={true} />
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
