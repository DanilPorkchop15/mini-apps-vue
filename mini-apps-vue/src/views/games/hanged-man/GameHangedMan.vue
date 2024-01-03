<script lang="ts" setup>
import HManWord from '@/components/games/hanged-man/HManWord.vue'
import HManFigure from '@/components/games/hanged-man/HManFigure.vue'
import HManWrongLetters from '@/components/games/hanged-man/HManWrongLetters.vue'
import HManWinPopup from "@/components/games/hanged-man/HManWinPopup.vue";
import HManLosePopup from "@/components/games/hanged-man/HManLosePopup.vue";
import {computed, ref} from "vue";

const writtenLetters = ref<string[]>([])
window.addEventListener("keydown", ({key}) => {
  if(/[А-Яа-яёЁ]/.test(key)){
    if (!writtenLetters.value.includes(key)){
      writtenLetters.value.push(key.toLocaleLowerCase())
    }
  }
})
const word : string = "артём"
const correctLetters = computed(() => writtenLetters.value.filter(l => word.includes(l)))
const wrongLetters = computed(() => writtenLetters.value.filter(l => !word.includes(l)))
const wrongLettersCount = computed(() => wrongLetters.value.length)
</script>

<template>
  {{writtenLetters}} {{wrongLetters}} {{correctLetters}}
  <HManFigure :wrongLettersCount="wrongLettersCount" />
  <HManWrongLetters :wrongLetters="wrongLetters"/>
  <HManWord :correctLetters="correctLetters" :word="word"/>
  <HManWinPopup v-if="correctLetters.length === word.length"/>
  <HManLosePopup v-if="wrongLetters.length >= 6" />
</template>
