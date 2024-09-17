async function postProductos(product) { 
  try {
    const response = await fetch("http://localhost:3001/cartas", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product), 
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    console.log("Producto añadido al carrito");
    return data;
  } catch (error) {
    console.error("Error adding to cart:", error);
    throw error;
  }
}

export { postProductos };
