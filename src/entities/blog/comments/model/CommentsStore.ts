import { defineStore } from 'pinia'
import { ref } from 'vue'

import type { Comment } from './Comment'

const STORE_NAME = 'comments'

export const useCommentsStore = defineStore(STORE_NAME, () => {
  const commentsRecord = ref<{ [key: number]: Comment[] }>({})

  const setComments = (newComments: Comment[], postId: number): void => {
    commentsRecord.value[postId] = newComments
  }

  const addComment = (newComment: Comment, postId: number): void => {
    commentsRecord.value[postId].unshift(newComment)
  }

  return {
    commentsRecord,
    setComments,
    addComment,
  }
})
