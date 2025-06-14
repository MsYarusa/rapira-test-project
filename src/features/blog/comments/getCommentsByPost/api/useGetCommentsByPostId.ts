import { useFetch, type ApiServiceReturn } from '@/shared/api'
import {
  getAllCommentsByPost as requestMethod,
  type GetAllCommentsByPostData,
  type GetAllCommentsByPostError,
  type GetAllCommentsByPostResponse,
} from '@/shared/api/openapi/client'
import type { Comment } from '../../../../../entities/blog/comments/model/Comment'
import { watch } from 'vue'
import { mapUserApiToUser, type User } from '@/entities/users'
import {
  mapCommentApiToComment,
  useCommentsStore,
} from '@/entities/blog/comments'

interface useGetCommentsByPostIdReturn
  extends ApiServiceReturn<
    GetAllCommentsByPostResponse,
    GetAllCommentsByPostError
  > {
  getCommentsByPostId: (params: getCommentsByPostIdParams) => Promise<void>
}

interface getCommentsByPostIdParams {
  post_id: number
}

export function useGetCommentsByPostId(): useGetCommentsByPostIdReturn {
  const { sendRequest, error, response, isLoading, status, clearError } =
    useFetch<
      GetAllCommentsByPostResponse,
      GetAllCommentsByPostError,
      GetAllCommentsByPostData
    >({ requestMethod })

  const getCommentsByPostId = async (
    params: getCommentsByPostIdParams,
  ): Promise<void> => {
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

    commentsStore.setComments(commentsMappedDefined)
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
