<template>
  <div class="bg-white px-[10px] sm:px-[30px] lg:px-[95px]">
    <div class="flex flex-col gap-[10px] py-3 sm:py-5">
      <div class="flex justify-between gap-4">
        <div class="flex w-full items-center gap-[40px]">
          <h1 class="text-2xl font-bold sm:text-[32px]">
            {{ t('blog_page_title') }}
          </h1>

          <BaseSearchInput
            v-model="searchValue"
            class="max-sm:hidden!"
          />
        </div>

        <FilterVisibilityButtons
          :filter-is-empty="filteredCategories.length === 0"
        />
      </div>

      <BaseSearchInput
        v-model="searchValue"
        class="max-w-full! sm:hidden!"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import { useI18nModule } from '@/shared/lib/i18n'
import { BaseSearchInput } from '@/shared/ui/components'

import type { Category } from '@/entities/blog/categories'

import FilterVisibilityButtons from './FilterVisibilityButtons.vue'

const filteredCategories = ref<Category[]>([])

const { t } = useI18nModule({
  messagesObject: { ru: { blog_page_title: 'Блог' } },
})

const searchValue = ref<string>('')
</script>
