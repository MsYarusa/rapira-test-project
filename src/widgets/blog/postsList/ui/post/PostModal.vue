<template>
  <BaseModal
    v-model:visible="visible"
    class="post-modal"
  >
    <template #modal-header>
      <div class="flex max-w-(--max-post-modal-width) flex-col gap-[10px]">
        <h2 class="text-2xl font-semibold">
          {{ post.title }}
        </h2>

        <PostMeta :post="post" />
      </div>
    </template>

    <template #modal-content>
      <div class="flex max-w-(--max-post-modal-width) flex-col gap-[15px]">
        <PostImage
          class="w-full max-w-(--max-post-modal-width)"
          :post="post"
        />

        <div class="content flex flex-col gap-[10px]">
          <p class="text-content">
            {{ post.content }}
          </p>

          <div class="post-categories__container">
            <CategoryTag
              v-for="category of post.categories"
              :key="category.id"
              :category="category"
            />
          </div>
        </div>

        <div class="comments flex max-h-full w-full flex-col gap-[10px]">
          <h3 class="flex gap-[6px]">
            <span class="font-semibold">{{ t('comments') }}</span>

            <span class="text-gray-500">{{ post.commentsCount }}</span>
          </h3>

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
      </div>
    </template>
  </BaseModal>
</template>

<script setup lang="ts">
import { watch } from 'vue'

import { useI18nModule } from '@/shared/lib/i18n'
import { BaseModal } from '@/shared/ui/components'

import { CategoryTag } from '@/entities/blog/categories'
import { useCommentsStore } from '@/entities/blog/comments'
import { PostImage, PostMeta, type Post } from '@/entities/blog/posts'

import { useGetCommentsByPostId } from '@/features/blog/comments/getCommentsByPost'

import { messagesObject } from '../../locale'
import UserComment from '../comment/UserComment.vue'
import UserCommentPlaceholder from '../comment/UserCommentPlaceholder.vue'

interface PostModalProps {
  post: Post
}

const { post } = defineProps<PostModalProps>()

const visible = defineModel<boolean>('visible', { default: false })

const { t } = useI18nModule({ messagesObject })

const commentsStore = useCommentsStore()
const { getCommentsByPostId, isLoading } = useGetCommentsByPostId()

watch(visible, () => {
  if (!visible.value || commentsStore.commentsRecord[post.id]?.length) {
    return
  }

  getCommentsByPostId({ post_id: post.id })
})
</script>

<style class="css" scoped>
@import '../PostList.css';

.post-modal {
  --max-post-modal-width: 600px;
}
</style>
