import { defineStore } from 'pinia'
import { ref } from 'vue'

import type { Post } from './Post'

const STORE_NAME = 'posts'

export const usePostsStore = defineStore(STORE_NAME, () => {
  const posts = ref<Post[]>([])

  const setPosts = (newPosts: Post[]): void => {
    posts.value = newPosts
  }

  const incrementPostCommentCount = (postId: number): void => {
    const postToUpdate = posts.value.find((post) => {
      return post.id === postId
    })

    if (!postToUpdate) {
      return
    }

    postToUpdate.commentsCount += 1
  }

  return {
    posts,
    setPosts,
    incrementPostCommentCount,
  }
})
