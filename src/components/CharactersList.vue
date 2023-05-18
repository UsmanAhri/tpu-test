<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";
import useGetCharacterID from "@/composables/useGetCharacterID";
import {Character} from "@/store";

interface IProps {
  displayOnlyFavorites?: boolean;
}

const props = withDefaults(defineProps<IProps>(), {
  displayOnlyFavorites: false,
});

const favoriteCharacters = ref(
    new Set<number>(JSON.parse(localStorage.getItem("favorites") as string) || [])
);

const store = useStore();
const isLoading = computed<boolean>(() => store.state.isLoading);
const characters = computed<Character[]>(() => store.state.characters);

onMounted(() => {
  if (!characters.value) store.dispatch("getAllCharacters");
});

const addToFavorites = (id: number): void => {
  favoriteCharacters.value.add(id);
  localStorage.setItem("favorites", JSON.stringify([...favoriteCharacters.value]));
};

const removeFromFavorites = (id: number): void => {
  favoriteCharacters.value.delete(id);
  localStorage.setItem("favorites", JSON.stringify([...favoriteCharacters.value]));
};

const items = computed(() => {
  if (props.displayOnlyFavorites) {
    return characters.value.filter((character) => favoriteCharacters.value.has(useGetCharacterID(character.url)));
  }
  return characters.value;
});
</script>

<template>
  <div class="table-box">
    <div v-if="isLoading" v-text="'Loading...'"/>
    <template v-else-if="characters?.length">
      <table v-if="items.length" class="table">
        <thead>
        <tr>
          <th>Name</th>
          <th>Height</th>
          <th>Mass</th>
          <th>Hair color</th>
          <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="character in items" :key="character.url">
          <td class="table__character-name">
            <router-link :to="{ name: 'peoples.show', params: { id: useGetCharacterID(character.url) } }">
              {{ character.name }}
            </router-link>
          </td>
          <td>{{ character.height }}</td>
          <td>{{ character.mass }}</td>
          <td>{{ character.hair_color }}</td>
          <td>
            <button
                v-if="favoriteCharacters.has(useGetCharacterID(character.url))"
                v-text="'Remove favorite'"
                class="button button_w-100 button_red"
                @click="removeFromFavorites(useGetCharacterID(character.url))"
            />
            <button
                v-else
                v-text="'Add favorite'"
                class="button button_w-100"
                @click="addToFavorites(useGetCharacterID(character.url))"
            />
          </td>
        </tr>
        </tbody>
      </table>
      <p
          class="info-text"
          v-else
          v-text="'You don\'t have any character in favorites!'"
      />
    </template>
    <p
        class="info-text"
        v-else
        v-text="'Nothing found!'"
    />
  </div>
</template>

<style lang="scss" scoped>
.info-text {
  font-weight: 700;
}

.table-box {
  max-width: 100%;
  overflow: auto;
}

.table {
  min-width: 600px;

  &__character-name {
    text-align: left;

    a {
      color: #444444;
    }
  }
}
</style>