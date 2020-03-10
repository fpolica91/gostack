import produce from 'immer';

export default function cart(state = [], action) {
  switch (action.type) {
    case '@cart/ADD_TO_CART':
      return produce(state, draft => {
        const inCart = state.findIndex(item => item.id === action.product.id);
        if (inCart >= 0) {
          draft[inCart].amount += 1;
        } else {
          draft.push({
            ...action.product,
            amount: 1,
          });
        }
      });
    case '@cart/UPDATE_CART':
      return produce(state, draft => {
        const inCart = state.findIndex(item => item.id === action.product.id);
        if (inCart >= 0) {
          if (draft[inCart].amount <= 0) {
            return;
          }

          draft[inCart].amount = action.amount;
        }
      });

    case '@cart/REMOVE_ITEM':
      return produce(state, draft => {
        const inCart = state.findIndex(item => item.id === action.id);
        if (inCart >= 0) {
          draft.splice(inCart, 1);
        }
      });

    //   return [...state, action.product];
    default:
      return [...state];
  }
}
