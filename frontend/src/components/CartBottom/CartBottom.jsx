import React from "react";

const CartBottom = ({ getTotalCartAmount }) => {
  return (
    <div>
      <div className="cart-bttom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>{getTotalCartAmount()}$</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>{2}$</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total </b>
              <b>{getTotalCartAmount() + 2}$</b>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>

        {/* PROMO DIV */}

        <div className="cart-promocode">
          <div>
            <p>If you have promo code , Enter it here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="promo code" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
CartBottom.propTypes = {
  getTotalCartAmount: Object,
};
export default CartBottom;
