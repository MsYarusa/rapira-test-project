<template>
  <div
    class="form-control flex items-start px-[15px] py-[10px]"
    :class="invalid && 'form-control--invalid'"
    @click="textareaFocused = true"
  >
    <textarea
      ref="textarea"
      v-model="value"
      :placeholder="placeholder"
      class="form-control-input resize-none overflow-y-hidden text-sm leading-[22px]"
      @input="resizeTextarea"
    />

    <ClearButton
      class="[&>svg]:size-[20px]"
      @click="clearValue"
    />
  </div>
</template>

<script setup lang="ts">
import { useFocus } from '@vueuse/core'
import { useTemplateRef } from 'vue'

import ClearButton from './utils/ClearButton.vue'

interface BaseTextareaProps {
  placeholder?: string
  invalid?: boolean
}

defineProps<BaseTextareaProps>()

const value = defineModel<string>()

const textarea = useTemplateRef('textarea')

const { focused: textareaFocused } = useFocus(textarea)

const resizeTextarea = (): void => {
  if (!textarea.value) {
    return
  }

  textarea.value.style.height = 'auto'

  textarea.value.style.height = `${textarea.value.scrollHeight}px`
}

const clearValue = (): void => {
  value.value = ''

  if (!textarea.value) {
    return
  }

  textarea.value.style.height = 'auto'
}

const setFocused = (): void => {
  textareaFocused.value = true
}

defineExpose({ setFocused })
</script>

<style scoped>
@import './FormControls.css';
</style>
