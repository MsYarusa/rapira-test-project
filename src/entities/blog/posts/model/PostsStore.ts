import { defineStore } from 'pinia'
import { ref } from 'vue'

import type { Post } from './Post'

const STORE_NAME = 'posts'

export const usePostsStore = defineStore(STORE_NAME, () => {
  const posts = ref<Post[]>([])

  const setPosts = (newPosts: Post[]): void => {
    posts.value = newPosts
  }

  return {
    posts,
    setPosts,
  }
})
