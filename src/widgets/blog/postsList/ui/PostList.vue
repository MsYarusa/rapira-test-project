<template>
  <div
    v-if="filteredPosts.length || isLoading"
    class="post-list__container"
  >
    <PostCard
      v-for="post of filteredPosts"
      :key="post.id"
      :post="post"
    />

    <template v-if="isLoading && filteredPosts.length === 0">
      <PostCardPlaceholder
        v-for="i in POSTS_PLACEHOLDER_COUNT"
        :key="i"
      />
    </template>
  </div>

  <div
    v-else
    class="flex items-center justify-center rounded-xl bg-white px-[65px] py-[30px]"
  >
    <SearchPlug class="m-5" />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'

import { SearchPlug } from '@/shared/ui/assets/icons'

import type { Category } from '@/entities/blog/categories'
import { usePostsStore, type Post } from '@/entities/blog/posts'

import { useGetAllPosts } from '@/features/blog/posts/getAllPosts'

import PostCard from './post/PostCard.vue'
import PostCardPlaceholder from './post/PostCardPlaceholder.vue'

const POSTS_PLACEHOLDER_COUNT = 4

const postsStore = usePostsStore()
const { getAllPosts, isLoading } = useGetAllPosts()

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
