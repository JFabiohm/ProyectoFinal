export async function getProductos() {
    try {
      const response = await fetch("http://localhost:3001/cartas");
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error getting products:', error);
      throw error;
    }
  }
  