<template>
  <div class="bg-white">
    <h1>{{ t('blog_page_title') }}</h1>
    <BaseSearchInput v-model="searchValue" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import { useI18nModule } from '@/shared/lib/i18n'
import { BaseSearchInput } from '@/shared/ui/components'

const { t } = useI18nModule({
  messagesObject: { ru: { blog_page_title: 'Блог' } },
})

const searchValue = ref<string>('')
</script>
