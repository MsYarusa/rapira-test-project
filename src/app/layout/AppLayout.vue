<template>
  <div>
    <AppHeader :header-navigation-config="headerNavigationConfig" />
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { AppHeader } from '@/widgets/layout/header'

import { useHeaderNavigationConfig } from '../router/model/navigation/useHeaderNavigationConfig'

const { headerNavigationConfig } = useHeaderNavigationConfig()
</script>
