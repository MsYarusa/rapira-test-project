import type { Statuses } from './config'
import type { ComputedRef, Ref } from 'vue'

export interface ServerError<ErrorType> {
  errorInfo?: ErrorType | string
  errorMessage?: string
}

/*
  Последующие типы является типизацией возвращаемых api-сервисами значений.
  Они должны содержать только неизменяемые значения.
*/

// Некоторые api-сервисы могут возвращать только ошибку (например auth сервисы)
export interface ApiServiceErrorReturn<ErrorType> {
  error: Ref<ServerError<ErrorType> | null>
}

export interface ApiServiceReturn<DataType, ErrorType>
  extends ApiServiceErrorReturn<ErrorType> {
  response: Readonly<Ref<DataType | null>>
  status: Readonly<Ref<Statuses>>
  isLoading: ComputedRef<boolean>
  clearError: () => void
}
