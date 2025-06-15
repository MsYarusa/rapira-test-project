<template>
  <button class="filter-option">
    <LoaderSkeleton class="skeleton-primary h-5 w-12 rounded-sm" />

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
