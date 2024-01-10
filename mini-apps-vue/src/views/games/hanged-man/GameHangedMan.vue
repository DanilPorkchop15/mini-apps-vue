<script lang="ts" setup>
import HManWord from '@/components/games/hanged-man/HManWord.vue'
import HManFigure from '@/components/games/hanged-man/HManFigure.vue'
import HManWrongLetters from '@/components/games/hanged-man/HManWrongLetters.vue'
import HManWinPopup from "@/components/games/hanged-man/HManPopups/HManWinPopup.vue";
import HManLosePopup from "@/components/games/hanged-man/HManPopups/HManLosePopup.vue";
import {onMounted, watch} from "vue";
import HManScore from "@/components/games/hanged-man/HManScore.vue";
import {useHangmanStore} from '@/stores/module-hangman'



const store = useHangmanStore()

// FUNCTIONS
// filter function
function onlyUnique(value:string, index:number, array:string[]):boolean {
  return array.indexOf(value) === index;
}

// watchers
watch(() => (store.word), store.translateWord)
watch(() => (store.correctLetters),  (current) => {
  if (current.length === Array.from<string>(store.word).filter(onlyUnique).length){
    store.$patch({
      win: true,
      canWrite: false,
    })
    store.commitWin()
    console.log(store.score.wins)
  }
})
watch(() =>(store.wrongLetters),  (current) => {
  if (current.length >= 6) {
    store.$patch({
      lose: true,
      canWrite: false,
    })
    store.commitLose()
    console.log(store.score.loses)
  }
})

watch(() => (store.score),() => {
  console.log('local score updated: ', store.score)
  store.setLocalScore()
}, {deep: true})
onMounted(store.fetchWord)
</script>

<template class="page dark:bg-black bg-white">
  <main class="flex flex-column justify-center items-center gap-10">
    <section>
      <h4>Угадайте случайное английское слово!</h4>
      <h6>Напишите английскую букву:</h6>
    </section>
    <div class="flex">
      <HManScore/>
      <HManFigure/>
      <HManWrongLetters/>
    </div>
    <HManWord/>
  </main>
  <HManWinPopup v-if="store.win" class="fixed w-full h-screen top-0 left-0 overflow-hidden" />
  <HManLosePopup v-if="store.lose" class="fixed w-full h-screen top-0 left-0 overflow-hidden" />
  <div class="pulsing-dot"></div>
</template>


