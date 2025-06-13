<template>
  <div>{{ t('home_page_title') }}</div>
</template>

<script lang="ts" setup>
import { useI18nModule } from '@/shared/lib/i18n'

const { t } = useI18nModule({
  messagesObject: { ru: { home_page_title: 'Главная' } },
})
</script>
