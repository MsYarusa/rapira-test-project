<template>
  <div class="flex flex-col gap-[10px]">
    <img
      class="aspect-13/8 w-full rounded-xl object-cover object-center"
      :src="post.imageUrl"
      :alt="`image-${post.title}'`"
    />

    <PostMeta :post="post" />

    <h2 class="text-[22px] leading-[1] font-semibold">
      {{ post.title }}
    </h2>

    <p class="leading-[25px]">{{ post.description }}</p>

    <div class="post-categories__container flex gap-[10px]">
      <CategoryTag
        v-for="category of post.categories"
        :key="category.id"
        :category="category"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { CategoryTag } from '@/entities/blog/categories'
import { PostMeta, type Post } from '@/entities/blog/posts'

interface PostCardProps {
  post: Post
}

defineProps<PostCardProps>()
</script>
