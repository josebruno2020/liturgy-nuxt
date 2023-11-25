<template>
  <article>
    <p class="text-bold">
      <strong>
        {{ lecture.instructions }}
      </strong>
    </p>
    <div class="lecture-content" v-html="lecture.content"></div>
  </article>
</template>

<script setup lang="ts">
interface Lecture {
  instructions: string
  content: string
}
interface lectureProps {
  lecture: Lecture
}

defineProps<lectureProps>()
</script>

<style scoped>
.lecture-content {
  margin-top: 10px;
}
</style>