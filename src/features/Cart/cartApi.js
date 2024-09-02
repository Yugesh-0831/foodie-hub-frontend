export async function addCartItem(userId, foodItemId, quantity) {
  try {
    const response = await fetch("http://localhost:8080/cart/add", {
      method: "POST",
      body: JSON.stringify({
        user_id: userId,
        food_item_id: foodItemId,
        quantity,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error adding item to cart:", error);
    throw error;
  }
}

export async function removeCartItem(userId, foodItemId) {
  try {
    const response = await fetch("http://localhost:8080/cart/remove-item", {
      method: "DELETE",
      body: JSON.stringify({ user_id: userId, food_item_id: foodItemId }),
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error removing item from cart:", error);
    throw error;
  }
}

export async function fetchCartById(userId) {
  try {
    const response = await fetch(`http://localhost:8080/cart/${userId}`);

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    console.log("cart ye to aayi", data);
    return data;
  } catch (error) {
    console.error("Error retrieving cart:", error);
    throw error;
  }
}
