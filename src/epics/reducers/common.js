const initState = {
  isCollapse: false,
  notification: [],
  messages: [],
  orders: [
    {
      id: "123",
      name: "Commission",
    },
  ],
};

export default (state = initState, action) => {
  switch (action.type) {
    case "SET_COLLAPSE":
      return {
        ...state,
        isCollapse: action.payload.isCollapse,
      };
    case "SET_MESSAGE":
      return {
        ...state,
        messages: action.payload.messages,
      };
    case "SET_NOTIFICATION":
      return {
        ...state,
        notification: action.payload.notification,
      };
    case "SET_CART":
      return {
        ...state,
        orders: [...state.orders, action.payload.orders],
      };
    default:
      return state;
  }
};
