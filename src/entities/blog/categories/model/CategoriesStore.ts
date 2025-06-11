import { defineStore } from 'pinia'
import { ref } from 'vue'

import type { Category } from './Category'

const STORE_NAME = 'categories'

export const useCategoriesStore = defineStore(STORE_NAME, () => {
  const categories = ref<Category[]>([])

  const setCategories = (newCategories: Category[]): void => {
    categories.value = newCategories
  }

  return {
    categories,
    setCategories,
  }
})
