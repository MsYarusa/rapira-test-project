<template>
  <div class="post-meta">
    <span>{{ formatDateToLocal(post.date) }}</span>

    <span class="align-middle">.</span>

    <span>{{ `${post.readTime} ${t('min')}` }}</span>

    <span class="align-middle">.</span>

    <span>{{
      t(
        'comments',
        { count: post.commentsCount },
        { plural: post.commentsCount },
      )
    }}</span>
  </div>
</template>

<script setup lang="ts">
import { useI18nModule } from '@/shared/lib/i18n'

import { formatDateToLocal } from '../lib/date/formatDateToLocal'
import { messagesObject } from '../locale'
import type { Post } from '../model/Post'

interface PostMetaProps {
  post: Post
}

defineProps<PostMetaProps>()

const { t } = useI18nModule({ messagesObject })
</script>

<style scoped></style>
