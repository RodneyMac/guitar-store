import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  guitars: [
    {
      id: 1,
      title: "ESP LTD 1",
      guitarImg:
        "https://res.cloudinary.com/de1xrxlcz/image/upload/v1666398857/guitars/g7_gllkm5.png",
      model: "Flying V",
      price: 500,
    },
    {
      id: 2,
      title: "ESP LTD 2",
      guitarImg:
        "https://res.cloudinary.com/de1xrxlcz/image/upload/v1666398810/guitars/g3_a5dyyg.png",
      model: "Flying V",
      price: 500,
    },
    {
      id: 3,
      title: "ESP LTD 3",
      guitarImg:
        "https://res.cloudinary.com/de1xrxlcz/image/upload/v1666398830/guitars/g4_hgwg1t.png",
      model: "Les Paul",
      price: 500,
    },
    {
      id: 4,
      title: "ESP LTD 4",
      guitarImg:
        "https://res.cloudinary.com/de1xrxlcz/image/upload/v1666398872/guitars/g9_bqwiro.png",
      model: "Les Paul",
      price: 500,
    },
    {
      id: 5,
      title: "ESP LTD 5",
      guitarImg:
        "https://res.cloudinary.com/de1xrxlcz/image/upload/v1666398866/guitars/g8_x5uebd.png",
      model: "Stratocaster",
      price: 500,
    },
    {
      id: 6,
      title: "ESP LTD 6",
      guitarImg:
        "https://res.cloudinary.com/de1xrxlcz/image/upload/v1666398849/guitars/g6_oiizun.png",
      model: "Stratocaster",
      price: 500,
    },
    {
      id: 7,
      title: "ESP LTD 7",
      guitarImg:
        "https://res.cloudinary.com/de1xrxlcz/image/upload/v1666398838/guitars/g5_e5rocq.png",
      model: "Stratocaster",
      price: 500,
    },
    {
      id: 8,
      title: "ESP LTD 8",
      guitarImg:
        "https://res.cloudinary.com/de1xrxlcz/image/upload/v1666398799/guitars/g2_dddvtf.png",
      model: "Les Paul",
      price: 500,
    },
    {
      id: 9,
      title: "ESP LTD 9",
      guitarImg:
        "https://res.cloudinary.com/de1xrxlcz/image/upload/v1666398778/guitars/g1_onfxwh.png",
      model: "Explorer",
      price: 500,
    },
  ],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, actions) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === actions.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
      } else {
        const product = { ...actions.payload, cartQuantity: 1 };
        state.cartItems.push(product);
      }
    },

    removeFromCart(state, action) {
      const nextCartItem = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartItems = nextCartItem;
    },

    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
        state.cartItems = nextCartItems;
      }
    },

    clearCart(state, action) {
      state.cartItems = [];
    },

    getTotals(state, action) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },

    paidProducts(state, action) {
      state.cartItems = [];
      state.cartTotalQuantity = 0;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  decreaseCart,
  clearCart,
  getTotals,
  paidProducts,
} = cartSlice.actions;

export default cartSlice.reducer;
