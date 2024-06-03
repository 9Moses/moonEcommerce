import { createSelector, createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorites",
  initialState: {
    favoritesItemList: [],
  },
  reducers: {
    addToFavorites(state, action) {
      const newItem = action.payload;

      const existingItemIdex = state.favoritesItemList.findIndex(
        (item) => item.id === newItem.id
      );
      if (existingItemIdex !== -1) {
        state.favoritesItemList[existingItemIdex].quantity++;
      } else {
        state.favoritesItemList.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
          cover: newItem.images,
        });
      }
    },
  },

  removeFromFavorites(state, action) {
    const idToRemove = action.payload;

    state.favoritesItemList = state.favoritesItemList.filter(
      (item) => item.id !== idToRemove
    );
  },

  clearFavorites(state) {
    state.addToFavorites = [];
  },
});

export const favoriteAction = favoriteSlice.actions;

export const { clearFavorites } = favoriteSlice.actions;

export const selectTotalFavorites = createSelector(
  (state) => state.favorites.favoritesItemList,
  (favoritesItemList) => favoritesItemList.length
);

export default favoriteSlice;
