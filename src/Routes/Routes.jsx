import BorrowBooks from "../Components/OtherPages/BorrowBooks/BorrowBooks";
import CseBooks from "../Components/OtherPages/EngineeringBooks/CseBooks/CseBooks";
import EeeBooks from "../Components/OtherPages/EngineeringBooks/EeeBooks/EeeBooks";
import EnglishBooks from "../Components/OtherPages/GeneralBooks/EnglishBooks/EnglishBooks";
import Login from "../Components/OtherPages/Login/Login";
import Signup from "../Components/OtherPages/Login/Signup";

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
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/cse-books",
        element: <CseBooks></CseBooks>,
        loader: () => fetch("http://localhost:5000/cse-books"),
      },
      {
        path: "/eee-books",
        element: <EeeBooks></EeeBooks>,
        loader: () => fetch("http://localhost:5000/eee-books"),
      },
      {
        path: "/english-books",
        element: <EnglishBooks></EnglishBooks>,
        loader: () => fetch("http://localhost:5000/english-books"),
      },
      {
        path: "/borrow-books",
        element: <BorrowBooks></BorrowBooks>,
        loader: () => fetch("http://localhost:5000/borrow-books"),
      },
    ],
  },
]);

export default router;
