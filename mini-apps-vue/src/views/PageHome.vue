<template>
  <div class=" flex justify-center items-center m-auto bg-gray-200">
    <v-btn color="success" @click="store.increment">Increment</v-btn>
    <p>{{store.count}} * 2 = {{ store.doubleCount }}</p>
  </div>
</template>

<script setup lang="ts">
import { VBtn } from 'vuetify/lib/components/index.mjs'

import { useCounterStore } from '@/stores/module-counter'

const store = useCounterStore() 

</script>

<style scoped></style>
