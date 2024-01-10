<script lang="ts" setup>
import {useHangmanStore} from "@/stores/module-hangman";
const store = useHangmanStore()
</script>

<template>
  <div class="flex flex-col gap-2">
    <h4>Неправильные буквы</h4>
    <p><span v-for="(letter, index) in store.wrongLetters" :key="letter">{{ index === store.wrongLetters.length - 1 ? letter : `${letter}, `}}</span></p>
  </div>
</template>

<style lang="scss" scoped>
  
</style>
