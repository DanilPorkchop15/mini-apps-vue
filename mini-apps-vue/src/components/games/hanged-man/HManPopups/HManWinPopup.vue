<script lang="ts" setup>
import { useHangmanStore } from "@/stores/module-hangman";


const store = useHangmanStore()

function close():void{
  store.writtenLetters = []
  store.fetchWord().then(store.translateWord)
  store.win = false
  store.canWrite = true
}
</script>

<template>
  <div class="bg-opacity-50 bg-green-200 grid place-items-center">
      <div class="bg-blue-200 max-w-100 max-h-60 pt-5 pb-5 pr-10 pl-10 rounded-xl flex flex-column gap-5 text-center">
        <h3>Победа</h3>
        <p>Загаданное слово - {{store.word}} ({{store.ruWord}})</p>
        <p>Поздравляю с победой, ты молодец!</p>
        <v-btn color="green" @click="close">Попробовать еще раз</v-btn>
      </div>
  </div>
</template>
