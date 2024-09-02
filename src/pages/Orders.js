import React from "react";
import Navbar from "./Navbar";

const orders = [
  {
    items: [
      {
        name: "Fiery Jalapeno Pizza",
        price: 200,
        description:
          "Spiciest veg pizza with jalapeno & red paprika toppings and a new spicy peri peri sauce.",
        image:
          "https://www.yum.com/wps/wcm/connect/yumbrands/77ac5d27-1357-4792-9953-54b11f5ae7dd/yum-com-24-product-PH.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_4OK424423PQ520667RKLCR3157-77ac5d27-1357-4792-9953-54b11f5ae7dd-oXSxcXb",
      },
      {
        name: "Margherita Pizza",
        price: 150,
        description:
          "Classic cheese and tomato pizza with fresh basil and extra virgin olive oil.",
        image:
          "https://www.yum.com/wps/wcm/connect/yumbrands/77ac5d27-1357-4792-9953-54b11f5ae7dd/yum-com-24-product-PH.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_4OK424423PQ520667RKLCR3157-77ac5d27-1357-4792-9953-54b11f5ae7dd-oXSxcXb",
      },
    ],
    id: 1,
    total: 350,
  },
  {
    items: [
      {
        name: "BBQ Chicken Pizza",
        price: 250,
        description:
          "Smoky BBQ sauce with grilled chicken, onions, and mozzarella cheese.",
        image:
          "https://www.yum.com/wps/wcm/connect/yumbrands/77ac5d27-1357-4792-9953-54b11f5ae7dd/yum-com-24-product-PH.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_4OK424423PQ520667RKLCR3157-77ac5d27-1357-4792-9953-54b11f5ae7dd-oXSxcXb",
      },
      {
        name: "Pepperoni Pizza",
        price: 300,
        description:
          "Loaded with pepperoni, mozzarella cheese, and a flavorful tomato base.",
        image:
          "https://www.yum.com/wps/wcm/connect/yumbrands/77ac5d27-1357-4792-9953-54b11f5ae7dd/yum-com-24-product-PH.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_4OK424423PQ520667RKLCR3157-77ac5d27-1357-4792-9953-54b11f5ae7dd-oXSxcXb",
      },
    ],
    id: 2,
    total: 550,
  },
  {
    items: [
      {
        name: "Veggie Supreme Pizza",
        price: 180,
        description:
          "Packed with fresh vegetables, including bell peppers, onions, and olives on a cheesy base.",
        image:
          "https://www.yum.com/wps/wcm/connect/yumbrands/77ac5d27-1357-4792-9953-54b11f5ae7dd/yum-com-24-product-PH.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_4OK424423PQ520667RKLCR3157-77ac5d27-1357-4792-9953-54b11f5ae7dd-oXSxcXb",
      },
      {
        name: "Hawaiian Pizza",
        price: 220,
        description:
          "A sweet and savory pizza topped with pineapple, ham, and mozzarella cheese.",
        image:
          "https://www.yum.com/wps/wcm/connect/yumbrands/77ac5d27-1357-4792-9953-54b11f5ae7dd/yum-com-24-product-PH.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_4OK424423PQ520667RKLCR3157-77ac5d27-1357-4792-9953-54b11f5ae7dd-oXSxcXb",
      },
      {
        name: "Cheese Garlic Bread",
        price: 120,
        description: "Toasted garlic bread topped with melted cheese.",
        image:
          "https://www.yum.com/wps/wcm/connect/yumbrands/77ac5d27-1357-4792-9953-54b11f5ae7dd/yum-com-24-product-PH.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_4OK424423PQ520667RKLCR3157-77ac5d27-1357-4792-9953-54b11f5ae7dd-oXSxcXb",
      },
    ],
    id: 3,
    total: 520,
  },
];

function Orders() {
  return (
    <div>
      <Navbar />
      <div className="mx-28 mt-12">
        <p className="font-bold text-3xl mb-6">My Orders</p>
        <div>
          {orders &&
            orders.map((order, orderIndex) => (
              <div
                key={orderIndex}
                className="bg-gray-100 p-8 rounded-md mb-10"
              >
                <div>
                  <div className="mb-3 flex items-center gap-x-2 text-xl ">
                    <p className="font-semibold">Order</p>
                    <p>#{order.id}</p>
                  </div>
                  <hr className="py-4" />
                </div>
                {order.items &&
                  order.items.map((item, itemIndex) => (
                    <div>
                      <div className="flex mb-6" key={itemIndex}>
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-[70px] h-[70px] object-cover rounded-md"
                        />
                        <div className="ml-6">
                          <p className="font-bold text-lg">{item.name}</p>
                          <p className="mt-2 text-sm">{item.description}</p>
                        </div>
                        <div className="ml-auto">
                          <p className="mt-2 text-sm">Price: ${item.price}</p>
                        </div>
                      </div>
                      <hr className="my-5" />
                    </div>
                  ))}
                <p className="font-bold text-right mt-4">
                  Total: ${order.total}
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Orders;
