<template>
  <header
    class="sticky top-0 z-20 flex h-[78px] items-center bg-black px-[22px] py-[14px] lg:h-auto lg:px-[30px] lg:py-[15px]"
  >
    <div class="z-20 flex h-fit w-7xl items-center gap-20">
      <div class="flex gap-4">
        <AppBurgerMenu
          ref="burgerButton"
          class="block lg:hidden"
          :active="sidebarIsVisible"
          @click="toggleSidebarVisibility"
          @click-outside="hideSidebar"
        />
        <AppLogo />
      </div>

      <AppHeaderNavigation
        :header-navigation-config="headerNavigationConfig"
        class="hidden gap-5 lg:flex"
      />
    </div>
  </header>

  <AppSidebar
    v-model:visible="sidebarIsVisible"
    :header-navigation-config="headerNavigationConfig"
  />
</template>

<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'
import { ref, useTemplateRef } from 'vue'

import AppLogo from './AppLogo.vue'
import type { HeaderLinkConfig } from '../model/types'
import AppHeaderNavigation from './AppHeaderNavigation/AppHeaderNavigation.vue'
import AppBurgerMenu from './AppSidebar/AppBurgerMenu.vue'
import AppSidebar from './AppSidebar/AppSidebar.vue'

interface AppHeaderProps {
  headerNavigationConfig: HeaderLinkConfig[]
}

defineProps<AppHeaderProps>()

const sidebarIsVisible = ref<boolean>(false)

const toggleSidebarVisibility = (): void => {
  sidebarIsVisible.value = !sidebarIsVisible.value
}

const burgerButton = useTemplateRef<HTMLElement>('burgerButton')

const hideSidebar = (): void => {
  sidebarIsVisible.value = false
}
onClickOutside(burgerButton, hideSidebar)
</script>
