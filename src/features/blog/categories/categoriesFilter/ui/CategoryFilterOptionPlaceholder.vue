<template>
  <button
    class="category-filter-option-placeholder bg-primary-light round text-primary rounded-[20px] leading-0"
  >
    <LoaderSkeleton class="category-loader-skeleton h-5 w-12 rounded-sm" />

    <PlusIcon class="fill-primary size-[20px]" />
  </button>
</template>

<script setup lang="ts">
import { PlusIcon } from '@/shared/ui/assets/icons'
import { LoaderSkeleton } from '@/shared/ui/components'
</script>

<style lang="scss">
.category-filter-option-placeholder {
  display: flex;
  gap: 6px;
  align-items: center;

  padding: 6px 14px;
}

.category-loader-skeleton {
  --loader-bg-color: var(--color-primary-alpha-50);
  --loader-highlight-color: var(--color-primary-light);
}
</style>
