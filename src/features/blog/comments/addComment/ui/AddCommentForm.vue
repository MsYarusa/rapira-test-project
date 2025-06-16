<template>
  <form
    class="p-1"
    @submit.prevent
  >
    <AddCommentTextarea
      v-model="content"
      :max-length="maxLength"
      :invalid="invalid"
    />
    <div class="flex w-full items-center justify-end gap-[10px]">
      <button
        type="reset"
        class="add-comment-form-btn reset"
        @click="emit('cancel')"
      >
        {{ t('common.cancel') }}
      </button>

      <button
        type="submit"
        class="add-comment-form-btn submit"
        :disabled="invalid || content.length === 0"
        @click="pubishComment"
      >
        {{ t('common.publish') }}
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'

import { Statuses } from '@/shared/api'

import type { Post } from '@/entities/blog/posts'
import { useCurrentUserStore } from '@/entities/users'

import AddCommentTextarea from './AddCommentTextarea.vue'
import { useAddComment } from '../api/useAddComment'
import { DEFAULT_MAX_LENGTH } from '../config'

interface AddCommentFormProps {
  maxLength?: number
  post: Post
}

const { maxLength = DEFAULT_MAX_LENGTH, post } =
  defineProps<AddCommentFormProps>()

interface AddCommentFormEmits {
  (event: 'cancel'): void
}

const emit = defineEmits<AddCommentFormEmits>()

const content = ref<string>('')

const { t } = useI18n()

const invalid = computed(() => {
  return content.value.length > maxLength
})

const currentUserStore = useCurrentUserStore()

const { addComment, status } = useAddComment()

const pubishComment = (): void => {
  addComment({
    postId: post.id,
    user: currentUserStore.user,
    content: content.value,
  })
}

watch(status, () => {
  if (status.value !== Statuses.success) {
    return
  }

  emit('cancel')
})
</script>

<style scoped>
@import './AddCommet.css';
</style>
