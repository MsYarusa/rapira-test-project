<template>
  <div>
    <img
      :src="post.imageUrl"
      :alt="`image-${post.title}'`"
    />

    <PostMeta :post="post" />

    <h2>{{ post.title }}</h2>

    <p>{{ post.description }}</p>

    <div class="post-categories__container">
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
