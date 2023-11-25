<template>
  <section class="header">
    <div>
      <h2>{{ header.title }}</h2>
      <p>{{ header.day }}/{{ header.month }}/{{ header.year }} - <strong>Ano {{ showCycle() }}</strong></p>
    </div>
    <div>
      Cor <strong>{{ showColor() }}</strong>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Header {
  title: string
  day: string
  month: string
  year: string
  cycle: number
  color: string
}
interface headerProps {
  header: Header
}

const { header } = defineProps<headerProps>()

function showColor(): string {
  switch (header.color) {
    case 'g':
      return 'Verde'
    case 'r':
      return 'Vermelho'
    case 'w':
      return 'Branco'
    case 'pr':
      return 'Roxo'
    case 'pi':
      return 'Rosa'
    default:
      return 'Não definido'
  }
}

function showCycle(): string {
  switch(header.cycle) {
    case 1:
      return 'A'
    case 2:
      return 'B'
    case 3:
      return 'C'
    default:
      return 'Não definido'
  }
}
</script>

<style scoped>
.header {
  padding: 1rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

@media (max-width: 800px) {
  .header {
    padding: .5rem .5rem;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  h2 {
    font-size: 1.1rem;
  }
}
</style>