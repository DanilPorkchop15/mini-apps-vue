<script setup lang="ts">
import {onMounted} from "vue";
import {useHangmanStore} from "@/stores/module-hangman";

const store = useHangmanStore()
onMounted(store.loadLocalScore)
</script>

<template>
  <div>
    <p>Победы: {{store.score.wins}}</p>
    <p>Поражения: {{store.score.loses}}</p>
  </div>
</template>