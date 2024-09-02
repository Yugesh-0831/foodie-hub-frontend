import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectUserInfo } from "../features/user/userSlice";
import { setLoggedInUser } from "../features/auth/authSlice";
import Cart from "./Cart"; // Import the Cart component
import { useEffect, useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import Sidebar from "./Sidebar";
import { fetchCartByIdAsync, selectCart } from "../features/Cart/cartSlice";

function Navbar() {
  const user = useSelector(selectUserInfo);
  const cart = useSelector(selectCart);

  const dispatch = useDispatch();

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    if (user && user.user.id) {
      dispatch(fetchCartByIdAsync(user.user.id));
    }
  }, [dispatch, user]);

  let quantity = 0;
  if (cart && cart.items) quantity = cart.items.length;

  return (
    <>
      {/* Overlay */}
      {(isCartOpen || isSidebarOpen) && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30"
          onClick={() => {
            setIsCartOpen(false);
            setIsSidebarOpen(false);
          }}
        />
      )}
      {/* Cart Component */}
      <Cart isCartOpen={isCartOpen} toggleCart={toggleCart} />

      {/* Sidebar Component */}
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <nav className="bg-white pl-2 pr-6">
        <div className="flex items-center justify-between p-6">
          <div className="flex items-center justify-between text-2xl">
            <IoMdMenu
              className="hover:bg-gray-100 rounded-full h-8 w-8 p-1"
              onClick={toggleSidebar}
            />
            <Link to="/">
              <div className="flex items-center">
                <div className="ml-3 self-center flex items-center">
                  <p>Foodie</p>
                  <p className="font-semibold ml-1">Hub</p>
                </div>
              </div>
            </Link>
          </div>
          <div>
            <div className="relative flex bg-gray-100 rounded-full hover:bg-gray-300 h-10 w-10 p-2 pl-3 pt-3">
              <IoCartOutline
                onClick={toggleCart}
                className="font-bold text-lg"
              />
              <p className="absolute top-[-4px] right-[-4px] text-xs bg-black text-white rounded-full h-5 w-5 flex items-center justify-center">
                {quantity}
              </p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
