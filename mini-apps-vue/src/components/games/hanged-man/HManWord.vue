<script lang="ts" setup>
import { defineProps } from 'vue'
interface Props {
  word: string,
  correctLetters: string[]
}
defineProps<Props>()
</script>

<template>
  <div class="flex gap-1">
    <span v-for="(letter, index) in word"
          :key="index"
          class="w-5 p-0.5 border-b-2 border-b-emerald-600 text-center min-h-4">
      {{ correctLetters.includes(letter) ? letter : "\n" }}
    </span>
  </div>
</template>

<style lang="scss" scoped>
  
</style>
