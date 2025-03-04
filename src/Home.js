import React, { useState } from "react";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Control PS5",
    description:
      "El control inalámbrico DualSense para consolas PS5 trae una respuesta háptica inmersiva, gatillos adaptativos dinámicos2 y un micrófono, todo integrado en un diseño icónico.",
  },
  { id: 2, name: "Monitor Gaming", description: "Descripción del producto 2" },
  {
    id: 3,
    name: "Audífonos Gaming",
    description: "Descripción del producto 2",
  },
];

const linkStyle = {
  textDecoration: "none",
  color: "black",
  fontSize: "18px",
  fontWeight: "bold",
};

const buttonStyle = {
  backgroundColor: "blue",
  color: "white",
  border: "none",
  padding: "10px 20px",
  fontSize: "12px",
  fontWeight: "bold",
  borderRadius: "5px",
  cursor: "pointer",
  margin: "10px",
};

function Home({ addToCart }) {
  const [notification, setNotification] = useState("");

  const handleAddToCart = (product) => {
    addToCart(product); 
    setNotification(`${product.name} ha sido añadido al carrito!`); 
    setTimeout(() => {
      setNotification(""); 
    }, 3000);
  };

  return (
    <div>
      <h1>Lista de Productos</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`} style={linkStyle}>
              {product.name}
            </Link>
            <button
              onClick={() => handleAddToCart(product)}
              style={buttonStyle}
            >
              Añadir al carrito
            </button>
          </li>
        ))}
      </ul>
      {notification && <div style={notificationStyle}>{notification}</div>}
    </div>
  );
}

const notificationStyle = {
  backgroundColor: "#4CAF50", 
  color: "white",
  padding: "10px",
  position: "fixed",
  bottom: "20px",
  left: "50%",
  transform: "translateX(-50%)",
  borderRadius: "5px",
  fontSize: "16px",
  zIndex: 1000,
};

export default Home;
