<template>
  <div v-if="isLoading">
    <v-overlay :opacity="1" v-model="overlay">
      <v-progress-circular indeterminate size="64" color="primary" class="loading">
      </v-progress-circular>
    </v-overlay>
  </div>
</template>

<script setup lang="ts">
interface loadingProps {
  isLoading: boolean
}
defineProps<loadingProps>()
const overlay = ref(true)
</script>

<style>
.loading {
  position: fixed;
  top: 50vh;
  left: 50vw;
}
</style>