<template>
  <div>
    <AppHeader :header-navigation-config="headerNavigationConfig" />
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { AppHeader, type HeaderLinkConfig } from '@/widgets/layout/header'

interface AppLayoutProps {
  headerNavigationConfig: HeaderLinkConfig[]
}

defineProps<AppLayoutProps>()
</script>
