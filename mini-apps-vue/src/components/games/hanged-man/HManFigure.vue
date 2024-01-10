<script lang="ts" setup>
import {useHangmanStore} from "@/stores/module-hangman";
import {computed} from "vue";

const store = useHangmanStore()
const condition = computed(() => store.wrongLetters.length)
</script>

<template>
  <svg height="500" width="400" stroke="black" fill="none" stroke-width="2" >
    <!-- Rod -->
    <line x1="120" y1="40" x2="280" y2="40" />
    <line x1="280" y1="40" x2="280" y2="100" />
    <line x1="120" y1="40" x2="120" y2="590" />
    <line x1="80" y1="590" x2="200" y2="590" />

    <!-- Head -->
    <circle v-if="condition >= 1" cx="280" cy="140" r="40" />
    <!-- Body -->
    <line v-if="condition >= 2" x1="280" y1="180" x2="280" y2="290" />
    <!-- Arms -->
    <line v-if="condition >= 3" x1="280" y1="230" x2="200" y2="180" />
    <line v-if="condition >= 4" x1="280" y1="230" x2="360" y2="180" />
    <!-- Legs -->
    <line v-if="condition >= 5" x1="280" y1="290" x2="220" y2="420" />
    <line v-if="condition >= 6" x1="280" y1="290" x2="340" y2="420" />
  </svg>
</template>
