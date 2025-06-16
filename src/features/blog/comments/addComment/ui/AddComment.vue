<template>
  <AddCommentForm
    v-if="active"
    :max-length="maxLength"
    @cancel="active = false"
  />

  <button
    v-else
    class="add-comment-textarea cursor-pointer p-[15px] text-start text-gray-400/50"
    @click="active = true"
  >
    {{ t('add_comment_placeholder') }}
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import { useI18nModule } from '@/shared/lib/i18n'

import AddCommentForm from './AddCommentForm.vue'
import { messagesObject } from '../locale'

interface AddCommentProps {
  maxLength?: number
}

defineProps<AddCommentProps>()

const active = ref<boolean>(false)

const { t } = useI18nModule({ messagesObject })
</script>

<style scoped>
@import './AddCommet.css';
</style>
