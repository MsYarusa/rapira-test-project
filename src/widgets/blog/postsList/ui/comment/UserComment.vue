<template>
  <div class="flex gap-[12px] px-[12px] pt-[12px]">
    <UserAvatar :user="comment.user" />

    <div class="flex flex-col gap-[6px]">
      <p class="font-semibold">
        {{
          `${capitalizeString(comment.user.firstName)} ${capitalizeString(comment.user.lastName)}`
        }}
      </p>

      <p class="text-sm leading-[20px]">{{ comment.content }}</p>

      <span class="text-xs text-gray-400">
        {{ commentDate }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import { capitalizeString } from '@/shared/lib/string'

import type { Comment } from '@/entities/blog/comments'
import { UserAvatar } from '@/entities/users'

interface UserCommentProps {
  comment: Comment
}

const { comment } = defineProps<UserCommentProps>()

const { d, t } = useI18n()

const commentDate = computed(() => {
  const date = d(comment.date, {
    day: 'numeric',
    month: '2-digit',
    year: 'numeric',
  })

  const time = d(comment.date, {
    hour: '2-digit',
    minute: '2-digit',
  })

  return `${date} ${t('dates.at')} ${time}`
})
</script>
