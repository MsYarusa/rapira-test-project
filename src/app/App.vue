<template>
  <main>
    <RouterView />
  </main>
</template>

<script lang="ts" setup>
import { useApiClientConfig } from './api/useApiClientConfig'

useApiClientConfig()
</script>
