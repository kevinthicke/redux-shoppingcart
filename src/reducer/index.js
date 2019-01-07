export const initialState = {
    cart: []
}
  
export const reducer = (state, action) => {
    if(action.type==='ADD_TO_CART') return ({ cart: state.cart.concat(action.product)});
    else return state;
}