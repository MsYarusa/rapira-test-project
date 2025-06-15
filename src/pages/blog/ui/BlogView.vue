<template>
  <BlogToolbar
    v-model:post-categories="selectedPostCategories"
    v-model:post-title="searchPostTitle"
  />
  <PageContainer>
    <PostList
      v-model:selected-categories="selectedPostCategories"
      v-model:search-title="searchPostTitle"
    />
  </PageContainer>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import { PageContainer } from '@/shared/ui/components'

import type { Category } from '@/entities/blog/categories'

import { BlogToolbar } from '@/widgets/blog/blogToolbar'
import { PostList } from '@/widgets/blog/postsList'

const selectedPostCategories = ref<Category[]>([])

const searchPostTitle = ref<string>('')
</script>
