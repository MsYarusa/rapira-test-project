<template>
  <button class="filter-option">
    <LoaderSkeleton class="category-loader-skeleton h-5 w-12 rounded-sm" />

    <PlusIcon class="fill-primary" />
  </button>
</template>

<script setup lang="ts">
import { PlusIcon } from '@/shared/ui/assets/icons'
import { LoaderSkeleton } from '@/shared/ui/components'
</script>

<style lang="css" scoped>
@import './FilterOption.css';

.category-loader-skeleton {
  --loader-bg-color: var(--color-primary-alpha-50);
  --loader-highlight-color: var(--color-primary-light);
}
</style>
