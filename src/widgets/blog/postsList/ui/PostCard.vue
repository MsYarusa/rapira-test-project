<template>
  <div
    class="z-40 flex w-[325px] flex-col gap-[10px] sm:w-[365px] xl:w-[400px]"
  >
    <img
      class="h-[200px] w-full rounded-xl object-cover object-center sm:h-[220px] xl:h-[250px]"
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
