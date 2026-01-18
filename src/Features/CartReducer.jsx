const CartReducer = (state, action) => {
  switch (action.type) {

    case "Add": {
      const existing = state.find(item => item.id === action.product.id);

      if (existing) {
        if (existing.quantity >= 10) return state;

        return state.map(item =>
          item.id === action.product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...state, { ...action.product, quantity: 1 }];
    }

    case "Increase":
      return state.map(item =>
        item.id === action.id && item.quantity < 10
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

    case "Decrease":
      return state
        .map(item =>
          item.id === action.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0);

    case "Remove":
      return state.filter(item => item.id !== action.id);

    default:
      return state;
  }
};

export default CartReducer;
