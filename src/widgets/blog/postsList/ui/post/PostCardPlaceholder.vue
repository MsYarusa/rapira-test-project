<template>
  <div class="z-40 flex flex-col gap-[10px]">
    <LoaderSkeleton class="aspect-13/8 w-full rounded-xl" />

    <LoaderSkeleton class="skeleton-text h-[14px] w-[300px] max-w-full" />

    <div class="flex flex-col gap-[3px]">
      <LoaderSkeleton class="skeleton-text h-[22px] w-full" />
      <LoaderSkeleton class="skeleton-text h-[22px] w-[100px] max-w-full" />
    </div>

    <div class="flex flex-col gap-[9px]">
      <LoaderSkeleton class="skeleton-text h-[16px] w-full" />
      <LoaderSkeleton class="skeleton-text h-[16px] w-full" />
      <LoaderSkeleton class="skeleton-text h-[16px] w-full" />
      <LoaderSkeleton class="skeleton-text h-[16px] w-[200px] max-w-full" />
    </div>

    <div class="post-categories__container flex gap-[10px]">
      <CategoryTagPlaceholder />
      <CategoryTagPlaceholder />
      <CategoryTagPlaceholder />
    </div>
  </div>
</template>

<script setup lang="ts">
import { LoaderSkeleton } from '@/shared/ui/components'

import { CategoryTagPlaceholder } from '@/entities/blog/categories'
</script>
