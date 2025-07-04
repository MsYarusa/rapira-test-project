<template>
  <div class="blog-toolbar bg-white px-[10px] sm:px-[30px] lg:px-[95px]">
    <div class="flex flex-col gap-[10px] py-3 sm:py-5">
      <div class="flex justify-between gap-4">
        <div class="flex w-full items-center gap-[40px]">
          <h1 class="text-2xl font-bold sm:text-[32px]">
            {{ t('blog_page_title') }}
          </h1>

          <BaseSearchInput
            v-model="searchValue"
            class="blog-toolbar-search max-sm:hidden!"
          />
        </div>

        <FilterVisibilityButtons
          v-model:active="filterIsActive"
          :filter-is-empty="selectedCategories.length === 0"
          @clear="clearSelectedCategories"
        />
      </div>

      <BaseSearchInput
        v-model="searchValue"
        class="blog-toolbar-search max-w-full! sm:hidden!"
      />
    </div>

    <CategoriesFilter
      v-if="filterIsActive"
      v-model="selectedCategories"
      :categories="categoriesStore.categories"
      :is-loading="isLoading"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

import { useI18nModule } from '@/shared/lib/i18n'
import { BaseSearchInput } from '@/shared/ui/components'

import { useCategoriesStore, type Category } from '@/entities/blog/categories'

import { CategoriesFilter } from '@/features/blog/categories/categoriesFilter'
import { useGetAllCategories } from '@/features/blog/categories/getAllCategories'

import FilterVisibilityButtons from './FilterVisibilityButtons.vue'
import { messagesObject } from '../locale'

const filterIsActive = ref<boolean>(false)

const selectedCategories = defineModel<Category[]>('post-categories', {
  default: [],
})

const searchValue = defineModel<string>('post-title')

const clearSelectedCategories = (): void => {
  selectedCategories.value = []
}

const { getAllCategories, isLoading } = useGetAllCategories()

const categoriesStore = useCategoriesStore()

watch(filterIsActive, () => {
  if (!filterIsActive.value || categoriesStore.categories.length) {
    return
  }

  getAllCategories()
})

const { t } = useI18nModule({ messagesObject })
</script>

<style scoped>
.blog-toolbar .blog-toolbar-search {
  background-color: var(--color-gray-100);
  border: 1px solid transparent;

  max-width: 400px;
  min-width: fit-content;

  height: 40px;
}
</style>
