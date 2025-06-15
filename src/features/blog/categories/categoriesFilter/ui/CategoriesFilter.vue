<template>
  <div class="w-full border-t border-t-gray-100 py-5">
    <div class="flex w-full flex-wrap gap-2">
      <CategoryFilterOption
        v-for="category of categories"
        :key="category.id"
        v-model="selectedCategories"
        :category="category"
      />
      <template v-if="categories.length === 0 && isLoading">
        <CategoryFilterOptionPlaceholder
          v-for="i in NUMBER_OF_PLACEHOLDERS"
          :key="i"
        />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Category } from '@/entities/blog/categories'

import CategoryFilterOption from './CategoryFilterOption.vue'
import CategoryFilterOptionPlaceholder from './CategoryFilterOptionPlaceholder.vue'

const NUMBER_OF_PLACEHOLDERS = 6

interface CategoryFilterProps {
  categories: Category[]
  isLoading?: boolean
}

defineProps<CategoryFilterProps>()

const selectedCategories = defineModel<Category[]>()
</script>
