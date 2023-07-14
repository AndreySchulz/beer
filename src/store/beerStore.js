import { create } from "zustand";
import axios from "axios";

axios.defaults.baseURL = "https://api.punkapi.com/v2/";

export const useBeerStore = create((set) => ({
  listBeer: [],
  selectedBeer: [],

  fetchPerPege: async (page) => {
    const response = await axios(`beers?page=${page}`);

    set({ listBeer: response.data });
  },
  addSelected: (id) =>
    set((state) => ({
      selectedBeer: !state.selectedBeer.includes(id)
        ? [...state.selectedBeer, id]
        : state.selectedBeer.filter((value) => value !== id),
    })),
  clearSelected: () => set({ selectedBeer: [] }),

  deleteById: () =>
    set((state) => ({
      listBeer: state.listBeer.filter(
        ({ id }) => !state.selectedBeer.includes(id)
      ),
    })),
}));
