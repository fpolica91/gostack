import React from 'react';
import { Container, ProductTable, Total } from './styles';
import { bindActionCreators } from 'redux';
import * as CartActions from '../../store/modules/cart/actions';
import { connect } from 'react-redux';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete
} from 'react-icons/md';

const Cart = ({ cart, dispatch, removeFromCart }) => {
  function handleDelete(product) {
    removeFromCart(product);
    // dispatch({
    //   type: 'REMOVE_FROM_CART',
    //   product
    // });
  }

  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>Product</th>
            <th>Qty</th>
            <th>Subtotal</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {cart.map(prod => (
            <tr key={prod.id}>
              <td>
                <img src={prod.image} alt="shoes" />
              </td>
              <td>
                <strong>{prod.title}</strong>
                <span>{prod.formatedPrice}</span>
              </td>
              <td>
                <div>
                  <button type="button">
                    <MdRemoveCircleOutline size={20} color="#999" />
                  </button>
                  <input type="number" readOnly value={prod.amount} />
                  <button type="button">
                    <MdAddCircleOutline size={20} color="#7150c1" />
                  </button>
                </div>
              </td>
              <td>
                <strong>$20</strong>
              </td>

              <td>
                <button type="button" onClick={() => handleDelete(prod)}>
                  <MdDelete size={20} color="#7150c1" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>
      <footer>
        <button type="button">Check Out</button>
        <Total>
          <span>Total</span>
          <strong>$20</strong>
        </Total>
      </footer>
    </Container>
  );
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

const mapStateToProps = state => ({
  cart: state.cart
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
