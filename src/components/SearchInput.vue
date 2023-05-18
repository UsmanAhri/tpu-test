<template>
  <div class="search-box">
    <input type="text" v-model="searchState.field" placeholder="Search..." />
    <div v-if="searchState.field && (searchState.isLoading || searchState.characters)" class="search-box__results">
      <p v-if="searchState.isLoading">Loading...</p>
      <div v-if="searchState.characters">
        <ul v-if="searchState.characters?.length">
          <li v-for="character in searchState.characters" :key="character.url">
            <router-link
                :to="{ name: 'peoples.show', params: { id: useGetCharacterID(character.url) } }"
                class="search-box__character"
            >
              <h5>{{ character.name }}</h5>
            </router-link>
          </li>
        </ul>
        <p v-else v-text="'Nothing found!'"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, watch } from "vue";
import useGetCharacterID from "@/composables/useGetCharacterID";
import { CharactersType } from "@/types/CharactersType";

const debounce = (
    func: { apply: (arg0: Function, arg1: IArguments) => void },
    delay: number
) => {
  let timer: number;
  return function(this: any) {
    clearTimeout(timer);
    timer = window.setTimeout(() => {
      func.apply(this, arguments)
    }, delay)
  }
}

const searchState = reactive<CharactersType>({
  isLoading: false,
  characters: null,
  field: null,
  fetch: debounce(async () => {
    try {
      searchState.characters = null;
      searchState.isLoading = true;
      const response = await fetch(
          `https://swapi.dev/api/people/?search=${searchState.field}`
      );
      const { results } = await response.json();
      searchState.characters = results;
    } catch (e) {
      console.error("API error", e);
    } finally {
      searchState.isLoading = false;
    }
  }, 300),
});

watch(
    () => searchState.field,
    (value) => value ? searchState.fetch() : searchState.characters = null
);
</script>

<style scoped lang="scss">
.search-box {
  position: relative;
  margin: 0 auto 15px auto;
  width: 350px;

  input {
    padding: 10px 15px;
    margin-bottom: 5px;
    width: 100%;
    outline: none;
    border: 1px solid #a1d2f5;
    border-radius: 25px;
  }

  &__results {
    position: absolute;
    width: 100%;
    box-shadow: 0 3px 8px 4px rgba(85, 141, 183, 0.3);
    background-color: #fff;
    padding: 10px;
    border-radius: 5px;

    ul {
      list-style: none;
      padding: 0;
    }
  }

  li {
    text-align: left;

    &:not(:last-child) {
      border-bottom: 1px solid #d0dede;
    }
  }

  &__character {
    display: flex;
    align-items: center;
    height: 40px;
    padding: 0 10px;
    text-decoration: none;
    font-size: 16px;
    color: #444444;
    transition: 0.1s ease-in-out;
    
    &:hover {
      background-color: #eff9ff;
      transition: 0.1s ease-in-out;
    }
  }
}
</style>