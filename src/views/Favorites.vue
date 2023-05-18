<script setup lang="ts">
import CharactersList from "@/components/CharactersList.vue";
</script>

<template>
  <div class="box">
    <CharactersList
        :display-only-favorites="true"
    />
  </div>
</template>

<style scoped>
.box {
  display: flex;
  justify-content: center;
}
</style>