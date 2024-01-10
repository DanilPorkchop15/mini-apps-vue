import {defineStore} from "pinia";
import {computed, ref} from "vue";

export const useHangmanStore = defineStore("hangman", () => {

    interface IScore {
        wins: number,
        loses: number,
    }

    const word = ref<string>('') // actual word that user need to find out
    const ruWord = ref<string>('')
    const writtenLetters = ref<string[]>([])
    const canWrite = ref<boolean>(true)
    const win = ref<boolean>(false)  // lose popup condition state
    const lose = ref<boolean>(false) // win popup condition state
    const score = ref<IScore>({
        wins: 0,
        loses: 0
    })


    // event listener that reads english letters and pushes them in written letters array
    window.addEventListener("keydown", ({key}) => {
        if(/[A-Za-z]$/.test(key) && canWrite.value){
            if (!writtenLetters.value.includes(key) && key.length <= 1){
                writtenLetters.value.push(key.toLocaleLowerCase())
            }
        }
    })

// COMPUTED STATES
    const correctLetters = computed(():string[] => writtenLetters.value.filter(l => word.value.includes(l)))
    const wrongLetters = computed(():string[] => writtenLetters.value.filter(l => !word.value.includes(l)))

// fetches data from random words API and changes "word" state to it
    const fetchWord: () => Promise<void> = async (): Promise<void> => {
        const response: Response = await fetch('https://random-word-api.herokuapp.com/word')
        if (!response.ok) {
            throw new Error('Could not fetch the data.');
        }
        const data: string = await response.json();
        console.log(data)
        word.value = data[0]
    }
    function loadLocalScore():void{
        const loadedScore: string | null= localStorage.getItem("score")
        if(loadedScore){
            score.value = JSON.parse(loadedScore)
        } else {
            const noScore: IScore = {
                wins:0,
                loses: 0
            }
            localStorage.setItem("score", JSON.stringify(noScore))
        }
        console.log(localStorage.getItem("score"))
    }function setLocalScore():void {
        localStorage.setItem("score", JSON.stringify(score.value))
    }
    function commitWin():void {
        score.value.wins++
    }
    function commitLose():void {
        score.value.loses++
    }
    async function translateWord(): Promise<void> {
        type TypeLanguage = "ru" | "en"
        const sourceLang :TypeLanguage = 'en';
        const targetLang : TypeLanguage = 'ru';

        const url : string = "https://translate.googleapis.com/translate_a/single?client=gtx&sl="+ sourceLang +
            "&tl=" + targetLang + "&dt=t&q=" + encodeURI(word.value);

        await fetch(url)
            .then((response: Response) => response.json())
            .then(data => {
                ruWord.value = data[0][0][0];
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });

    }
    return {
        word, win, lose, writtenLetters,correctLetters, wrongLetters, fetchWord, canWrite, loadLocalScore, score,
        setLocalScore, commitLose, commitWin, translateWord, ruWord
    }
})