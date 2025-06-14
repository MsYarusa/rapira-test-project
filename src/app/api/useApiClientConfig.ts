import { client } from '@/shared/api/openapi/client/client.gen'

export function useApiClientConfig(): void {
  client.setConfig({
    baseURL: import.meta.env.VITE_API_BASE_URL,
  })
}
