import { client } from '@/shared/api/openapi/client/client.gen'

import { API_BASE_URL_DEFAULT } from './config'

export function useApiClientConfig(): void {
  client.setConfig({
    baseURL: import.meta.env.VITE_API_BASE_URL || API_BASE_URL_DEFAULT,
  })
}
