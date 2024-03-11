import { createBrowserRouter } from "react-router-dom";
import Detail from "../components/pages/Detail";
import Home from "../components/pages/Home";
import App from "../App";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/:id",
        element: <Detail />,
      },
    ],
  },
]);

export default Router;
