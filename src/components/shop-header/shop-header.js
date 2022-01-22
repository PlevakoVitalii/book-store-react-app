import React from 'react';
import { connect } from 'react-redux';
import './shop-header.css';
import { Link } from 'react-router-dom';

const ShopHeader = ({ numItems, items }) => {

  const sumAllTotal = (items) => {
    let result = items.reduce((sum, item) => sum + item.total, 0)
    return result
  };

  const sumAllCount = (items) => {
    let result = items.reduce((sum, item) => sum + item.count, 0)
    return result
  };
  return (
    <header className="shop-header row">
      <Link to="/">
        <div className="logo text-dark">Book-store</div>
      </Link>
      <Link to="/cart">
        <div className="shopping-cart">
          <i className="cart-icon fa fa-shopping-cart" />
          {sumAllCount(items)} items ${sumAllTotal(items)}
        </div>
      </Link>
    </header>
  );
};


const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal } }) => {
  return {
    items: cartItems
  };
};

export default connect(mapStateToProps)(ShopHeader);

