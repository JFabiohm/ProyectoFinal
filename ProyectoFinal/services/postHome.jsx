async function postCarrito(product) {
  try {
    const response = await fetch("http://localhost:3001/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });

    const data = await response.json();
    console.log("Producto añadido al carrito");
    return data;
  } catch (error) {
    console.error("Error adding to cart:", error);
    throw error;
  }
}

export { postCarrito };
