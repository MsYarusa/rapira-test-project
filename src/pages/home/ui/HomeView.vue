<template>
  <div>{{ t('home_page_title') }}</div>
</template>

<script lang="ts" setup>
import { useI18nModule } from '@/shared/lib/i18n'

import { messagesObject } from '../locale'

const { t } = useI18nModule({ messagesObject })
</script>
