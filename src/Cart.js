import React from "react";

function Cart({ cart, removeFromCart, increaseQuantity, decreaseQuantity }) {
  return (
    <div>
      <h1>Carrito</h1>
      {cart.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <ul>
          {cart.map((product) => (
            <li key={product.id} style={{ marginBottom: "10px" }}>
              <div>
                <h3>{product.name}</h3>
                <p>Cantidad: {product.quantity}</p>
                <button onClick={() => increaseQuantity(product.id)}>
                  Agregar más
                </button>
                <button onClick={() => decreaseQuantity(product.id)}>
                  Quitar uno
                </button>
                <button onClick={() => removeFromCart(product.id)}>
                  Eliminar
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
