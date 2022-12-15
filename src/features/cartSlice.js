import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    guitarImg:
      "https://res.cloudinary.com/de1xrxlcz/image/upload/v1666398857/guitars/g7_gllkm5.png",
    model: "Flying V",
    price: 500,
  },
  {
    id: 2,
    guitarImg:
      "https://res.cloudinary.com/de1xrxlcz/image/upload/v1666398810/guitars/g3_a5dyyg.png",
    model: "Flying V",
    price: 500,
  },
  {
    id: 3,
    guitarImg:
      "https://res.cloudinary.com/de1xrxlcz/image/upload/v1666398830/guitars/g4_hgwg1t.png",
    model: "Les Paul",
    price: 500,
  },
  {
    id: 4,
    guitarImg:
      "https://res.cloudinary.com/de1xrxlcz/image/upload/v1666398872/guitars/g9_bqwiro.png",
    model: "Les Paul",
    price: 500,
  },
  {
    id: 5,
    guitarImg:
      "https://res.cloudinary.com/de1xrxlcz/image/upload/v1666398866/guitars/g8_x5uebd.png",
    model: "Stratocaster",
    price: 500,
  },
  {
    id: 6,
    guitarImg:
      "https://res.cloudinary.com/de1xrxlcz/image/upload/v1666398849/guitars/g6_oiizun.png",
    model: "Stratocaster",
    price: 500,
  },
  {
    id: 7,
    guitarImg:
      "https://res.cloudinary.com/de1xrxlcz/image/upload/v1666398838/guitars/g5_e5rocq.png",
    model: "Stratocaster",
    price: 500,
  },
  {
    id: 8,
    guitarImg:
      "https://res.cloudinary.com/de1xrxlcz/image/upload/v1666398799/guitars/g2_dddvtf.png",
    model: "Les Paul",
    price: 500,
  },
  {
    id: 9,
    guitarImg:
      "https://res.cloudinary.com/de1xrxlcz/image/upload/v1666398778/guitars/g1_onfxwh.png",
    model: "Explorer",
    price: 500,
  },
];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});

export default cartSlice.reducer;
