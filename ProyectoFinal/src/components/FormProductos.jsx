import React, { useState } from "react";
import { Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/Productos.css";
import { postProductos } from '../../services/postProductos'; 
import { encode } from 'base64-arraybuffer';

function FormProductos() {
  const [titulo, settitulo] = useState("");
  const [descripcion, setdescripcion] = useState("");
  const [imgLink, setimgLink] = useState("");
  const [precio, setprecio] = useState(""); 
  const [product, setProduct] = useState(null);

  const handleSaveClick = async () => {
    if (!titulo || !descripcion || !imgLink || !precio) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    const newProduct = {
      titulo,
      descripcion,
      imgLink,
      precio, 
    };

    try {
      const savedProduct = await postProductos(newProduct);
      setProduct(savedProduct);
      settitulo("");
      setdescripcion("");
      setimgLink("");
      setprecio(""); 
      console.log("Producto guardado exitosamente");
    } catch (error) {
      console.error("Error al guardar el producto:", error);
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = encode(reader.result);
        setimgLink(base64String); // Actualiza el estado con el link base64
      };
      reader.readAsArrayBuffer(file);
    }
  };

  return (
    <div className="container">
      <div className="form_area">
        <p className="title">Agregar Productos</p>
        <form>
          <div className="form_group">
            <label className="sub_title" htmlFor="titulo">
              Titulo
            </label>
            <input
              placeholder="Titulo"
              className="form_style"
              type="text"
              id="titulo"
              value={titulo}
              onChange={(e) => settitulo(e.target.value)}
            />
          </div>
          <div className="form_group">
            <label className="sub_title" htmlFor="descripcion">
              Descripcion
            </label>
            <input
              placeholder="Describe la imagen"
              className="form_style"
              type="text"
              id="descripcion"
              value={descripcion}
              onChange={(e) => setdescripcion(e.target.value)}
            />
          </div>
          <div className="form_group">
            <label className="sub_title" htmlFor="imgLink">
              Link de la imagen
            </label>
            <input
              placeholder="Link"
              className="form_style"
              type="text"
              id="imgLink"
              value={imgLink}
              onChange={(e) => setimgLink(e.target.value)}
            />
          </div>
          <div className="form_group">
            <label className="sub_title" htmlFor="fileInput">
              Subir Imagen
            </label>
            <input
              type="file"
              id="fileInput"
              accept="image/*"
              onChange={handleImageUpload}
            />
          </div>
          <div className="form_group">
            <label className="sub_title" htmlFor="precio">
              Precio
            </label>
            <input
              placeholder="$0"
              className="form_style"
              type="text"
              id="precio"
              value={precio}
              onChange={(e) => setprecio(e.target.value)}
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
            <Card.Img variant="top" src={product.imgLink} />
            <Card.Body>
              <Card.Title>{product.titulo}</Card.Title>
              <Card.Text>
                {product.descripcion}
              </Card.Text>
              <Card.Text>
                Precio: {product.precio}
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




