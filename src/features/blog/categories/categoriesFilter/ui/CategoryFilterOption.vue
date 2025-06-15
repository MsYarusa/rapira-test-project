<template>
  <button
    class="category-filter-option group bg-primary-light round text-primary hover:text-primary-active rounded-[20px] leading-0"
    :class="
      checked &&
      'bg-primary! hover:bg-primary-active! text-white! hover:text-white!'
    "
    @click="toggledChecked"
  >
    {{ capitalizeString(category.title) }}

    <div v-if="checked">
      <CheckIcon class="size-[20px] fill-white group-hover:hidden" />
      <XIcon class="hidden size-[20px] fill-white group-hover:block" />
    </div>

    <PlusIcon
      v-else
      class="fill-primary group-hover:fill-primary-active size-[20px]"
    />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import { capitalizeString } from '@/shared/lib/string'
import { CheckIcon, PlusIcon, XIcon } from '@/shared/ui/assets/icons'

import type { Category } from '@/entities/blog/categories'

interface CategoryFilterOptionProps {
  category: Category
}

const { category } = defineProps<CategoryFilterOptionProps>()

const selectedOptions = defineModel<Category[]>({ default: [] })

const checkOption = (): boolean => {
  return selectedOptions.value.includes(category)
}

const checked = computed(checkOption)

const toggledChecked = (): void => {
  if (checked.value) {
    selectedOptions.value = selectedOptions.value.filter((option) => {
      return option.id !== category.id
    })

    return
  }

  selectedOptions.value.push(category)
}
</script>

<style lang="scss">
.category-filter-option {
  display: flex;
  gap: 6px;
  align-items: center;

  cursor: pointer;

  padding: 6px 14px;
}
</style>
