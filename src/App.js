import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./features/auth/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectLoggedInUser, setLoggedInUser } from "./features/auth/authSlice";
import { useEffect } from "react";
import { fetchLoggedInUserAsync } from "./features/user/userSlice";
import Protected from "./features/auth/Protected";
import ProtectedAdmin from "./features/auth/ProtectedAdmin";
import SignUp from "./features/auth/SignUp";
import Restaurants from "./pages/Restaurants";
import RestaurantDetails from "./pages/RestaurantDetails";
import Orders from "./pages/Orders";
import Profile from "./pages/Profile";
import { fetchCartById } from "./features/Cart/cartApi";
import { fetchCartByIdAsync } from "./features/Cart/cartSlice";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Restaurants></Restaurants>,
  },
  {
    path: "/restaurant/:id",
    element: <RestaurantDetails></RestaurantDetails>,
  },
  {
    path: "/my-orders",
    element: <Orders></Orders>,
  },
  {
    path: "/my-profile",
    element: <Profile></Profile>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
]);

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);

  useEffect(() => {
    if (user && user.user) {
      console.log("abhi user ye hai", user.user);
      dispatch(fetchLoggedInUserAsync(user.user.id));
      dispatch(fetchCartByIdAsync(user.user.id));
    }
  }, [dispatch, user]);

  return (
    <>
      <div className="App">
        <RouterProvider router={router} />
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
