<script setup lang="ts">
import CharactersList from "@/components/CharactersList.vue";
import SearchInput from "@/components/SearchInput.vue";
</script>

<template>
  <SearchInput/>
  <div class="table-wrapper">
    <CharactersList />
  </div>
</template>

<style lang="scss" scoped>
.table-wrapper {
  display: flex;
  justify-content: center;
}
</style>
