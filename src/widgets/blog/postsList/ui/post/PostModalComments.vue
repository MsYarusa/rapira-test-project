<template>
  <div class="comments flex max-h-full w-full flex-col gap-[10px]">
    <h3 class="flex gap-[6px]">
      <span class="font-semibold">{{ t('comments') }}</span>

      <span class="text-gray-500">{{ post.commentsCount }}</span>
    </h3>

    <AddComment :post="post" />

    <UserComment
      v-for="comment of commentsStore.commentsRecord[post.id]"
      :key="comment.id"
      :comment="comment"
    />

    <template
      v-if="!commentsStore.commentsRecord[post.id]?.length && isLoading"
    >
      <UserCommentPlaceholder
        v-for="i in 2"
        :key="i"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

import { useI18nModule } from '@/shared/lib/i18n'

import { useCommentsStore } from '@/entities/blog/comments'
import type { Post } from '@/entities/blog/posts'

import { AddComment } from '@/features/blog/comments/addComment'
import { useGetCommentsByPostId } from '@/features/blog/comments/getCommentsByPost'

import { messagesObject } from '../../locale'
import UserComment from '../comment/UserComment.vue'
import UserCommentPlaceholder from '../comment/UserCommentPlaceholder.vue'

interface PostModalCommentsProps {
  post: Post
}

const { post } = defineProps<PostModalCommentsProps>()

const { t } = useI18nModule({ messagesObject })

const commentsStore = useCommentsStore()
const { getCommentsByPostId, isLoading } = useGetCommentsByPostId()

onMounted(() => {
  if (commentsStore.commentsRecord[post.id]?.length) {
    return
  }

  getCommentsByPostId({ post_id: post.id })
})
</script>
