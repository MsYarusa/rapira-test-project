<template>
  <div
    class="flex cursor-pointer flex-col gap-[10px]"
    @click="modalVisible = true"
  >
    <PostImage
      class="w-full"
      :post="post"
    />

    <PostMeta :post="post" />

    <h2 class="text-[22px] leading-[1] font-semibold">
      {{ post.title }}
    </h2>

    <p class="text-content">{{ post.description }}</p>

    <div class="post-categories__container">
      <CategoryTag
        v-for="category of post.categories"
        :key="category.id"
        :category="category"
      />
    </div>
  </div>

  <PostModal
    v-model:visible="modalVisible"
    :post="post"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'

import { CategoryTag } from '@/entities/blog/categories'
import { PostImage, PostMeta, type Post } from '@/entities/blog/posts'

import PostModal from './PostModal.vue'

interface PostCardProps {
  post: Post
}

defineProps<PostCardProps>()

const modalVisible = ref<boolean>(false)
</script>

<style class="css">
@import './PostList.css';
</style>
