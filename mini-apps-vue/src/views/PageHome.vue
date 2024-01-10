<script setup lang="ts">
import { VBtn } from 'vuetify/lib/components'
import {useTheme} from "vuetify";

import { useCounterStore } from '@/stores/module-counter'

const store = useCounterStore()
const theme = useTheme()

function switchTheme() {
  theme.global.name.value = theme.global.name.value ? 'light'  : 'dark'
}


</script>

<template>
  <div class=" flex justify-center items-center m-auto bg-gray-200">
    <v-btn color="pink" @click="switchTheme">Switch theme</v-btn>
    <v-btn color="success" @click="store.increment">Increment</v-btn>
    <p>{{store.count}} * 2 = {{ store.doubleCount }}</p>
  </div>
</template>

<style scoped></style>
