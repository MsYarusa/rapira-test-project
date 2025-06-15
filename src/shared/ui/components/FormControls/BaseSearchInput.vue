<template>
  <div
    class="search-input has-focus:ring-primary/32 has-focus:border-primary! hover:border-primary! rounded-md has-focus:ring-2"
    @click="inputFocused = true"
  >
    <SearchIcon class="size-[14px] fill-gray-400" />

    <input
      ref="input"
      v-model="innerValue"
      type="text"
      :placeholder="t('common.search_placeholder')"
      class="w-full text-[13px] leading-[14px] placeholder-gray-400/50 outline-none"
    />

    <button
      class="cursor-pointer p-2 pe-0 outline-0"
      @click="clearInnerValue"
    >
      <XIcon class="size-[14px] fill-gray-400" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { useDebounceFn, useFocus } from '@vueuse/core'
import { ref, useTemplateRef, watch } from 'vue'
import { useI18n } from 'vue-i18n'

import { SearchIcon, XIcon } from '../../assets/icons'

const DEFAULT_DEBOUNCE = 500

interface BaseSearchInputProps {
  debounce?: number
}

const { debounce = DEFAULT_DEBOUNCE } = defineProps<BaseSearchInputProps>()

const { t } = useI18n()

const innerValue = ref<string>('')

const modelValue = defineModel<string>()

const clearInnerValue = (): void => {
  innerValue.value = ''
}

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

<style scoped lang="scss">
.search-input {
  display: flex;
  align-items: center;
  gap: 10px;

  width: 100%;
  max-width: 400px;
  min-width: fit-content;

  height: 40px;

  padding-left: 10px;
  padding-right: 10px;

  background-color: var(--color-gray-100);
  border: 1px solid transparent;
}
</style>
