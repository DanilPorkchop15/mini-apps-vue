<script lang="ts" setup>
import {useHangmanStore} from "@/stores/module-hangman";

const store = useHangmanStore()

</script>

<template>
  <div class="flex gap-1">
    <span v-for="(letter, index) in store.word"
          :key="index"
          class="w-5 p-0.5 border-b-2 border-b-emerald-600 text-center min-h-4">
      {{ store.correctLetters.includes(letter) ? letter.toUpperCase() : "\n" }}
    </span>
  </div>
</template>

<style lang="scss" scoped>
  
</style>
