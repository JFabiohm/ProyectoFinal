import React, { useState } from "react";
import { Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/Productos.css";
import { postProductos } from '../../services/postProductos'; 

function FormProductos() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageLink, setImageLink] = useState("");
  const [product, setProduct] = useState(null);

  const handleSaveClick = async () => {
    const newProduct = {
      title,
      description,
      imageLink,
    };

    try {
      const savedProduct = await postProductos(newProduct);
      setProduct(savedProduct); // Aquí se debería recibir el producto guardado
      setTitle("");
      setDescription("");
      setImageLink("");
      console.log("Producto guardado exitosamente");
    } catch (error) {
      console.error("Error al guardar el producto:", error);
    }
  };

  return (
    <div className="container">
      <div className="form_area">
        <p className="title">Agregar Productos</p>
        <form>
          <div className="form_group">
            <label className="sub_title" htmlFor="name">
              Titulo
            </label>
            <input
              placeholder="Titulo"
              className="form_style"
              type="text"
              id="name"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="form_group">
            <label className="sub_title" htmlFor="txt">
              Descripcion
            </label>
            <input
              placeholder="Describe la imagen"
              className="form_style"
              type="text"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="form_group">
            <label className="sub_title" htmlFor="link">
              Link de la imagen
            </label>
            <input
              placeholder="Link"
              className="form_style"
              type="text"
              id="link"
              value={imageLink}
              onChange={(e) => setImageLink(e.target.value)}
            />
          </div>
          <div>
            <Button
              className="btnP"
              onClick={(e) => {
                e.preventDefault();
                handleSaveClick();
              }}
            >
              Guardar
            </Button>
          </div>
        </form>
      </div>

      {product && (
        <div className="preview_area">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={product.imageLink} />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>
                {product.description}
              </Card.Text>
              <Button variant="primary">Ver más</Button>
            </Card.Body>
          </Card>
        </div>
      )}
    </div>
  );
}

export default FormProductos;


