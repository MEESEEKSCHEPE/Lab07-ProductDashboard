import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function ProductDetails({ addToCart }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const products = [
    {
      id: "1",
      name: "Control PS5",
      description:
        "El control inalámbrico DualSense para consolas PS5 trae una respuesta háptica inmersiva, gatillos adaptativos dinámicos y un micrófono, todo integrado en un diseño icónico.",
      image:
        "https://www.tecnofacil.com.gt/media/catalog/product/cache/0a3c9f56440fe010e3e9b5a77fcf2268/p/s/ps5dualgrycamo_fotograf_a_principal_.png",
    },
    {
      id: "2",
      name: "Monitor Gaming",
      description:
        "Monitor ultrapanorámico de 34 pulgadas con resolución WQHD (3440x1440), tasa de refresco de 180 Hz y tiempo de respuesta de 0.5 ms. Incorpora tecnologías como Stark ShadowBoost y Ambiglow para una experiencia inmersiva",
      image:
        "https://megacomputadoras.com.gt/wp-content/uploads/2024/11/LG27GQ40WB_1.jpg",
    },
    {
      id: "3",
      name: "Audifonos Gaming",
      description:
        "Auriculares inalámbricos que incorporan tecnología háptica para una experiencia de audio envolvente. Cuentan con iluminación RGB Chroma™ y sonido envolvente 7.1 para una mayor inmersión en el juego.",
      image:
        "https://assets2.razerzone.com/images/pnx.assets/eacc83c0643ed2da8c9e98968f8aa215/headset-landingpg-500x500-barracuda-x-chroma.webp",
    },
  ];

  const product = products.find((prod) => prod.id === id);

  if (!product) {
    return <div>Producto no encontrado.</div>;
  }

  const [notification, setNotification] = useState("");

  const goBack = () => {
    navigate(-1);
  };

  const buttonStyle = {
    backgroundColor: "red",
    color: "white",
    border: "none",
    padding: "10px 20px",
    fontSize: "16px",
    fontWeight: "bold",
    borderRadius: "5px",
    cursor: "pointer",
    margin: "10px",
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    setNotification(`${product.name} ha sido añadido al carrito!`);
    setTimeout(() => {
      setNotification("");
    }, 3000);
  };

  return (
    <div>
      <h1>{product.name}</h1>
      <img
        src={product.image}
        alt={product.name}
        style={{ width: "300px", height: "auto", marginBottom: "20px" }}
      />
      <p>{product.description}</p>
      <button onClick={() => handleAddToCart(product)} style={buttonStyle}>
        Añadir al carrito
      </button>
      <button onClick={goBack} style={buttonStyle}>
        Volver
      </button>
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

export default ProductDetails;
