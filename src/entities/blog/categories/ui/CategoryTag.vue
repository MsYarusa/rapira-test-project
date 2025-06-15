<template>
  <div
    class="bg-primary-light text-primary min-h-fit rounded-[20px] px-[14px] py-[6px] text-sm leading-[1]"
  >
    <span>{{ capitalizeString(category.title) }}</span>
  </div>
</template>

<script setup lang="ts">
import { capitalizeString } from '@/shared/lib/string'

import type { Category } from '../model/Category'

interface CategoryTagProps {
  category: Category
}

defineProps<CategoryTagProps>()
</script>
