<template>
  <BlogToolbar
    v-model:post-categories="filteredPostCategories"
    v-model:post-title="searchPostTitle"
  />
  <PageContainer>
    <PostList />
  </PageContainer>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import { PageContainer } from '@/shared/ui/components'

import type { Category } from '@/entities/blog/categories'

import { BlogToolbar } from '@/widgets/blog/blogToolbar'
import { PostList } from '@/widgets/blog/postsList'

const filteredPostCategories = ref<Category[]>([])

const searchPostTitle = ref<string>('')
</script>
