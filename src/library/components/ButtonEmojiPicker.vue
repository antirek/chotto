<template>
  <div
    ref="emojiButton"
    class="button"
    @click="toggle"
    @mouseover="hover"
    @mouseout="hoverout"
  >
    <span class="pi pi-face-smile" />
  </div>
  <Transition>
    <div 
      ref="emoji" 
      class="emoji"
      @mouseover="hover"
      @mouseout="hoverout"
    >
      <EmojiPicker
        :native="true"
        :theme="changeThemeDialogEmoji"
        picker-type=""
        @select="onSelectEmoji"
      />
    </div>
  </Transition>
</template>

<script setup>
// import picker compopnent
import EmojiPicker from 'vue3-emoji-picker';
import 'vue3-emoji-picker/css';
import {computed, onMounted, onUnmounted, ref} from 'vue'
import { useMessage } from '../../helpers/useMessage';


const props = defineProps({
  mode: {
    type: String,
    required: false,
    default: 'hover',
  },
})

const emoji = ref(null)
const emojiButton = ref(null)
const {message} = useMessage()

const changeThemeDialogEmoji = computed(() => {
  if (document.documentElement.classList.contains('dark')) {
    return 'dark'
  }
})

const onSelectEmoji = (emoji) => {
  message.value.text = (message.value.text ? message.value.text : '') + emoji.i;
  // console.log('emoji', emoji)
}

const toggle = () => {
  if (props.mode == 'click'){
    emoji.value.style.display = 'inherit'
  }
}

const hover = () => {
  if (props.mode == 'hover'){
    emoji.value.style.display = 'inherit'
  }
}

const hoverout = () => {
  if (props.mode == 'hover'){
    emoji.value.style.display = 'none'
  }
}

const handleClickOutside = (event) => {
  if (props.mode == 'click' && !emojiButton.value.contains(event.target) && !emoji.value.contains(event.target)) {
    emoji.value.style.display = 'none'
  }
}

onMounted(() => {
  emoji.value.style.display = 'none'
  document.addEventListener("click", handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside)
})

</script>

<style
  scoped
  lang="scss"
>
  .button {
    background-color: transparent;
    border: 0px solid var(--neutral-300);
    ;

    span {
      display: block;
      cursor: pointer;
      padding: 14px;
      font-size: var(--icon-font-size-medium);
      color: var(--chat-input-icon-color);
    }
  }

  .emoji {
    position: absolute;
    bottom: 50px;
  }

</style>
