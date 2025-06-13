<template>
  <header class="bg-black px-[30px] py-[15px]">
    <div>
      <div class="flex w-7xl gap-20">
        <AppLogo />

        <AppHeaderNavigation :header-navigation-config="headerNavigationConfig" />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import AppLogo from './AppLogo.vue'
import type { HeaderLinkConfig } from '../model/types'
import AppHeaderNavigation from './AppHeaderNavigation/AppHeaderNavigation.vue'

interface AppHeaderProps {
  headerNavigationConfig: HeaderLinkConfig[]
}

defineProps<AppHeaderProps>()
</script>
