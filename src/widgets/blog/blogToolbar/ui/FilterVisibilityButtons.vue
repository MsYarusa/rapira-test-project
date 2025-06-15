<template>
  <div class="flex min-w-fit gap-[10px] text-sm">
    <button
      v-if="filterIsActive && !filterIsEmpty"
      class="text-primary hover:text-primary-active cursor-pointer"
      @click="emit('clear')"
    >
      {{ t('common.clear_filter_btn') }}
    </button>

    <button
      class="group toggle-filter-btn text-gray-400 hover:text-gray-500"
      @click="toggleActive"
    >
      <span v-if="filterIsActive">{{ t('common.filter_active_btn') }}</span>

      <span v-else>{{ t('common.filter_btn') }}</span>

      <ArrowUpIcon v-if="filterIsActive" />
      <ArrowDownIcon v-else />
    </button>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import { ArrowDownIcon, ArrowUpIcon } from '@/shared/ui/assets/icons'

interface FilterVisibilityButtonsProps {
  filterIsEmpty: boolean
}

defineProps<FilterVisibilityButtonsProps>()

interface FilterVisibilityButtonsEmits {
  (event: 'clear'): void
}

const emit = defineEmits<FilterVisibilityButtonsEmits>()

const filterIsActive = defineModel<boolean>('active')

const toggleActive = (): void => {
  filterIsActive.value = !filterIsActive.value
}

const { t } = useI18n()
</script>

<style scoped lang="css">
@import './FilterVisibilityButtons.css';
</style>
