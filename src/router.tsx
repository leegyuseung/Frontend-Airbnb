import { createBrowserRouter } from "react-router-dom";
import Root from "./components/Root";
import Home from "./routes/Home";
import NotFound from "./routes/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [{ path: "", element: <Home /> }],
    errorElement: <NotFound />,
  },
]);

export default router;
