<template>
  <div>
    <PostCard
      v-for="post of postsStore.posts"
      :key="post.id"
      :post="post"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

import { usePostsStore } from '@/entities/blog/posts'

import { useGetAllPosts } from '@/features/blog/posts/getAllPosts'

import PostCard from './PostCard.vue'

const postsStore = usePostsStore()
const { getAllPosts } = useGetAllPosts()

onMounted(getAllPosts)
</script>

<style scoped></style>
