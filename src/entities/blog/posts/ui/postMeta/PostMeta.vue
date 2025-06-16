<template>
  <div class="post-meta flex gap-[10px] text-sm text-gray-500">
    <span class="post-meta-field">
      {{ dateFormater(post.date) }}
    </span>

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
import { useMonthDayDateFormater } from '@/shared/locale/dates/customDateFormaters'
import { ClockIcon, CommentsIcon } from '@/shared/ui/assets/icons'

import { messagesObject } from '../../locale'
import type { Post } from '../../model/Post'

interface PostMetaProps {
  post: Post
}

defineProps<PostMetaProps>()

const { formater: dateFormater } = useMonthDayDateFormater()

const { t } = useI18nModule({ messagesObject })
</script>

<style scoped>
@import './PostMeta.css';
</style>
