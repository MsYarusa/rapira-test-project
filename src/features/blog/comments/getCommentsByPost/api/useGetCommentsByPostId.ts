import { watch } from 'vue'

import { useFetch, type ApiServiceReturn } from '@/shared/api'
import {
  getAllCommentsByPost as requestMethod,
  type GetAllCommentsByPostData,
  type GetAllCommentsByPostError,
  type GetAllCommentsByPostResponse,
} from '@/shared/api/openapi/client'

import {
  type Comment,
  mapCommentApiToComment,
  useCommentsStore,
} from '@/entities/blog/comments'
import { mapUserApiToUser, type User } from '@/entities/users'

interface UseGetCommentsByPostIdReturn
  extends ApiServiceReturn<
    GetAllCommentsByPostResponse,
    GetAllCommentsByPostError
  > {
  getCommentsByPostId: (params: GetCommentsByPostIdParams) => Promise<void>
}

interface GetCommentsByPostIdParams {
  post_id: number
}

export function useGetCommentsByPostId(): UseGetCommentsByPostIdReturn {
  const { sendRequest, error, response, isLoading, status, clearError } =
    useFetch<
      GetAllCommentsByPostResponse,
      GetAllCommentsByPostError,
      GetAllCommentsByPostData
    >({ requestMethod })

  let postId: number | null = null

  const getCommentsByPostId = async (
    params: GetCommentsByPostIdParams,
  ): Promise<void> => {
    postId = params.post_id

    await sendRequest({
      query: {
        post_id: params.post_id,
      },
      url: '/blog/comments',
    })
  }

  const commentsStore = useCommentsStore()

  const saveComments = (): void => {
    if (!response.value) {
      return
    }

    const users: User[] = response.value.related.users.map(mapUserApiToUser)

    const commentsMapped = response.value.data.map((commentApi) => {
      return mapCommentApiToComment(commentApi, users)
    })

    const commentsMappedDefined: Comment[] = commentsMapped.filter(
      (comment) => {
        return !!comment
      },
    )

    if (!postId) {
      return
    }

    commentsStore.setComments(commentsMappedDefined, postId)
  }

  watch(response, saveComments)

  return {
    getCommentsByPostId,
    response,
    error,
    isLoading,
    status,
    clearError,
  }
}
