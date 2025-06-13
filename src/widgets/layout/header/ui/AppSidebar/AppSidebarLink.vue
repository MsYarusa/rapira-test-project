<template>
  <li>
    <RouterLink
      :to="headerLinkConfig.to"
      class="px-[14px] py-[8px] leading-none font-normal"
      active-class="text-primary-active!"
    >
      <span>{{ capitalizeString(headerLinkConfig.label) }}</span>
    </RouterLink>
  </li>
</template>

<script setup lang="ts">
import { capitalizeString } from '@/shared/lib/string'

import type { HeaderLinkConfig } from '../../model/types'

interface SidebarLinkProps {
  headerLinkConfig: HeaderLinkConfig
}

defineProps<SidebarLinkProps>()
</script>
