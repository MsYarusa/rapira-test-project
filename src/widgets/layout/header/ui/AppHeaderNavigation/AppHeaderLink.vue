<template>
  <RouterLink
    :to="headerLinkConfig.to"
    class="rounded-md px-[14px] py-[8px] leading-none font-semibold text-gray-100"
    active-class="bg-white/10 text-primary!"
  >
    <span>{{ capitalizeString(headerLinkConfig.label) }}</span>
  </RouterLink>
</template>

<script setup lang="ts">
import { capitalizeString } from '@/shared/lib/string'

import type { HeaderLinkConfig } from '../../model/types'

interface HeaderLinkProps {
  headerLinkConfig: HeaderLinkConfig
}

defineProps<HeaderLinkProps>()
</script>
