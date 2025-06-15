<template>
  <div class="category-tag">
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

<style lang="css">
@import './CategoryTag.css';
</style>
