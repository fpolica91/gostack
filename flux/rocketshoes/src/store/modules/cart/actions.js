export function removeFromCart(product) {
  return {
    type: 'REMOVE_FROM_CART',
    product
  };
}

export function addToCart(product) {
  return {
    type: 'ADD_TO_CART',
    product
  };
}

export function updateAmount(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT',
    id,
    amount
  };
}
