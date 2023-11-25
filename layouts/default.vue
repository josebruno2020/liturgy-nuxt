<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar title="Liturgia Diária" class="app-bar" scroll-behavior="hide">
      <template v-slot:append>
        <v-btn icon="mdi-calendar-range" @click="drawer = !drawer"></v-btn>
      </template>
    </v-app-bar>

    <v-navigation-drawer location="right" permanent :width="360" v-model="drawer">
        <v-date-picker class="date" :width="350" title="" header="" v-model="date" @update:model-value="onChangeDate" ></v-date-picker>
    </v-navigation-drawer>

    <v-main class="">
      <slot />
    </v-main>

    <v-footer app name="footer" class="d-flex justify-center" >
      <span class="text-center">
        Made with ❤️ by <a href="https://jbcamps.dev" target="_blank">JB</a>
      </span>
    </v-footer>
  </v-layout>
</template>

<script setup lang="ts">
const isMobile = ref(false)


const drawer = ref(false)
const date = ref(new Date())
const router = useRouter()

onMounted(() => {
  isMobile.value = document.body.offsetWidth < 800
  drawer.value = !isMobile
})

function onChangeDate() {
  const day = date.value.getDate()
  const month = date.value.getMonth() + 1
  const year = date.value.getFullYear()
  const qParams = new URLSearchParams()
  qParams.append('day', `${day}`)
  qParams.append('month', `${month}`)
  qParams.append('year', `${year}`)
  router.push(`/?${qParams.toString()}`)

  if (isMobile.value) {
    drawer.value = false
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
}

div.v-date-picker-month > table > tbody > tr > td {
  padding: 0 !important;
}
</style>