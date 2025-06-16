<template>
  <div class="flex flex-col gap-[6px]">
    <BaseTextarea
      ref="textarea"
      v-model="content"
      class="add-comment-textarea"
      :placeholder="t('add_comment_placeholder')"
      :invalid="invalid"
    />

    <span class="text-xs text-gray-500">
      <span :class="invalid && 'text-invalid'">{{ content.length }}</span>
      {{ `${tGlobal('prepositions.from')} ${maxLength} ${t('symbols')}` }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { onMounted, useTemplateRef } from 'vue'
import { useI18n } from 'vue-i18n'

import { useI18nModule } from '@/shared/lib/i18n'
import { BaseTextarea } from '@/shared/ui/components'

import { messagesObject } from '../locale'

interface AddCommentTextareaProps {
  maxLength?: number
  invalid: boolean
}

defineProps<AddCommentTextareaProps>()

const content = defineModel<string>({ default: '' })

const { t } = useI18nModule({ messagesObject })

const { t: tGlobal } = useI18n()

const textarea = useTemplateRef('textarea')

onMounted(() => {
  textarea.value?.setFocused()
})
</script>

<style scoped>
@import './AddCommet.css';
</style>
