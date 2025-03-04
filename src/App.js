import React, { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import ProductDetails from "./ProductDetails";
import Cart from "./Cart";

function App() {
  const [cart, setCart] = useState([]);

  // Función para agregar al carrito
  const addToCart = (product) => {
    const productExists = cart.find((item) => item.id === product.id);
    if (productExists) {
      // Si el producto ya está en el carrito, solo aumentamos la cantidad
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // Si el producto no está en el carrito, lo agregamos con cantidad 1
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Función para eliminar un producto del carrito
  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  // Función para incrementar la cantidad de un producto
  const increaseQuantity = (productId) => {
    setCart(
      cart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Función para decrementar la cantidad de un producto
  const decreaseQuantity = (productId) => {
    setCart(
      cart.map((item) =>
        item.id === productId
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item
      )
    );
  };

  return (
    <div style={styles.app}>
      <div style={styles.navbar}>
        <ul style={styles.navList}>
          <li style={styles.navItem}>
            <Link to="/" style={styles.navLink}>
              Home
            </Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/cart" style={styles.navLink}>
              Carrito
            </Link>
          </li>
        </ul>
      </div>

      <div style={styles.mainContent}>
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} />} />
          <Route
            path="/product/:id"
            element={<ProductDetails addToCart={addToCart} />}
          />
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                removeFromCart={removeFromCart}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

const styles = {
  app: {
    display: "flex",
    flexDirection: "column", 
  },
  navbar: {
    backgroundColor: "#FF0000", 
    padding: "10px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  },
  navList: {
    listStyleType: "none",
    display: "flex", 
    justifyContent: "center",
    margin: 0,
    padding: 0,
  },
  navItem: {
    margin: "0 20px", 
  },
  navLink: {
    textDecoration: "none", 
    color: "black", 
    fontSize: "18px", 
    fontWeight: "bold", 
  },
  mainContent: {
    padding: "20px",
    flexGrow: 1,
  },
};

export default App;
