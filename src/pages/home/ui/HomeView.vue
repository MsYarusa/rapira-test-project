<template>
  <PageContainer>
    <div>{{ t('home_page_title') }}</div>
  </PageContainer>
</template>

<script lang="ts" setup>
import { useI18nModule } from '@/shared/lib/i18n'
import { PageContainer } from '@/shared/ui/components'

import { messagesObject } from '../locale'

const { t } = useI18nModule({ messagesObject })
</script>
