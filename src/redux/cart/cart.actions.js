export const cartActionTypes = {
  TOGGLE_CART_DROPDOWN: "TOGGLE_CART_DROPDOWN",
  ADD_ITEM: "ADD_ITEM"
};

export const toggleCartDropdown = () => ({
  type: cartActionTypes.TOGGLE_CART_DROPDOWN
});

export const addItem = item => ({
  type: cartActionTypes.ADD_ITEM,
  payload: item
});
