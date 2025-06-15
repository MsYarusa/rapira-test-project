<template>
  <BlogToolbar
    v-model:post-categories="filteredPostCategories"
    v-model:post-title="searchPostTitle"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'

import type { Category } from '@/entities/blog/categories'

import { BlogToolbar } from '@/widgets/blog/blogToolbar'

const filteredPostCategories = ref<Category[]>([])

const searchPostTitle = ref<string>('')
</script>
