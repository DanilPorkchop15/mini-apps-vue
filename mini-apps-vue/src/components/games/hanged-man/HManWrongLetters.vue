<script lang="ts" setup>
import { defineProps } from 'vue'
interface Props {
  wrongLetters: string[]
}
defineProps<Props>()
</script>

<template>
  <div class="flex flex-col gap-2">
    <h4>Неправильные буквы</h4>
    <p><span v-for="(letter, index) in wrongLetters" :key="letter">{{ index === wrongLetters.length - 1 ? letter : `${letter}, `}}</span></p>
  </div>
</template>

<style lang="scss" scoped>
  
</style>
