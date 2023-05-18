<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";
import type { Character } from "@/store";
import useGetCharacterID from "@/composables/useGetCharacterID";

const {
  params: { id }
} = useRoute();
const router = useRouter();

const store = useStore();
const characters = computed<Character[]>(() => store.state.characters);
const isLoading = computed<boolean>(() => store.state.isLoading);
let currentCharacter = ref<Character | null>(null);

const favoriteCharacters = ref(
    new Set<number>(JSON.parse(localStorage.getItem("favorites") as string) || [])
);

onMounted(async () => {
  if (!characters.value) await store.dispatch("getAllCharacters");
  const isCharacterFound = characters.value.find((character) => useGetCharacterID(character.url) === +id);

  isCharacterFound
      ? currentCharacter.value = isCharacterFound
      : await router.push({ name: "404" })
});

const addToFavorites = (id: number): void => {
  favoriteCharacters.value.add(id);
  localStorage.setItem("favorites", JSON.stringify([...favoriteCharacters.value]));
};
</script>

<template>
  <div v-if="isLoading" v-text="'Loading...'"/>
  <div v-else class="box">
    <div class="button-wrap">
      <button
          v-if="currentCharacter && !favoriteCharacters.has(useGetCharacterID(currentCharacter.url))"
          class="button"
          v-text="'Add favorite'"
          @click="addToFavorites(useGetCharacterID(currentCharacter?.url || ''))"
      />
    </div>
    <div class="character-data">
      <template v-for="(value, key) in currentCharacter" :key="key">
        <p class="character-data__title" v-text="key.replace('_', ' ')"/>
        <p class="character-data__value" v-text="value"/>
      </template>
    </div>
  </div>
</template>

<style scoped lang="scss">
.box {
  width: 700px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: auto;
}

.character-data {
  display: grid;
  grid-template-columns: 0.2fr 1fr;
  grid-row-gap: 7px;
  margin: auto;

  &__title {
    text-align: left;
    text-transform: capitalize;
    font-weight: 700;
  }

  &__title,
  &__value {
    border-bottom: 1px solid #ccc;
    padding: 8px 15px;
  }
}
</style>
