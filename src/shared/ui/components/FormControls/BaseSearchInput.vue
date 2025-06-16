<template>
  <div
    class="form-control flex items-center px-[10px]"
    @click="inputFocused = true"
  >
    <SearchIcon class="size-[14px] fill-gray-400" />

    <input
      ref="input"
      v-model="innerValue"
      type="text"
      :placeholder="t('common.search_placeholder')"
      class="form-control-input text-[13px] leading-[14px]"
    />

    <ClearButton
      class="p-2 [&>svg]:size-[14px]"
      @click="innerValue = ''"
    />
  </div>
</template>

<script setup lang="ts">
import { useDebounceFn, useFocus } from '@vueuse/core'
import { ref, useTemplateRef, watch } from 'vue'
import { useI18n } from 'vue-i18n'

import ClearButton from './utils/ClearButton.vue'
import { SearchIcon } from '../../assets/icons'

const DEFAULT_DEBOUNCE = 500

interface BaseSearchInputProps {
  debounce?: number
}

const { debounce = DEFAULT_DEBOUNCE } = defineProps<BaseSearchInputProps>()

const { t } = useI18n()

const innerValue = ref<string>('')

const modelValue = defineModel<string>()

const updateModelValue = (): void => {
  modelValue.value = innerValue.value
}

const updateModelValueDebounced = useDebounceFn(updateModelValue, debounce)

watch(innerValue, updateModelValueDebounced)

const updateInnerValue = (): void => {
  if (modelValue.value === innerValue.value) {
    return
  }

  innerValue.value = modelValue.value || ''
}

watch(modelValue, updateInnerValue, { immediate: true })

const input = useTemplateRef('input')

const { focused: inputFocused } = useFocus(input)
</script>

<style scoped>
@import './FormControls.css';
</style>
