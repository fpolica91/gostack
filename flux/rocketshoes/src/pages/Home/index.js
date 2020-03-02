import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ProductList } from './styles';
import { MdAddShoppingCart } from 'react-icons/md';
import api from '../../services/api';
import { price } from '../../util/format';
import * as CartActions from '../../store/modules/cart/actions';

const Home = props => {
  const [products, handleProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  async function loadProducts() {
    const response = await api.get('products');
    const data = response.data.map(product => ({
      ...product,
      formatedPrice: price(product.price)
    }));

    handleProducts(data);
  }

  async function handleAddProd(product) {
    props.addToCart(product);
    // props.dispatch({
    //   type: 'ADD_TO_CART',
    //   product
    // });
  }

  return (
    <ProductList>
      {products.map(product => (
        <li key={product.id}>
          <img src={product.image} alt="shoes" />
          <strong>{product.title}</strong>
          <span>{product.formatedPrice}</span>
          <button type="button" onClick={() => handleAddProd(product)}>
            <div>
              <MdAddShoppingCart size={16} color="#FFF" />
              <span>Add to Cart</span>
            </div>
          </button>
        </li>
      ))}
    </ProductList>
  );
};

// BINDS ACTIONS TO DISPATCH WITHOUT HAVING TO CALL DISPATCH
const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(null, mapDispatchToProps)(Home);
