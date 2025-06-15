<template>
  <div class="post-meta flex gap-[10px] text-sm leading-[1] text-gray-500">
    <span class="post-meta-field">{{ formatDateToLocal(post.date) }}</span>

    <span class="dot-divider">.</span>

    <span class="post-meta-field">
      <ClockIcon class="post-meta-icon" />

      {{ `${post.readTime} ${t('min')}` }}
    </span>

    <span class="dot-divider">.</span>

    <span class="post-meta-field">
      <CommentsIcon class="post-meta-icon" />

      {{
        t(
          'comments',
          { count: post.commentsCount },
          { plural: post.commentsCount },
        )
      }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { useI18nModule } from '@/shared/lib/i18n'
import { ClockIcon, CommentsIcon } from '@/shared/ui/assets/icons'

import { formatDateToLocal } from '../lib/date/formatDateToLocal'
import { messagesObject } from '../locale'
import type { Post } from '../model/Post'

interface PostMetaProps {
  post: Post
}

defineProps<PostMetaProps>()

const { t } = useI18nModule({ messagesObject })
</script>

<style scoped>
@import './PostMeta.css';
</style>
