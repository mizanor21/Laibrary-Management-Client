import CseBooks from "../Components/OtherPages/EngineeringBooks/CseBooks/CseBooks";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layouts/Main");
const { default: Home } = require("../Components/HomePages/Home");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/cse-books",
        element: <CseBooks></CseBooks>,
        loader: () => fetch("http://localhost:5000/cse-books"),
      },
    ],
  },
]);

export default router;
