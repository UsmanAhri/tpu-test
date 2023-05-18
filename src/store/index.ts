import { createStore } from "vuex";

export type Character = {
  birth_year: string;
  created: string;
  edited: string;
  eye_color: string;
  films: Array<string>;
  gender: string;
  hair_color: string;
  height: string | number;
  homeworld: string;
  mass: string | number;
  name: string;
  skin_color: string;
  species: Array<string>;
  starships: Array<string>;
  url: string;
  vehicles: Array<string>;
};

const store = createStore({
  state: {
    characters: null as Character[] | null,
    isLoading: false,
  },
  actions: {
    async getAllCharacters({ commit, state }) {
      try {
        state.isLoading = true;
        const response = await fetch("https://swapi.dev/api/people");
        const { results } = await response.json();
        commit("setAllCharacters", results);
      } catch (e) {
        console.error(e);
      } finally {
        state.isLoading = false;
      }
    },
  },
  mutations: {
    setAllCharacters(state, characters) {
      state.characters = characters;
    },
  },
});

export default store;
