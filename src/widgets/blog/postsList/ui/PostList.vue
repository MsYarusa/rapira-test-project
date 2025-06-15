<template>
  <div
    class="grid grid-cols-1 justify-center gap-x-[20px] gap-y-[20px] rounded-xl bg-white p-[15px] sm:grid-cols-2 sm:gap-y-[25px] lg:grid-cols-3 lg:gap-y-[40px] xl:p-[30px]"
  >
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
