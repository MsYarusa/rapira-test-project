<template>
  <button class="filter-option">
    <LoaderSkeleton class="skeleton-primary skeleton-text h-5 w-12" />

    <PlusIcon class="fill-primary" />
  </button>
</template>

<script setup lang="ts">
import { PlusIcon } from '@/shared/ui/assets/icons'
import { LoaderSkeleton } from '@/shared/ui/components'
</script>

<style lang="css" scoped>
@import './FilterOption.css';
</style>
