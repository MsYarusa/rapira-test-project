import {
  mapCategoryApiToCategory,
  type Category,
} from '@/entities/blog/categories'
import {
  mapPostApiToPost,
  usePostsStore,
  type Post,
} from '@/entities/blog/posts'
import { useFetch, type ApiServiceReturn } from '@/shared/api'
import {
  getAllPosts as requestMethod,
  type GetAllPostsData,
  type GetAllPostsError,
  type GetAllPostsResponse,
} from '@/shared/api/openapi/client'
import { watch } from 'vue'

interface useGetAllCategoriesReturn
  extends ApiServiceReturn<GetAllPostsResponse, GetAllPostsError> {
  getAllPosts: () => Promise<void>
}

export function useGetAllPosts(): useGetAllCategoriesReturn {
  const { sendRequest, error, response, isLoading, status, clearError } =
    useFetch<GetAllPostsResponse, GetAllPostsError, GetAllPostsData>({
      requestMethod,
    })

  const getAllPosts = async (): Promise<void> => {
    await sendRequest({ url: '/blog/posts' })
  }

  const postsStore = usePostsStore()

  const savePosts = (): void => {
    if (!response.value) {
      return
    }

    const categories: Category[] = response.value.related.categories.map(
      mapCategoryApiToCategory,
    )

    const postsMapped = response.value.data.map((postApi) => {
      return mapPostApiToPost(postApi, categories)
    })

    const postsMappedDefined: Post[] = postsMapped.filter((post) => {
      return !!post
    })

    postsStore.setPosts(postsMappedDefined)
  }

  watch(response, savePosts)

  return {
    getAllPosts,
    response,
    error,
    isLoading,
    status,
    clearError,
  }
}
