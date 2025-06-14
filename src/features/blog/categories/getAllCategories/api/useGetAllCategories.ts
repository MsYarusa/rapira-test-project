import {
  mapCategoryApiToCategory,
  useCategoriesStore,
} from '@/entities/blog/categories'
import { useFetch, type ApiServiceReturn } from '@/shared/api'
import {
  getAllCategories as requestMethod,
  type GetAllCategoriesData,
  type GetAllCategoriesError,
  type GetAllCategoriesResponse,
} from '@/shared/api/openapi/client'
import { watch } from 'vue'

interface useGetAllCategoriesReturn
  extends ApiServiceReturn<GetAllCategoriesResponse, GetAllCategoriesError> {
  getAllCategories: () => Promise<void>
}

export function useGetAllCategories(): useGetAllCategoriesReturn {
  const { sendRequest, error, response, isLoading, status, clearError } =
    useFetch<
      GetAllCategoriesResponse,
      GetAllCategoriesError,
      GetAllCategoriesData
    >({ requestMethod })

  const getAllCategories = async (): Promise<void> => {
    await sendRequest({ url: '/blog/categories' })
  }

  const categoriesStore = useCategoriesStore()

  const saveCategories = (): void => {
    if (!response.value) {
      return
    }

    const categories = response.value.data.map(mapCategoryApiToCategory)

    categoriesStore.setCategories(categories)
  }

  watch(response, saveCategories)

  return {
    getAllCategories,
    response,
    error,
    isLoading,
    status,
    clearError,
  }
}
