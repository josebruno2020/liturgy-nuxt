<template>
  <main style="height: 100%;">
    <Header v-if="liturgy" :header="liturgy" />
    <v-card v-if="liturgy" elevation="0">
      <v-tabs v-model="tab" class="tabs">
        <v-tab value="firstLecture">1a Leitura</v-tab>
        <v-tab value="psalm">Salmo</v-tab>
        <v-tab value="secondLecture" v-if="liturgy.lectures.secondLecture">Secunda Leitura</v-tab>
        <v-tab value="gospel">Evangelho</v-tab>
      </v-tabs>

      <v-card-text>
        <v-window v-model="tab">
          <v-window-item value="firstLecture">
            <Lecture :lecture="liturgy.lectures.firstLecture" />
          </v-window-item>

          <v-window-item value="psalm">
            <Lecture :lecture="liturgy.lectures.psalm" />
          </v-window-item>

          <v-window-item value="secondLecture" v-if="liturgy.lectures.secondLecture">
            <Lecture :lecture="liturgy.lectures.secondLecture" />
          </v-window-item>

          <v-window-item value="gospel">
            <Lecture :lecture="liturgy.lectures.gospel" />
          </v-window-item>
        </v-window>
      </v-card-text>
    </v-card>

    <Loading :is-loading="loading" />
  </main>
</template>

<script setup lang="ts">
const loading = ref(true)
const route = useRoute()
const day = ref(route.query?.day || new Date().getDate())
const month = ref(route.query?.month || new Date().getMonth() + 1)
const year = ref(route.query?.year || new Date().getFullYear())
const liturgy = ref<any>(null)
const tab = ref(null)
onMounted(() => fetchLiturgy())

watch(() => route.query, (query) => {
  day.value = query.day as string
  month.value = query.month as string
  year.value = query.year as string
  fetchLiturgy()
})

async function fetchLiturgy() {
  loading.value = true
  try {
    const data = await $fetch('/api/liturgia', {
      query: {
        day: day.value,
        month: month.value,
        year: year.value
      }
    })
    liturgy.value = data
  } catch (err) {
    console.log(err)
  } finally {
    loading.value = false
  }
}

</script>

<style scoped>
.tabs {
  display: flex !important;
  justify-content: space-between !important;
}

@media (max-width: 800px) {
  .tabs button {
    font-size: .7rem;
  }
}

</style>