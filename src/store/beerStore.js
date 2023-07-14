import { create } from "zustand";
import axios from "axios";

axios.defaults.baseURL = "https://api.punkapi.com/v2/";

export const useBeerStore = create((set) => ({
  listBear: [],
  fetchPerPege: async (page) => {
    const response = await axios(`beers?page=${page}`);

    set({ listBear: response.data });
  },
}));
