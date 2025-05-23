<template>
  <button
    :id="'container-' + buttonContextMenuId + extChatAppId"
    ref="actionScope"
    style="
      position: relative;
      width: fit-content;
      border: none;
      background: transparent;
      height: fit-content;
    "
    @mouseenter="hover"
    @mouseleave="hoverOut"
  >
    <div @click="toggle">
      <slot></slot>
    </div>
    <Teleport to="body">
      <ContextMenu
        :id="'context-menu-' + buttonContextMenuId + extChatAppId"
        :actions="actions"
        :data-theme="getTheme().theme ? getTheme().theme : 'light'"
        @mouseenter="hoverCM"
        @mouseleave="hoverOutCM"
        @click="click"
      />
    </Teleport>
    
  </button>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, useId, inject, nextTick} from 'vue';
import { ContextMenu } from '.';
import { useTheme } from '../../helpers/useTheme';

const chatAppId = inject('chatAppId')
const extChatAppId = inject('extChatAppId')

const { getTheme } = useTheme(chatAppId as string)

const props = defineProps({
  actions: {
    type: Array,
    required: true,
  },
  mode: {
    type: String,
    required: false,
    default: 'hover',
  },
  disabled: {
    type: Boolean,
    default: false,
    required: false,
  },
  menuSide: {
    type: String,
    required: false,
    default: 'top'
  },
});

const buttonContextMenuId = useId()

const emit = defineEmits(['click', 'buttonClick', 'menuMouseEnter', 'menuMouseLeave']);

const contextMenu = ref()
const actionScope = ref()
const isOpened = ref(false)

const click = (action) => {
  hideMenu()
  emit('click', action);
}

const toggle = () => {
  if (!props.disabled) {
    if (props.mode == 'click' && !isOpened.value) {
      updatePosition()
    }
    else if (props.mode == 'click' && isOpened.value) {
      hideMenu()
    }
    emit('buttonClick')
  }
}

const hover = () => {
  if (!props.disabled) {
    if (props.mode == 'hover') {
      updatePosition()
    }
  }
}

const hoverOut = () => {
  if (!props.disabled) {
    if (props.mode == 'hover') {
      hideMenu()
    }
  }
}

const hoverCM = () => {
  emit('menuMouseEnter')
  if (!props.disabled) {
    if (props.mode == 'hover') {
      updatePosition()
    }
  }
}

const hoverOutCM = () => {
  emit('menuMouseLeave')
  if (!props.disabled) {
    if (props.mode == 'hover') {
      hideMenu()
    }
  }
}

const updatePosition = () => {
  if (actionScope.value && contextMenu.value){
    const t = contextMenu.value
    const bounds = actionScope.value.getBoundingClientRect()
    t.style.display = 'inherit'
    const cmBounds = contextMenu.value.getBoundingClientRect()
    t.style.display = 'none'
    nextTick(() => {
      const r = {
        'left'  : {top: bounds.top - ((cmBounds.height - bounds.height) / 2) - cmBounds.top, left: bounds.left - cmBounds.width - cmBounds.left},
        'right' : {top: bounds.top - ((cmBounds.height - bounds.height) / 2) - cmBounds.top, left: bounds.left + bounds.width - cmBounds.left},
        'bottom': {top: bounds?.bottom - cmBounds.top, left: bounds?.left - ((cmBounds.width - bounds.width) / 2) - cmBounds.left},
        'top'   : {top: bounds.top - cmBounds.height - cmBounds.top, left: bounds?.left - ((cmBounds.width - bounds.width) / 2) - cmBounds.left},
      }
      //console.log(bounds, cmBounds, 'top: ', r[props.menuSide].top + 'px', ' left: ', r[props.menuSide].left + 'px')
      t.style.top = r[props.menuSide].top + 'px'
      t.style.left = r[props.menuSide].left + 'px'
      t.style.opacity = '1'
      t.style.display = 'inherit'
      isOpened.value = true
    })
  }
}

const hideMenu = () => {
  if (contextMenu.value){
    const t = contextMenu.value
    if (t){
      t.style.top = '0'
      t.style.left = '0'
      t.style.opacity = '0'
      t.style.display = 'none'
      isOpened.value = false
    }
  }
}

const handleClickOutside = (event) => {
  if (props.mode == 'click' && actionScope.value && !actionScope.value.contains(event.target)) {
    hideMenu()
  }
}

onMounted(() => {
  nextTick(() => {
    contextMenu.value = document.getElementById('context-menu-' + buttonContextMenuId + extChatAppId)
    if (contextMenu.value) {
      hideMenu()
      document.addEventListener("click", handleClickOutside)
    }
  })
})

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside)
})

defineExpose({
  updatePosition,
  hideMenu,
})

</script>

<style
  scoped
  lang="scss"
>
</style>
