<template>
  <ul>
    <AppHeaderLink
      v-for="linkConfig of headerNavigationConfig"
      :key="linkConfig.label"
      :header-link-config="linkConfig"
    />
  </ul>
</template>

<script setup lang="ts">
import AppHeaderLink from './AppHeaderLink.vue'
import type { HeaderLinkConfig } from '../../model/types'

interface HeaderNavigationProps {
  headerNavigationConfig: HeaderLinkConfig[]
}

defineProps<HeaderNavigationProps>()
</script>
