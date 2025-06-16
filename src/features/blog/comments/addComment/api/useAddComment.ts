import { watch } from 'vue'

import { useFetch, type ApiServiceReturn } from '@/shared/api'
import {
  postComment as requestMethod,
  type PostCommentData,
  type PostCommentError,
  type PostCommentResponse,
} from '@/shared/api/openapi/client'

import { useCommentsStore, type Comment } from '@/entities/blog/comments'
import { usePostsStore } from '@/entities/blog/posts'
import type { User } from '@/entities/users'

interface UseAddCommentReturn
  extends ApiServiceReturn<PostCommentResponse, PostCommentError> {
  addComment: (params: AddCommentParams) => Promise<void>
}

interface AddCommentParams {
  postId: number
  content: string
  user: User
}

export function useAddComment(): UseAddCommentReturn {
  const { sendRequest, error, response, isLoading, status, clearError } =
    useFetch<PostCommentResponse, PostCommentError, PostCommentData>({
      requestMethod,
    })

  let requestParamsCache: AddCommentParams | null = null

  const addComment = async (params: AddCommentParams): Promise<void> => {
    requestParamsCache = params

    await sendRequest({
      body: {
        post_id: params.postId,
        user_id: params.user.id,
        content: params.content,
      },
      url: '/blog/comments',
    })
  }

  const commentsStore = useCommentsStore()
  const postsStore = usePostsStore()

  const saveComment = (): void => {
    if (!response.value) {
      return
    }

    if (!requestParamsCache) {
      return
    }

    const comment: Comment = {
      user: requestParamsCache.user,
      content: requestParamsCache.content,
      date: new Date(),
      id: response.value.id,
    }

    commentsStore.addComment(comment, requestParamsCache.postId)
    postsStore.incrementPostCommentCount(requestParamsCache.postId)
  }

  watch(response, saveComment)

  return { addComment, response, error, isLoading, status, clearError }
}
