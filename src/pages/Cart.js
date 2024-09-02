import React, { useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { IoIosAdd } from "react-icons/io";
import { fetchCartByIdAsync, selectCart } from "../features/Cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectUserInfo } from "../features/user/userSlice";

const Cart = ({ isCartOpen, toggleCart }) => {
  const cartItems = [
    { id: 1, name: "Fiery Jalapeno Pizza", price: 20 },
    { id: 2, name: "Margherita Pizza", price: 15 },
  ];
  const dispatch = useDispatch();
  const user = useSelector(selectUserInfo);
  const cart = useSelector(selectCart);
  useEffect(() => {
    if (user && user.user.id) {
      dispatch(fetchCartByIdAsync(user.user.id));
    }
  }, [dispatch, user]);

  let total = 0;

  if (cart && cart.items) {
    total = cart.items.reduce((acc, item) => {
      // Convert itemTotal to a number if it's a string
      const itemTotal = Number(item.itemTotal) || 0;
      return acc + itemTotal;
    }, 0);
  }
  return (
    <>
      {isCartOpen && (
        <div className="fixed top-0 right-0 h-full w-1/3 bg-white shadow-lg p-6 z-40 animate-slide-in-right">
          <div className="flex items-center">
            <IoMdClose
              onClick={toggleCart}
              className="h-8 w-8 bg-gray-100 hover:bg-gray-300 rounded-full p-2 text-black font-bold"
            />
            <p className="ml-4 font-bold text-xl">My Cart</p>
          </div>

          <div className="flex flex-col space-y-4 mt-10 ">
            {cart &&
              cart.items &&
              cart.items.map((item) => (
                <div>
                  <div
                    key={item.id}
                    className="flex justify-between items-center"
                  >
                    <div className="flex items-center gap-x-2">
                      <img
                        src="https://www.yum.com/wps/wcm/connect/yumbrands/77ac5d27-1357-4792-9953-54b11f5ae7dd/yum-com-24-product-PH.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_4OK424423PQ520667RKLCR3157-77ac5d27-1357-4792-9953-54b11f5ae7dd-oXSxcXb"
                        alt="Profile"
                        className="w-7 h-7 rounded-full object-cover"
                      />
                      <span>{item.name}</span>
                    </div>
                    <span>${item.itemPrice}</span>
                  </div>
                  <hr className="mt-2" />
                </div>
              ))}
          </div>

          <div className="mt-5 flex items-center justify-between">
            <span className="text-lg font-bold">Total:</span>
            <span className="text-lg font-bold">${total}</span>
          </div>
          <hr className="mt-2" />
          <div className="flex justify-center items-center mt-5">
            <button className="bg-gray-100 hover:bg-gray-300 text-black mt-4 py-2 px-4 rounded-lg">
              Order Now
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
