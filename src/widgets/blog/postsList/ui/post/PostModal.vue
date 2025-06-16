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

        <PostModalComments :post="post" />
      </div>
    </template>
  </BaseModal>
</template>

<script setup lang="ts">
import { BaseModal } from '@/shared/ui/components'

import { CategoryTag } from '@/entities/blog/categories'
import { PostImage, PostMeta, type Post } from '@/entities/blog/posts'

import PostModalComments from './PostModalComments.vue'

interface PostModalProps {
  post: Post
}

const { post } = defineProps<PostModalProps>()

const visible = defineModel<boolean>('visible', { default: false })
</script>

<style class="css" scoped>
@import '../PostList.css';

.post-modal {
  --max-post-modal-width: 600px;
}
</style>
