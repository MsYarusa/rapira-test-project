<template>
  <BaseModal v-model:visible="visible">
    <template #modal-header>
      <div class="flex max-w-(--max-post-moda-width) flex-col gap-[10px]">
        <h2 class="text-2xl leading-[1] font-semibold">
          {{ post.title }}
        </h2>

        <PostMeta :post="post" />
      </div>
    </template>

    <template #modal-content>
      <div class="flex max-w-(--max-post-moda-width) flex-col gap-[15px]">
        <PostImage
          class="w-full max-w-(--max-post-moda-width)"
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

        <div class="comments"></div>
      </div>
    </template>
  </BaseModal>
</template>

<script setup lang="ts">
import { BaseModal } from '@/shared/ui/components'

import { CategoryTag } from '@/entities/blog/categories'
import { PostImage, PostMeta, type Post } from '@/entities/blog/posts'

interface PostModalProps {
  post: Post
}

defineProps<PostModalProps>()

const visible = defineModel<boolean>('visible', { default: false })
</script>

<style>
:root {
  --max-post-moda-width: 600px;
}
</style>

<style class="css">
@import './PostList.css';
</style>
