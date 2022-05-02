import { LOGIN } from "../actions";
const initialState = {
  user: false,
};

export const loginReducer = (store = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN:
      return {
        ...store,
        user: payload,
      };
    default:
      return store;
  }
};