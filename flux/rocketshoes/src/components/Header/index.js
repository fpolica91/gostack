import React from 'react';
import { Container, Cart } from './styles';
import { MdShoppingBasket } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import logo from '../../assets/logo.svg';

const Header = ({ inCart }) => {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <Cart to="/cart">
        <div>
          <strong>Cart</strong>
          <span>{inCart} items</span>
        </div>
        <MdShoppingBasket size={36} color="#FFF" />
      </Cart>
    </Container>
  );
};

export default connect(state => ({
  inCart: state.cart.length
}))(Header);
