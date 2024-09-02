export function fetchAllRestaurants() {
  return new Promise(async (resolve) => {
    try {
      const response = await fetch("http://localhost:8080/restaurants");
      const data = await response.json();
      resolve({ data });
    } catch (error) {
      console.error("Error fetching restaurants:", error);
      resolve({ error: "Failed to fetch restaurants" });
    }
  });
}

export function updateRestaurant(update) {
  return new Promise(async (resolve) => {
    try {
      const response = await fetch(
        `http://localhost:8080/restaurants/${update.id}`, // Corrected the endpoint
        {
          method: "PATCH",
          body: JSON.stringify(update),
          headers: { "Content-Type": "application/json" },
        }
      );
      const data = await response.json();
      resolve({ data });
    } catch (error) {
      console.error("Error updating restaurant:", error);
      resolve({ error: "Failed to update restaurant" });
    }
  });
}

export function addRestaurant(newRestaurant) {
  return new Promise(async (resolve) => {
    try {
      const response = await fetch("http://localhost:8080/restaurants", {
        method: "POST",
        body: JSON.stringify(newRestaurant),
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();
      resolve({ data });
    } catch (error) {
      console.error("Error adding restaurant:", error);
      resolve({ error: "Failed to add restaurant" });
    }
  });
}

export function fetchRestaurantById(id) {
  return new Promise(async (resolve) => {
    try {
      const response = await fetch(`http://localhost:8080/restaurants/${id}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      resolve({ data });
    } catch (error) {
      console.error("Error fetching restaurant by ID:", error);
      resolve({ error: "Failed to fetch restaurant" });
    }
  });
}
