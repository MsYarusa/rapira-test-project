<template>
  <div
    v-if="filteredPosts.length"
    class="post-list__container grid grid-cols-1 justify-center gap-x-[20px] gap-y-[20px] sm:grid-cols-2 sm:gap-y-[25px] lg:grid-cols-3 lg:gap-y-[40px]"
  >
    <PostCard
      v-for="post of filteredPosts"
      :key="post.id"
      :post="post"
    />
  </div>

  <div
    v-else
    class="post-list__container flex items-center justify-center"
  >
    <SearchPlug />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'

import { SearchPlug } from '@/shared/ui/assets/icons'

import type { Category } from '@/entities/blog/categories'
import { usePostsStore, type Post } from '@/entities/blog/posts'

import { useGetAllPosts } from '@/features/blog/posts/getAllPosts'

import PostCard from './PostCard.vue'

const postsStore = usePostsStore()
const { getAllPosts } = useGetAllPosts()

const selectedCategories = defineModel<Category[]>('selected-categories', {
  default: [],
})

const searchTitle = defineModel<string>('search-title')

const filterPosts = (): Post[] => {
  let posts: Post[] = postsStore.posts

  if (selectedCategories.value.length !== 0) {
    const selectedCategoryIds = new Set(
      selectedCategories.value.map((category) => {
        return category.id
      }),
    )

    posts = posts.filter((post) => {
      for (const currentCategory of post.categories) {
        if (selectedCategoryIds.has(currentCategory.id)) {
          return true
        }
      }

      return false
    })
  }

  if (searchTitle.value) {
    posts = posts.filter((post) => {
      const postTitle = post.title.trim().toLowerCase()
      const searchString = searchTitle.value?.trim().toLowerCase()

      if (searchString && postTitle.includes(searchString)) {
        return true
      }

      return false
    })
  }

  return posts
}

const filteredPosts = computed(filterPosts)

onMounted(getAllPosts)
</script>

<style lang="css">
@import './PostList.css';
</style>
