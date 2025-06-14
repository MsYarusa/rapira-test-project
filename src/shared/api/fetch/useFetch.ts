import { shallowRef, computed } from 'vue'

import { Statuses } from '../config'
import type { FetchResponse, ServerError, ApiServiceReturn } from '../types'

interface FetchParams<DataType, ErrorType, RequestOptionsType> {
  requestMethod: (
    options: RequestOptionsType,
  ) => Promise<FetchResponse<DataType, ErrorType>>
}

interface FetchReturn<DataType, ErrorType, RequestOptionsType>
  extends ApiServiceReturn<DataType, ErrorType> {
  sendRequest: (requestBody: RequestOptionsType) => Promise<void>
}

export function useFetch<DataType, ErrorType, RequestOptionsType = void>({
  requestMethod,
}: FetchParams<DataType, ErrorType, RequestOptionsType>): FetchReturn<
  DataType,
  ErrorType,
  RequestOptionsType
> {
  const responseData = shallowRef<DataType | null>(null)
  const responseError = shallowRef<ServerError<ErrorType> | null>(null)

  const clearError = (): void => {
    responseError.value = null
  }

  const responseStatus = computed<Statuses>(() => {
    if (responseError.value) {
      return Statuses.error
    }

    if (responseData.value) {
      return Statuses.success
    }

    return Statuses.pending
  })

  const isLoading = computed(() => {
    return responseStatus.value === Statuses.pending
  })

  const sendRequest = async (
    requestBody: RequestOptionsType,
  ): Promise<void> => {
    clearError()

    const { data, error } = await requestMethod(requestBody)

    responseData.value = data ?? null
    responseError.value = error ? { errorInfo: error } : null
  }

  return {
    sendRequest,
    clearError,
    data: responseData,
    error: responseError,
    status: responseStatus,
    isLoading,
  }
}
