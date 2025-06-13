<template>
  <div
    :class="isVisible ? 'block' : 'hidden'"
    class="lg:hidden!"
  >
    <ul
      class="fixed z-20 flex h-screen max-w-fit min-w-[200px] flex-col gap-4 bg-white p-[14px]"
    >
      <AppSidebarLink
        v-for="linkConfig of headerNavigationConfig"
        :key="linkConfig.label"
        :header-link-config="linkConfig"
      />
    </ul>

    <ModalBackground />
  </div>
</template>

<script setup lang="ts">
import { ModalBackground } from '@/shared/ui/components'

import AppSidebarLink from './AppSidebarLink.vue'
import type { HeaderLinkConfig } from '../../model/types'

interface AppSidebarProps {
  headerNavigationConfig: HeaderLinkConfig[]
}

defineProps<AppSidebarProps>()

const isVisible = defineModel<boolean>('visible')
</script>
