<template>
  <div
    class="bg-primary-light text-primary rounded-[20px] px-[14px] py-[6px] text-sm leading-0"
  >
    {{ category.title }}
  </div>
</template>

<script setup lang="ts">
import type { Category } from '../model/Category'

interface CategoryTagProps {
  category: Category
}

defineProps<CategoryTagProps>()
</script>
