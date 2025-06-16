<template>
  <div class="flex w-full gap-[12px] px-[12px] pt-[12px]">
    <UserAvatarPlaceholder />

    <div class="flex w-full flex-col gap-[6px]">
      <LoaderSkeleton class="skeleton-text h-[16px] w-[120px] max-w-full" />

      <div class="flex w-full flex-col gap-[3px]">
        <LoaderSkeleton class="skeleton-text h-[14px] w-full" />
        <LoaderSkeleton class="skeleton-text h-[14px] w-[150px] max-w-full" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { LoaderSkeleton } from '@/shared/ui/components'

import { UserAvatarPlaceholder } from '@/entities/users'
</script>
